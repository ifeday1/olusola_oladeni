import React from 'react';
import { Box, Container, Heading, VStack, Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast({
      title: 'Logged out',
      status: 'success',
      duration: 2000,
    });
    navigate('/admin/login');
  };

  return (
    <Container maxW="4xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading>Admin Dashboard</Heading>
          <Button mt={4} onClick={handleLogout} colorScheme="red">
            Logout
          </Button>
        </Box>
        <VStack spacing={4}>
          <Button onClick={() => navigate('/admin/articles')} colorScheme="blue" size="lg">
            Manage Articles
          </Button>
          <Button onClick={() => navigate('/admin/books')} colorScheme="green" size="lg">
            Manage Books
          </Button>
          <Button onClick={() => navigate('/admin/media')} colorScheme="purple" size="lg">
            Manage Media
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default AdminDashboard;