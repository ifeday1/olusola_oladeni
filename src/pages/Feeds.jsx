import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsappChat from '../components/Whatsapp/Index';
import FacebookEmbed from '../components/FacebookEmbed';
import TwitterEmbed from '../components/TwitterEmbed';
import { InstagramEmbed } from 'react-social-media-embed';
import { Container, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Icon, Text, HStack, Button } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaUserPlus, FaBell } from 'react-icons/fa';

const Feeds = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const loadedTabs = useRef(new Set());
  
  const socialLinks = {
    facebook: 'https://web.facebook.com/ola.oladeni',
    instagram: 'https://www.instagram.com/olusolaoladeni/',
    twitter: 'https://x.com/oladenisola',
    youtube: 'https://youtube.com/@olusolaoladeni',
    linkedin: 'https://www.linkedin.com/in/olusola-oladeni-ph-d-3b079183/'
  };

  useEffect(() => {
    // Only trigger widget parsing on first visit to each tab (caching)
    if (!loadedTabs.current.has(tabIndex)) {
      loadedTabs.current.add(tabIndex);
      
      const timer = setTimeout(() => {
        if (tabIndex === 1 && window.FB) {
          window.FB.XFBML.parse();
        }
        if (tabIndex === 2 && window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        }
      }, 1500); // Longer delay to avoid rate limiting
      
      return () => clearTimeout(timer);
    }
  }, [tabIndex]);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-purple-800 pt-20 pb-8 px-4 mt-5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 md:top-10 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 w-12 md:w-24 h-12 md:h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-8 md:w-16 h-8 md:h-16 bg-white/10 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-2">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Social <span className="text-green-300">Feeds</span>
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Stay connected with us across all social platforms
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
              <Icon as={FaFacebook} className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base font-body">Facebook</span>
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors">
              <Icon as={FaInstagram} className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base font-body">Instagram</span>
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-sky-400 transition-colors">
              <Icon as={FaTwitter} className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base font-body">Twitter</span>
            </a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-red-400 transition-colors">
              <Icon as={FaYoutube} className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base font-body">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Feeds */}
      <Box className="min-h-screen bg-gray-50 py-8 md:py-12 px-3 md:px-4">
        <Container maxW="1400px">
          {/* Tab Navigation */}
          <Box overflowX="auto" mb={6}>
            <Tabs variant="soft-rounded" colorScheme="green" onChange={(index) => setTabIndex(index)}>
              <TabList className="flex gap-2 min-w-max px-2">
                <Tab _selected={{ bg: 'pink.500', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                  <Icon as={FaInstagram} mr={2} /> Instagram
                </Tab>
                <Tab _selected={{ bg: 'blue.600', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                  <Icon as={FaFacebook} mr={2} /> Facebook
                </Tab>
                <Tab _selected={{ bg: 'blue.500', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                  <Icon as={FaTwitter} mr={2} /> Twitter
                </Tab>
                <Tab _selected={{ bg: 'red.600', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                  <Icon as={FaYoutube} mr={2} /> YouTube
                </Tab>
              </TabList>

              <TabPanels mt={6}>
                {/* Instagram Tab */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Header */}
                    <Box className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white p-4 md:p-5 flex items-center justify-between">
                      <HStack spacing={3}>
                        <Icon as={FaInstagram} className="text-2xl md:text-3xl" />
                        <Box>
                          <Text fontWeight="bold" className="text-base md:text-lg">Instagram</Text>
                          <Text fontSize="xs" className="text-pink-100">@olusolaoladeni</Text>
                        </Box>
                      </HStack>
                      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <Button leftIcon={<FaUserPlus />} colorScheme="whiteAlpha" variant="solid" size="sm" className="text-sm">
                          Follow
                        </Button>
                      </a>
                    </Box>
                    
                    {/* Content Grid */}
                    <Box className="p-4 md:p-6">
                      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%' }}>
                        <InstagramEmbed url="https://www.instagram.com/olusolaoladeni/" captioned />
                      </div>
                    </Box>
                  </Box>
                </TabPanel>

                {/* Facebook Tab */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Header */}
                    <Box className="bg-blue-600 text-white p-4 md:p-5 flex items-center justify-between">
                      <HStack spacing={3}>
                        <Icon as={FaFacebook} className="text-2xl md:text-3xl" />
                        <Box>
                          <Text fontWeight="bold" className="text-base md:text-lg">Facebook</Text>
                          <Text fontSize="xs" className="text-blue-200">@ola.oladeni</Text>
                        </Box>
                      </HStack>
                      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <Button leftIcon={<FaUserPlus />} colorScheme="whiteAlpha" variant="solid" size="sm" className="text-sm">
                          Follow
                        </Button>
                      </a>
                    </Box>
                    
                    {/* Content Grid */}
                    <Box className="p-4 md:p-6">
                      <FacebookEmbed />
                    </Box>
                  </Box>
                </TabPanel>

                {/* Twitter Tab */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Header */}
                    <Box className="bg-sky-500 text-white p-4 md:p-5 flex items-center justify-between">
                      <HStack spacing={3}>
                        <Icon as={FaTwitter} className="text-2xl md:text-3xl" />
                        <Box>
                          <Text fontWeight="bold" className="text-base md:text-lg">Twitter / X</Text>
                          <Text fontSize="xs" className="text-sky-200">@oladenisola</Text>
                        </Box>
                      </HStack>
                      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <Button leftIcon={<FaUserPlus />} colorScheme="whiteAlpha" variant="solid" size="sm" className="text-sm">
                          Follow
                        </Button>
                      </a>
                    </Box>
                    
                    {/* Content Grid */}
                    <Box className="p-4 md:p-6">
                      <TwitterEmbed />
                    </Box>
                  </Box>
                </TabPanel>

                {/* YouTube Tab */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Header */}
                    <Box className="bg-red-600 text-white p-4 md:p-5 flex items-center justify-between">
                      <HStack spacing={3}>
                        <Icon as={FaYoutube} className="text-2xl md:text-3xl" />
                        <Box>
                          <Text fontWeight="bold" className="text-base md:text-lg">YouTube</Text>
                          <Text fontSize="xs" className="text-red-200">@olusolaoladeni</Text>
                        </Box>
                      </HStack>
                      <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                        <Button leftIcon={<FaBell />} colorScheme="whiteAlpha" variant="solid" size="sm" className="text-sm">
                          Subscribe
                        </Button>
                      </a>
                    </Box>
                    
                    {/* Content Grid */}
                    <Box className="p-4 md:p-6">
                      <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-red-600 to-red-800 flex flex-col items-center justify-center text-white" style={{ height: '550px' }}>
                        <Icon as={FaYoutube} className="text-6xl mb-4" />
                        <Text fontWeight="bold" className="text-2xl mb-2">YouTube Channel</Text>
                        <Text className="text-lg mb-6">@olusolaoladeni</Text>
                        <a 
                          href={socialLinks.youtube} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                          <Icon as={FaBell} />
                          Subscribe
                        </a>
                      </div>
                    </Box>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          {/* Social Links Bar */}
          <Box className="mt-8 bg-white rounded-xl shadow-md p-4 md:p-6">
            <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={4} className="text-center">
              Connect With Us
            </Text>
            <HStack spacing={4} justify="center" className="flex flex-wrap gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Icon as={FaFacebook} className="text-xl" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <Icon as={FaInstagram} className="text-xl" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Icon as={FaTwitter} className="text-xl" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Icon as={FaYoutube} className="text-xl" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Icon as={FaLinkedin} className="text-xl" />
              </a>
            </HStack>
          </Box>
        </Container>
      </Box>

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Feeds;