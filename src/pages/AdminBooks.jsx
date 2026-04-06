import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  HStack,
  IconButton,
  Image,
} from '@chakra-ui/react';
import axios from 'axios';
import { FaPlus, FaEdit, FaTrash, FaArrowLeft, FaImage } from 'react-icons/fa';
import { Icon, Text } from '@chakra-ui/react';

const AdminBooks = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('/api/books');
      setBooks(res.data);
    } catch (err) {
      toast({
        title: 'Error fetching books',
        status: 'error',
        duration: 2000,
      });
    }
  };

  const handleAdd = () => {
    setEditingBook(null);
    onOpen();
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    onOpen();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBooks();
      toast({
        title: 'Book deleted',
        status: 'success',
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: 'Error deleting book',
        status: 'error',
        duration: 2000,
      });
    }
  };

  const handleSave = async (bookData) => {
    try {
      if (editingBook) {
        await axios.put(`/api/books/${editingBook._id}`, bookData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast({
          title: 'Book updated',
          status: 'success',
          duration: 2000,
        });
      } else {
        await axios.post('/api/books', bookData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast({
          title: 'Book added',
          status: 'success',
          duration: 2000,
        });
      }
      fetchBooks();
      onClose();
    } catch (err) {
      toast({
        title: 'Error saving book',
        status: 'error',
        duration: 2000,
      });
    }
  };

  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <Container maxW="6xl">
        <HStack justify="space-between" mb={6}>
          <HStack spacing={4}>
            <IconButton 
              icon={<FaArrowLeft />} 
              onClick={() => navigate('/admin/dashboard')}
              variant="ghost"
              aria-label="Back"
            />
            <Heading size="lg">Manage Books</Heading>
          </HStack>
          <Button leftIcon={<FaPlus />} onClick={handleAdd} colorScheme="green">
            Add New Book
          </Button>
        </HStack>
        
        <Box bg="white" borderRadius="lg" shadow="sm" overflow="hidden">
          <Table variant="simple">
            <Thead bg="gray.50">
              <Tr>
                <Th>Cover</Th>
                <Th>Description</Th>
                <Th>Price</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {books.length === 0 ? (
                <Tr>
                  <Td colSpan={4} textAlign="center" py={8} color="gray.500">
                    No books found. Add your first book!
                  </Td>
                </Tr>
              ) : (
                books.map((book) => (
                  <Tr key={book._id} _hover={{ bg: 'gray.50' }}>
                    <Td>
                      {book.image ? (
                        <Image src={book.image} alt="Book cover" boxSize="50px" objectFit="cover" borderRadius="md" />
                      ) : (
                        <Box boxSize="50px" bg="gray.200" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaImage} color="gray.500" />
                        </Box>
                      )}
                    </Td>
                    <Td maxW="300px">
                      <Text noOfLines={2}>{book.description}</Text>
                    </Td>
                    <Td fontWeight="medium">{book.price || 'N/A'}</Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton 
                          icon={<FaEdit />} 
                          size="sm" 
                          onClick={() => handleEdit(book)}
                          aria-label="Edit"
                        />
                        <IconButton 
                          icon={<FaTrash />} 
                          size="sm" 
                          colorScheme="red"
                          onClick={() => handleDelete(book._id)}
                          aria-label="Delete"
                        />
                      </HStack>
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </Box>
        <BookModal
          isOpen={isOpen}
          onClose={onClose}
          book={editingBook}
          onSave={handleSave}
        />
      </Container>
    </Box>
  );
};

const BookModal = ({ isOpen, onClose, book, onSave }) => {
  const [formData, setFormData] = useState({
    image: '',
    description: '',
    price: '',
    buttonLabel: 'Buy on Amazon',
    link: '',
    previewLink: '',
  });

  useEffect(() => {
    if (book) {
      setFormData({
        image: book.image || '',
        description: book.description || '',
        price: book.price || '',
        buttonLabel: book.buttonLabel || 'Buy on Amazon',
        link: book.link || '',
        previewLink: book.previewLink || '',
      });
    } else {
      setFormData({
        image: '',
        description: '',
        price: '',
        buttonLabel: 'Buy on Amazon',
        link: '',
        previewLink: '',
      });
    }
  }, [book, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
        <ModalHeader>{book ? 'Edit Book' : 'Add New Book'}</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Image URL</FormLabel>
              <Input name="image" value={formData.image} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" value={formData.description} onChange={handleChange} required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Price</FormLabel>
              <Input name="price" value={formData.price} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Button Label</FormLabel>
              <Input name="buttonLabel" value={formData.buttonLabel} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Link</FormLabel>
              <Input name="link" value={formData.link} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Preview Link</FormLabel>
              <Input name="previewLink" value={formData.previewLink} onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="green" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AdminBooks;