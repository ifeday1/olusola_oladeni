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
} from '@chakra-ui/react';
import axios from 'axios';

const AdminBooks = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const token = localStorage.getItem('token');

  useEffect(() => {
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
    <Container maxW="6xl" py={8}>
      <Box mb={8}>
        <Heading>Manage Books</Heading>
        <Button mt={4} onClick={handleAdd} colorScheme="green">
          Add New Book
        </Button>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {books.map((book) => (
            <Tr key={book._id}>
              <Td>{book.description}</Td>
              <Td>{book.price}</Td>
              <Td>
                <Button size="sm" mr={2} onClick={() => handleEdit(book)}>
                  Edit
                </Button>
                <Button size="sm" colorScheme="red" onClick={() => handleDelete(book._id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <BookModal
        isOpen={isOpen}
        onClose={onClose}
        book={editingBook}
        onSave={handleSave}
      />
    </Container>
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