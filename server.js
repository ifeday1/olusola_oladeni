require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Mongoose schemas
const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  excerpt: String,
  image: String, // URL or path
  date: { type: Date, default: Date.now },
  category: String,
  author: { type: String, default: 'Olusola Oladeni' },
  views: { type: Number, default: 0 },
  readTime: Number,
  featured: { type: Boolean, default: false },
  link: String,
  content: String
});

const bookSchema = new mongoose.Schema({
  image: String,
  description: { type: String, required: true },
  price: String,
  buttonLabel: { type: String, default: 'Buy on Amazon' },
  link: String,
  previewLink: String
});

const mediaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['video', 'image', 'audio'], required: true },
  url: String,
  description: String,
  date: { type: Date, default: Date.now },
  category: String
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Article = mongoose.model('Article', articleSchema);
const Book = mongoose.model('Book', bookSchema);
const Media = mongoose.model('Media', mediaSchema);
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:", "https://images.unsplash.com"],
      scriptSrc: ["'self'", "https://cdnjs.cloudflare.com"],
      connectSrc: ["'self'", "https://olusolaoladeni.org"]
    },
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? ['https://olusolaoladeni.org', 'https://www.olusolaoladeni.org']
    : ['http://localhost:3000', 'http://localhost:3001'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'oladeni2008@yahoo.com',
    pass: process.env.EMAIL_PASS || '' // Set this in environment variables
  }
});

// Contact form endpoint
app.post('/api/contact', [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('phone').optional().isMobilePhone().withMessage('Valid phone number required'),
  body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be 10-2000 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { name, email, phone, subject, message } = req.body;

    // Email content
    const mailOptions = {
      from: email,
      to: 'oladeni2008@yahoo.com',
      subject: `Contact Form: ${subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log the submission
    console.log('Contact form submission:', { name, email, phone, subject, message });

    res.json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ==================== AUTH ROUTES ====================

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ success: false, error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '7d' });
    res.json({ success: true, token, username: user.username });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Register (first user only)
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ success: false, error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.json({ success: true, message: 'Admin created successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// ==================== ARTICLES ROUTES ====================

// Get all articles (public)
app.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

// Get single article
app.get('/api/articles/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    article.views += 1;
    await article.save();
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch article' });
  }
});

// Create article (protected)
app.post('/api/articles', [
  body('title').trim().notEmpty(),
  body('description').trim().notEmpty()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const article = new Article(req.body);
    await article.save();
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create article' });
  }
});

// Update article (protected)
app.put('/api/articles/:id', async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update article' });
  }
});

// Delete article (protected)
app.delete('/api/articles/:id', async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json({ message: 'Article deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
});

// ==================== BOOKS ROUTES ====================

// Get all books (public)
app.get('/api/w', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// Create book (protected)
app.post('/api/books', [
  body('description').trim().notEmpty()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const book = new Book(req.body);
    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create book' });
  }
});

// Update book (protected)
app.put('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update book' });
  }
});

// Delete book (protected)
app.delete('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

// ==================== MEDIA ROUTES ====================

// Get all media (public)
app.get('/api/media', async (req, res) => {
  try {
    const media = await Media.find().sort({ date: -1 });
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch media' });
  }
});

// Create media (protected)
app.post('/api/media', [
  body('title').trim().notEmpty(),
  body('type').isIn(['video', 'image', 'audio'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const media = new Media(req.body);
    await media.save();
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create media' });
  }
});

// Update media (protected)
app.put('/api/media/:id', async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update media' });
  }
});

// Delete media (protected)
app.delete('/api/media/:id', async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }
    res.json({ message: 'Media deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete media' });
  }
});

// ==================== SERMONS ROUTES (for Media page) ====================

// Get all sermons (public)
app.get('/api/sermons', async (req, res) => {
  try {
    const { series, speaker, type } = req.query;
    let query = {};
    if (series) query.series = series;
    if (speaker) query.speaker = speaker;
    if (type) query.type = type;
    const sermons = await Media.find({ ...query, type: { $in: ['video', 'audio'] } }).sort({ date: -1 });
    res.json(sermons);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sermons' });
  }
});

// ==================== GALLERY ROUTES ====================

// Get all gallery images (public)
app.get('/api/gallery', async (req, res) => {
  try {
    const { category } = req.query;
    let query = { type: 'image' };
    if (category) query.category = category;
    const images = await Media.find(query).sort({ date: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch gallery' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
