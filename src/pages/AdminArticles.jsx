import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
} from '@chakra-ui/react';
import axios from 'axios';

const AdminArticles = () => {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await axios.get('/api/articles');
      setArticles(res.data);
    } catch (err) {
      toast({
        title: 'Error fetching articles',
        status: 'error',
        duration: 2000,
      });
    }
  };

  const handleAdd = () => {
    setEditingArticle(null);
    onOpen();
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    onOpen();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchArticles();
      toast({
        title: 'Article deleted',
        status: 'success',
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: 'Error deleting article',
        status: 'error',
        duration: 2000,
      });
    }
  };

  const handleSave = async (articleData) => {
    try {
      if (editingArticle) {
        await axios.put(`/api/articles/${editingArticle._id}`, articleData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast({
          title: 'Article updated',
          status: 'success',
          duration: 2000,
        });
      } else {
        await axios.post('/api/articles', articleData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast({
          title: 'Article added',
          status: 'success',
          duration: 2000,
        });
      }
      fetchArticles();
      onClose();
    } catch (err) {
      toast({
        title: 'Error saving article',
        status: 'error',
        duration: 2000,
      });
    }
  };

  return (
    <Container maxW="6xl" py={8}>
      <Box mb={8}>
        <Heading>Manage Articles</Heading>
        <Button mt={4} onClick={handleAdd} colorScheme="blue">
          Add New Article
        </Button>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {articles.map((article) => (
            <Tr key={article._id}>
              <Td>{article.title}</Td>
              <Td>{article.category}</Td>
              <Td>{new Date(article.date).toLocaleDateString()}</Td>
              <Td>
                <Button size="sm" mr={2} onClick={() => handleEdit(article)}>
                  Edit
                </Button>
                <Button size="sm" colorScheme="red" onClick={() => handleDelete(article._id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <ArticleModal
        isOpen={isOpen}
        onClose={onClose}
        article={editingArticle}
        onSave={handleSave}
      />
    </Container>
  );
};

const ArticleModal = ({ isOpen, onClose, article, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    excerpt: '',
    image: '',
    category: '',
    readTime: '',
    featured: false,
    content: '',
  });

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title || '',
        description: article.description || '',
        excerpt: article.excerpt || '',
        image: article.image || '',
        category: article.category || '',
        readTime: article.readTime || '',
        featured: article.featured || false,
        content: article.content || '',
      });
    } else {
      setFormData({
        title: '',
        description: '',
        excerpt: '',
        image: '',
        category: '',
        readTime: '',
        featured: false,
        content: '',
      });
    }
  }, [article, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{article ? 'Edit Article' : 'Add New Article'}</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={formData.title} onChange={handleChange} required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" value={formData.description} onChange={handleChange} required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Excerpt</FormLabel>
              <Textarea name="excerpt" value={formData.excerpt} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Image URL</FormLabel>
              <Input name="image" value={formData.image} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Category</FormLabel>
              <Select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="Marriage">Marriage</option>
                <option value="Courtship">Courtship</option>
                <option value="Leadership">Leadership</option>
                <option value="Purpose">Purpose</option>
                <option value="Christian Living">Christian Living</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Read Time (minutes)</FormLabel>
              <Input name="readTime" type="number" value={formData.readTime} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <Checkbox name="featured" isChecked={formData.featured} onChange={handleChange}>
                Featured
              </Checkbox>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Content</FormLabel>
              <Textarea name="content" value={formData.content} onChange={handleChange} rows={10} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AdminArticles;