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
} from '@chakra-ui/react';
import axios from 'axios';

const AdminMedia = () => {
  const [media, setMedia] = useState([]);
  const [editingMedia, setEditingMedia] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchMedia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMedia = async () => {
    try {
      const res = await axios.get('/api/media');
      setMedia(res.data);
    } catch (err) {
      toast({
        title: 'Error fetching media',
        status: 'error',
        duration: 2000,
      });
    }
  };

  const handleAdd = () => {
    setEditingMedia(null);
    onOpen();
  };

  const handleEdit = (mediaItem) => {
    setEditingMedia(mediaItem);
    onOpen();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/media/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchMedia();
      toast({
        title: 'Media deleted',
        status: 'success',
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: 'Error deleting media',
        status: 'error',
        duration: 2000,
      });
    }
  };

  const handleSave = async (mediaData) => {
    try {
      if (editingMedia) {
        await axios.put(`/api/media/${editingMedia._id}`, mediaData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast({
          title: 'Media updated',
          status: 'success',
          duration: 2000,
        });
      } else {
        await axios.post('/api/media', mediaData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast({
          title: 'Media added',
          status: 'success',
          duration: 2000,
        });
      }
      fetchMedia();
      onClose();
    } catch (err) {
      toast({
        title: 'Error saving media',
        status: 'error',
        duration: 2000,
      });
    }
  };

  return (
    <Container maxW="6xl" py={8}>
      <Box mb={8}>
        <Heading>Manage Media</Heading>
        <Button mt={4} onClick={handleAdd} colorScheme="purple">
          Add New Media
        </Button>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Type</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {media.map((mediaItem) => (
            <Tr key={mediaItem._id}>
              <Td>{mediaItem.title}</Td>
              <Td>{mediaItem.type}</Td>
              <Td>
                <Button size="sm" mr={2} onClick={() => handleEdit(mediaItem)}>
                  Edit
                </Button>
                <Button size="sm" colorScheme="red" onClick={() => handleDelete(mediaItem._id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <MediaModal
        isOpen={isOpen}
        onClose={onClose}
        mediaItem={editingMedia}
        onSave={handleSave}
      />
    </Container>
  );
};

const MediaModal = ({ isOpen, onClose, mediaItem, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'video',
    url: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    if (mediaItem) {
      setFormData({
        title: mediaItem.title || '',
        type: mediaItem.type || 'video',
        url: mediaItem.url || '',
        description: mediaItem.description || '',
        category: mediaItem.category || '',
      });
    } else {
      setFormData({
        title: '',
        type: 'video',
        url: '',
        description: '',
        category: '',
      });
    }
  }, [mediaItem, isOpen]);

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
        <ModalHeader>{mediaItem ? 'Edit Media' : 'Add New Media'}</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={formData.title} onChange={handleChange} required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Type</FormLabel>
              <Select name="type" value={formData.type} onChange={handleChange}>
                <option value="video">Video</option>
                <option value="image">Image</option>
                <option value="audio">Audio</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>URL</FormLabel>
              <Input name="url" value={formData.url} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" value={formData.description} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Category</FormLabel>
              <Input name="category" value={formData.category} onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="purple" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AdminMedia;