import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";
import {
	Container,
	Button,
	Icon,
	Badge,
	Image,
	Text,
	SimpleGrid,
	HStack,
	VStack,
} from "@chakra-ui/react";
import {
	FaArrowLeft,
	FaClock,
	FaCalendarAlt,
	FaUser,
	FaEye,
	FaShareAlt,
	FaFacebookF,
	FaTwitter,
	FaWhatsapp,
	FaLink,
	FaChevronRight,
	FaBookOpen,
	FaHeart,
	FaHome,
	FaLightbulb,
	FaUsers,
	FaCheckCircle,
} from "react-icons/fa";
import CardDataArticles from "../utils/CardDataArticles";
import "./ArticleDetail.css";

// Category icon mapping
const categoryIcons = {
	Marriage: FaHeart,
	Singles: FaUser,
	Leadership: FaLightbulb,
	Relationships: FaUsers,
};

// Get article by path
const getArticleByPath = (path) => {
	return CardDataArticles.find((article) => article.link === path);
};

// Get related articles by category
const getRelatedArticles = (currentArticle, limit = 3) => {
	return CardDataArticles.filter(
		(article) =>
			article.category === currentArticle.category &&
			article.id !== currentArticle.id,
	).slice(0, limit);
};

const ArticleDetail = () => {
	const location = useLocation();
	const [copied, setCopied] = useState(false);

	// Get article from URL path
	const article = getArticleByPath(location.pathname);

	// Get related articles
	const relatedArticles = article ? getRelatedArticles(article) : [];

	// Get category icon
	const CategoryIcon = article
		? categoryIcons[article.category] || FaBookOpen
		: FaBookOpen;

	// Format date
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString("en-US", options);
	};

	// Handle share
	const handleShare = (platform) => {
		const url = window.location.href;
		const text = article?.title || "";

		switch (platform) {
			case "facebook":
				window.open(
					`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
					"_blank",
				);
				break;
			case "twitter":
				window.open(
					`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
					"_blank",
				);
				break;
			case "whatsapp":
				window.open(
					`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
					"_blank",
				);
				break;
			case "copy":
				navigator.clipboard.writeText(url);
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
				break;
			default:
				break;
		}
	};

	// If no article found, show message
	if (!article) {
		return (
			<>
				<Navbar />
				<div className="article-not-found">
					<Container maxW="800px">
						<div className="not-found-content">
							<Icon as={FaBookOpen} className="not-found-icon" />
							<h1>Article Not Found</h1>
							<p>
								The article you're looking for doesn't exist or
								has been moved.
							</p>
							<Link to="/articles">
								<Button className="back-btn">
									<Icon as={FaArrowLeft} mr={2} />
									Back to Articles
								</Button>
							</Link>
						</div>
					</Container>
				</div>
				<WhatsappChat />
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navbar />

			{/* Breadcrumb Navigation */}
			<div className="article-breadcrumb">
				<Container maxW="1200px">
					<HStack spacing={2} className="breadcrumb-items">
						<Link to="/" className="breadcrumb-link">
							Home
						</Link>
						<Icon
							as={FaChevronRight}
							className="breadcrumb-separator"
						/>
						<Link to="/articles" className="breadcrumb-link">
							Articles
						</Link>
						<Icon
							as={FaChevronRight}
							className="breadcrumb-separator"
						/>
						<span className="breadcrumb-current">
							{article.title.substring(0, 40)}...
						</span>
					</HStack>
				</Container>
			</div>

			{/* Hero Section */}
			<section className="article-hero">
				<div className="article-hero-image">
					<Image
						src={article.image}
						alt={article.title}
						objectFit="cover"
					/>
					<div className="article-hero-overlay"></div>
				</div>
				<Container maxW="1000px" className="article-hero-content">
					<Badge className="article-category-badge">
						<Icon as={CategoryIcon} mr={2} />
						{article.category}
					</Badge>
					<h1 className="article-title">{article.title}</h1>
					<div className="article-meta">
						<div className="meta-item">
							<Icon as={FaUser} />
							<span>{article.author}</span>
						</div>
						<div className="meta-item">
							<Icon as={FaCalendarAlt} />
							<span>{formatDate(article.date)}</span>
						</div>
						<div className="meta-item">
							<Icon as={FaClock} />
							<span>{article.readTime} min read</span>
						</div>
						<div className="meta-item">
							<Icon as={FaEye} />
							<span>{article.views.toLocaleString()} views</span>
						</div>
					</div>
				</Container>
			</section>

			{/* Article Content */}
			<section className="article-content-section">
				<Container maxW="900px">
					<div className="article-layout">
						{/* Main Content */}
						<article className="article-main">
							{/* Share Sidebar (Desktop) */}
							<div className="article-share-sidebar">
								<span className="share-label">Share</span>
								<div className="share-buttons">
									<button
										className="share-btn facebook"
										onClick={() => handleShare("facebook")}
										aria-label="Share on Facebook"
									>
										<Icon as={FaFacebookF} />
									</button>
									<button
										className="share-btn twitter"
										onClick={() => handleShare("twitter")}
										aria-label="Share on Twitter"
									>
										<Icon as={FaTwitter} />
									</button>
									<button
										className="share-btn whatsapp"
										onClick={() => handleShare("whatsapp")}
										aria-label="Share on WhatsApp"
									>
										<Icon as={FaWhatsapp} />
									</button>
									<button
										className="share-btn link"
										onClick={() => handleShare("copy")}
										aria-label="Copy link"
									>
										<Icon
											as={copied ? FaCheckCircle : FaLink}
										/>
									</button>
								</div>
							</div>

							{/* Article Body */}
							<div className="article-body">
								<p className="article-intro">
									{article.excerpt}
								</p>
								<div className="article-text">
									{article.price
										.split("\n\n")
										.map((paragraph, index) => (
											<p key={index}>{paragraph}</p>
										))}
								</div>
							</div>

							{/* Share Section (Mobile) */}
							<div className="article-share-mobile">
								<span className="share-label">
									Share this article
								</span>
								<div className="share-buttons">
									<button
										className="share-btn facebook"
										onClick={() => handleShare("facebook")}
									>
										<Icon as={FaFacebookF} />
									</button>
									<button
										className="share-btn twitter"
										onClick={() => handleShare("twitter")}
									>
										<Icon as={FaTwitter} />
									</button>
									<button
										className="share-btn whatsapp"
										onClick={() => handleShare("whatsapp")}
									>
										<Icon as={FaWhatsapp} />
									</button>
									<button
										className="share-btn link"
										onClick={() => handleShare("copy")}
									>
										<Icon
											as={copied ? FaCheckCircle : FaLink}
										/>
									</button>
								</div>
							</div>

							{/* Author Bio */}
							<div className="author-bio">
								<div className="author-avatar-large">
									{article.author.charAt(0)}
								</div>
								<div className="author-bio-content">
									<h3 className="author-name">
										{article.author}
									</h3>
									<p className="author-description">
										Christian author and speaker dedicated
										to helping individuals build stronger
										relationships, develop leadership
										skills, and deepen their faith through
										practical biblical teachings.
									</p>
								</div>
							</div>

							{/* Back Button */}
							<div className="article-navigation">
								<Link to="/articles" className="back-link">
									<Icon as={FaArrowLeft} />
									Back to Articles
								</Link>
							</div>
						</article>
					</div>
				</Container>
			</section>

			{/* Related Articles */}
			{relatedArticles.length > 0 && (
				<section className="related-articles-section">
					<Container maxW="1200px">
						<h2 className="related-title">
							<Icon as={FaBookOpen} mr={3} />
							Related Articles
						</h2>
						<SimpleGrid
							columns={{ base: 1, md: 3 }}
							spacing={8}
							className="related-grid"
						>
							{relatedArticles.map((related) => (
								<Link
									to={related.link}
									key={related.id}
									className="related-card"
								>
									<div className="related-card-image">
										<Image
											src={related.image}
											alt={related.title}
											objectFit="cover"
										/>
									</div>
									<div className="related-card-content">
										<Badge className="related-badge">
											{related.category}
										</Badge>
										<h3 className="related-card-title">
											{related.title}
										</h3>
										<div className="related-card-meta">
											<span>
												<Icon as={FaClock} mr={1} />
												{related.readTime} min
											</span>
											<span>
												<Icon as={FaEye} mr={1} />
												{related.views.toLocaleString()}
											</span>
										</div>
									</div>
								</Link>
							))}
						</SimpleGrid>
					</Container>
				</section>
			)}

			{/* Newsletter Section */}
			<section className="article-newsletter-section">
				<Container maxW="700px">
					<div className="newsletter-card-article">
						<Icon
							as={FaBookOpen}
							className="newsletter-icon-article"
						/>
						<h3>Enjoyed this article?</h3>
						<p>
							Subscribe to get notified when new articles are
							published.
						</p>
						<div className="newsletter-form-article">
							<input
								type="email"
								placeholder="Enter your email"
								className="newsletter-input-article"
							/>
							<button className="newsletter-btn-article">
								Subscribe
							</button>
						</div>
					</div>
				</Container>
			</section>

			<WhatsappChat />
			<Footer />
		</>
	);
};

export default ArticleDetail;
