import React, { useState, useEffect } from 'react';
import { Box, Container, Heading, VStack, HStack, Button, useToast, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, Icon, Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBook, FaFileAlt, FaVideo, FaChartLine, FaEnvelope, FaSignOutAlt, FaHome } from 'react-icons/fa';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [stats, setStats] = useState({
    articles: 0,
    books: 0,
    media: 0,
    contacts: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [articlesRes, booksRes, mediaRes] = await Promise.all([
        axios.get('/api/articles'),
        axios.get('/api/books'),
        axios.get('/api/media')
      ]);
      setStats({
        articles: articlesRes.data.length,
        books: booksRes.data.length,
        media: mediaRes.data.length,
        contacts: 0
      });
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    toast({
      title: 'Logged out',
      status: 'success',
      duration: 2000,
    });
    navigate('/admin/login');
  };

  const menuItems = [
    { label: 'Dashboard', icon: FaChartLine, path: '/admin/dashboard', color: 'blue' },
    { label: 'Articles', icon: FaFileAlt, path: '/admin/articles', color: 'green' },
    { label: 'Books', icon: FaBook, path: '/admin/books', color: 'purple' },
    { label: 'Media', icon: FaVideo, path: '/admin/media', color: 'red' },
    { label: 'View Website', icon: FaHome, path: '/', color: 'gray' },
  ];

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box bg="white" shadow="sm" px={6} py={4}>
        <Flex justify="space-between" align="center">
          <Heading size="md" color="gray.700">Admin Dashboard</Heading>
          <HStack spacing={4}>
            <Button 
              leftIcon={<FaHome />} 
              variant="ghost" 
              onClick={() => navigate('/')}
              size="sm"
            >
              View Site
            </Button>
            <Button 
              leftIcon={<FaSignOutAlt />} 
              colorScheme="red" 
              variant="outline" 
              onClick={handleLogout}
              size="sm"
            >
              Logout
            </Button>
          </HStack>
        </Flex>
      </Box>

      <Container maxW="7xl" py={8}>
        {/* Stats Cards */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} mb={8}>
          <Box bg="white" p={6} borderRadius="lg" shadow="sm" cursorPointer onClick={() => navigate('/admin/articles')}>
            <Stat>
              <HStack spacing={4}>
                <Box w={12} h={12} bg="green.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaFileAlt} w={6} h={6} color="green.500" />
                </Box>
                <Box>
                  <StatLabel>Articles</StatLabel>
                  <StatNumber>{stats.articles}</StatNumber>
                  <StatHelpText mb={0}>Manage content</StatHelpText>
                </Box>
              </HStack>
            </Stat>
          </Box>

          <Box bg="white" p={6} borderRadius="lg" shadow="sm" cursorPointer onClick={() => navigate('/admin/books')}>
            <Stat>
              <HStack spacing={4}>
                <Box w={12} h={12} bg="purple.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaBook} w={6} h={6} color="purple.500" />
                </Box>
                <Box>
                  <StatLabel>Books</StatLabel>
                  <StatNumber>{stats.books}</StatNumber>
                  <StatHelpText mb={0}>Manage store</StatHelpText>
                </Box>
              </HStack>
            </Stat>
          </Box>

          <Box bg="white" p={6} borderRadius="lg" shadow="sm" cursorPointer onClick={() => navigate('/admin/media')}>
            <Stat>
              <HStack spacing={4}>
                <Box w={12} h={12} bg="red.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaVideo} w={6} h={6} color="red.500" />
                </Box>
                <Box>
                  <StatLabel>Media</StatLabel>
                  <StatNumber>{stats.media}</StatNumber>
                  <StatHelpText mb={0}>Videos & Audio</StatHelpText>
                </Box>
              </HStack>
            </Stat>
          </Box>

          <Box bg="white" p={6} borderRadius="lg" shadow="sm">
            <Stat>
              <HStack spacing={4}>
                <Box w={12} h={12} bg="blue.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaEnvelope} w={6} h={6} color="blue.500" />
                </Box>
                <Box>
                  <StatLabel>Messages</StatLabel>
                  <StatNumber>{stats.contacts}</StatNumber>
                  <StatHelpText mb={0}>Contact form</StatHelpText>
                </Box>
              </HStack>
            </Stat>
          </Box>
        </SimpleGrid>

        {/* Quick Actions */}
        <Box bg="white" p={6} borderRadius="lg" shadow="sm">
          <Heading size="md" mb={6}>Quick Actions</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={4}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                leftIcon={<Icon as={item.icon} />}
                onClick={() => item.path.startsWith('/') && !item.path.includes('/admin') ? window.open(item.path, '_blank') : navigate(item.path)}
                colorScheme={item.color}
                variant="outline"
                size="lg"
                h={20}
                flexDirection="column"
              >
                <Text fontSize="sm">{item.label}</Text>
              </Button>
            ))}
          </SimpleGrid>
        </Box>

        {/* Recent Activity */}
        <Box bg="white" p={6} borderRadius="lg" shadow="sm" mt={6}>
          <Heading size="md" mb={4}>Getting Started</Heading>
          <VStack align="stretch" spacing={4}>
            <Box p={4} bg="green.50" borderRadius="md" cursorPointer onClick={() => navigate('/admin/articles')}>
              <HStack justify="space-between">
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold" color="green.700">Add New Article</Text>
                  <Text fontSize="sm" color="green.600">Create blog posts and publications</Text>
                </VStack>
                <Button size="sm" colorScheme="green">Go</Button>
              </HStack>
            </Box>
            <Box p={4} bg="purple.50" borderRadius="md" cursorPointer onClick={() => navigate('/admin/books')}>
              <HStack justify="space-between">
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold" color="purple.700">Manage Books</Text>
                  <Text fontSize="sm" color="purple.600">Add or update book listings</Text>
                </VStack>
                <Button size="sm" colorScheme="purple">Go</Button>
              </HStack>
            </Box>
            <Box p={4} bg="red.50" borderRadius="md" cursorPointer onClick={() => navigate('/admin/media')}>
              <HStack justify="space-between">
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold" color="red.700">Upload Media</Text>
                  <Text fontSize="sm" color="red.600">Add videos, audio, and gallery images</Text>
                </VStack>
                <Button size="sm" colorScheme="red">Go</Button>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminDashboard;