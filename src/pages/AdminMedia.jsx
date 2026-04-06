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
  Select,
  HStack,
  IconButton,
  Badge,
} from '@chakra-ui/react';
import axios from 'axios';
import { FaPlus, FaEdit, FaTrash, FaArrowLeft, FaVideo, FaImage, FaHeadphones } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

const AdminMedia = () => {
  const [media, setMedia] = useState([]);
  const [editingMedia, setEditingMedia] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
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

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return FaVideo;
      case 'image': return FaImage;
      case 'audio': return FaHeadphones;
      default: return FaVideo;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'red';
      case 'image': return 'blue';
      case 'audio': return 'purple';
      default: return 'gray';
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
            <Heading size="lg">Manage Media</Heading>
          </HStack>
          <Button leftIcon={<FaPlus />} onClick={handleAdd} colorScheme="purple">
            Add New Media
          </Button>
        </HStack>
        
        <Box bg="white" borderRadius="lg" shadow="sm" overflow="hidden">
          <Table variant="simple">
            <Thead bg="gray.50">
              <Tr>
                <Th>Title</Th>
                <Th>Type</Th>
                <Th>Category</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {media.length === 0 ? (
                <Tr>
                  <Td colSpan={5} textAlign="center" py={8} color="gray.500">
                    No media found. Add your first media!
                  </Td>
                </Tr>
              ) : (
                media.map((mediaItem) => (
                  <Tr key={mediaItem._id} _hover={{ bg: 'gray.50' }}>
                    <Td fontWeight="medium">{mediaItem.title}</Td>
                    <Td>
                      <Badge colorScheme={getTypeColor(mediaItem.type)}>
                        <HStack spacing={1}>
                          <Icon as={getTypeIcon(mediaItem.type)} />
                          <span>{mediaItem.type}</span>
                        </HStack>
                      </Badge>
                    </Td>
                    <Td>{mediaItem.category || 'Uncategorized'}</Td>
                    <Td>{new Date(mediaItem.date).toLocaleDateString()}</Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton 
                          icon={<FaEdit />} 
                          size="sm" 
                          onClick={() => handleEdit(mediaItem)}
                          aria-label="Edit"
                        />
                        <IconButton 
                          icon={<FaTrash />} 
                          size="sm" 
                          colorScheme="red"
                          onClick={() => handleDelete(mediaItem._id)}
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
        <MediaModal
          isOpen={isOpen}
          onClose={onClose}
          mediaItem={editingMedia}
          onSave={handleSave}
        />
      </Container>
    </Box>
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