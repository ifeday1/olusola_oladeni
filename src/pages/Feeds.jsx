import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsappChat from '../components/Whatsapp/Index';
import { Container, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Icon, Text, SimpleGrid, Badge, HStack, VStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaClock, FaHeart, FaComment, FaShare } from 'react-icons/fa';

const Feeds = () => {
  // Social media links from the project
  const socialLinks = {
    facebook: 'https://web.facebook.com/olusolaoladeniministries',
    instagram: 'https://instagram.com/olusola_oladeni',
    twitter: 'https://twitter.com/olusola_oladeni',
    youtube: 'https://youtube.com/@olusolaoladeni',
    linkedin: 'https://linkedin.com/in/olusola-oladeni'
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Fully Responsive */}
      <section className="relative bg-gradient-to-r from-green-800 to-purple-800 pt-20 pb-8 px-4 mt-5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 md:top-10 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 w-12 md:w-24 h-12 md:h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-8 md:w-16 h-8 md:h-16 bg-white/10 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Social <span className="text-green-300">Feeds</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Stay connected with us across all social platforms
          </p>
          
          {/* Social Media Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6">
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
            >
              <Icon as={FaFacebook} className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base">Facebook</span>
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
            >
              <Icon as={FaInstagram} className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base">Instagram</span>
            </a>
            <a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-sky-400 transition-colors"
            >
              <Icon as={FaTwitter} className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base">Twitter</span>
            </a>
            <a 
              href={socialLinks.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
            >
              <Icon as={FaYoutube} className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Feeds Section */}
      <Box className="min-h-screen bg-gray-50 py-8 md:py-12 px-3 md:px-4">
        <Container maxW="1400px">
          {/* Mobile Tabs - Scrollable */}
          <Box overflowX="auto" mb={6} className="scrollbar-hide">
            <Tabs variant="soft-rounded" colorScheme="green" isFitted>
              <TabList className="flex gap-2 min-w-max">
                <Tab 
                  _selected={{ bg: 'green.600', color: 'white' }}
                  className="px-3 md:px-6 py-2 text-xs md:text-sm"
                >
                  <Icon as={FaFacebook} mr={2} className="text-sm md:text-base" />
                  <span className="hidden sm:inline">Facebook</span>
                  <span className="sm:hidden">FB</span>
                </Tab>
                <Tab 
                  _selected={{ bg: 'pink.500', color: 'white' }}
                  className="px-3 md:px-6 py-2 text-xs md:text-sm"
                >
                  <Icon as={FaInstagram} mr={2} className="text-sm md:text-base" />
                  <span className="hidden sm:inline">Instagram</span>
                  <span className="sm:hidden">IG</span>
                </Tab>
                <Tab 
                  _selected={{ bg: 'blue.500', color: 'white' }}
                  className="px-3 md:px-6 py-2 text-xs md:text-sm"
                >
                  <Icon as={FaTwitter} mr={2} className="text-sm md:text-base" />
                  <span className="hidden sm:inline">Twitter</span>
                  <span className="sm:hidden">X</span>
                </Tab>
                <Tab 
                  _selected={{ bg: 'red.600', color: 'white' }}
                  className="px-3 md:px-6 py-2 text-xs md:text-sm"
                >
                  <Icon as={FaYoutube} mr={2} className="text-sm md:text-base" />
                  <span className="hidden sm:inline">YouTube</span>
                  <span className="sm:hidden">YT</span>
                </Tab>
              </TabList>

              <TabPanels mt={6}>
                {/* Facebook Feed */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    <Box className="bg-blue-600 text-white p-4 flex items-center gap-3">
                      <Icon as={FaFacebook} className="text-2xl" />
                      <Box>
                        <Text fontWeight="bold" className="text-sm md:text-base">Facebook</Text>
                        <Text fontSize="xs" className="text-blue-200">@olusolaoladeniministries</Text>
                      </Box>
                    </Box>
                    
                    {/* Facebook Page Plugin Embed */}
                    <Box className="w-full min-h-[500px] bg-gray-50 flex items-center justify-center p-4">
                      <Box className="text-center max-w-md">
                        <Icon as={FaFacebook} className="text-6xl text-blue-600 mb-4 mx-auto" />
                        <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2}>
                          Follow us on Facebook
                        </Text>
                        <Text color="gray.600" mb={4} className="text-sm md:text-base">
                          Get the latest updates, inspirational posts, and engage with our community
                        </Text>
                        <a 
                          href={socialLinks.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm md:text-base"
                        >
                          Visit Facebook Page
                        </a>
                        
                        {/* Embedded Facebook Posts Preview */}
                        <Box mt={8} className="text-left w-full space-y-4">
                          <Box className="bg-white rounded-lg shadow p-4 border border-gray-100">
                            <HStack mb={3}>
                              <Box className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                OO
                              </Box>
                              <Box>
                                <Text fontWeight="bold" fontSize="sm">Olusola Oladeni Ministries</Text>
                                <Text fontSize="xs" color="gray.500">Recently</Text>
                              </Box>
                            </HStack>
                            <Text fontSize="sm" color="gray.700" mb={3}>
                              Stay blessed and keep trusting God! He is faithful to complete what He started in your life. #Faith #Blessing #GodIsGood
                            </Text>
                            <HStack spacing={4} color="gray.500" fontSize="sm">
                              <span className="flex items-center gap-1"><Icon as={FaHeart} /> 128</span>
                              <span className="flex items-center gap-1"><Icon as={FaComment} /> 24</span>
                              <span className="flex items-center gap-1"><Icon as={FaShare} /> 12</span>
                            </HStack>
                          </Box>
                          
                          <Box className="bg-white rounded-lg shadow p-4 border border-gray-100">
                            <HStack mb={3}>
                              <Box className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                OO
                              </Box>
                              <Box>
                                <Text fontWeight="bold" fontSize="sm">Olusola Oladeni Ministries</Text>
                                <Text fontSize="xs" color="gray.500">2 days ago</Text>
                              </Box>
                            </HStack>
                            <Text fontSize="sm" color="gray.700" mb={3}>
                              Join us for our weekly fellowship! Experience the presence of God and be transformed. 📖✝️ #Church #Fellowship #GodsPresence
                            </Text>
                            <HStack spacing={4} color="gray.500" fontSize="sm">
                              <span className="flex items-center gap-1"><Icon as={FaHeart} /> 89</span>
                              <span className="flex items-center gap-1"><Icon as={FaComment} /> 15</span>
                              <span className="flex items-center gap-1"><Icon as={FaShare} /> 8</span>
                            </HStack>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>

                {/* Instagram Feed */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    <Box className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white p-4 flex items-center gap-3">
                      <Icon as={FaInstagram} className="text-2xl" />
                      <Box>
                        <Text fontWeight="bold" className="text-sm md:text-base">Instagram</Text>
                        <Text fontSize="xs" className="text-pink-100">@olusola_oladeni</Text>
                      </Box>
                    </Box>
                    
                    <Box className="w-full min-h-[500px] bg-gray-50 flex items-center justify-center p-4">
                      <Box className="text-center max-w-md">
                        <Icon as={FaInstagram} className="text-6xl text-pink-500 mb-4 mx-auto" />
                        <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2}>
                          Follow us on Instagram
                        </Text>
                        <Text color="gray.600" mb={4} className="text-sm md:text-base">
                          See our daily posts, stories, and behind-the-scenes content
                        </Text>
                        <a 
                          href={socialLinks.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-opacity text-sm md:text-base"
                        >
                          Visit Instagram Profile
                        </a>
                        
                        {/* Instagram Posts Grid Preview */}
                        <SimpleGrid columns={3} spacing={2} mt={8} className="max-w-sm mx-auto">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <Box 
                              key={item} 
                              className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                            >
                              <Icon as={FaInstagram} className="text-gray-400 text-2xl" />
                            </Box>
                          ))}
                        </SimpleGrid>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>

                {/* Twitter Feed */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    <Box className="bg-sky-500 text-white p-4 flex items-center gap-3">
                      <Icon as={FaTwitter} className="text-2xl" />
                      <Box>
                        <Text fontWeight="bold" className="text-sm md:text-base">Twitter / X</Text>
                        <Text fontSize="xs" className="text-sky-200">@olusola_oladeni</Text>
                      </Box>
                    </Box>
                    
                    <Box className="w-full min-h-[500px] bg-gray-50 flex items-center justify-center p-4">
                      <Box className="text-center max-w-md">
                        <Icon as={FaTwitter} className="text-6xl text-sky-500 mb-4 mx-auto" />
                        <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2}>
                          Follow us on Twitter
                        </Text>
                        <Text color="gray.600" mb={4} className="text-sm md:text-base">
                          Get quick updates, inspirational tweets, and engage with us
                        </Text>
                        <a 
                          href={socialLinks.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm md:text-base"
                        >
                          Visit Twitter Profile
                        </a>
                        
                        {/* Twitter Tweets Preview */}
                        <VStack spacing={4} mt={8} align="stretch" className="text-left">
                          <Box className="bg-white rounded-lg shadow p-4 border border-gray-100">
                            <HStack mb={2}>
                              <Box className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                OO
                              </Box>
                              <Box>
                                <Text fontWeight="bold" fontSize="sm">Olusola Oladeni</Text>
                                <Text fontSize="xs" color="gray.500">@olusola_oladeni</Text>
                              </Box>
                            </HStack>
                            <Text fontSize="sm" color="gray.700" mb={2}>
                              God is doing something new in your life! Embrace the change and trust His timing. 🙌🏾 #Faith #NewBeginnings #TrustGod
                            </Text>
                            <HStack spacing={4} color="gray.500" fontSize="xs">
                              <span className="flex items-center gap-1"><Icon as={FaHeart} className="text-xs" /> 45</span>
                              <span className="flex items-center gap-1"><Icon as={FaComment} className="text-xs" /> 8</span>
                              <span className="flex items-center gap-1"><Icon as={FaShare} className="text-xs" /> 5</span>
                            </HStack>
                          </Box>
                          
                          <Box className="bg-white rounded-lg shadow p-4 border border-gray-100">
                            <HStack mb={2}>
                              <Box className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                OO
                              </Box>
                              <Box>
                                <Text fontWeight="bold" fontSize="sm">Olusola Oladeni</Text>
                                <Text fontSize="xs" color="gray.500">@olusola_oladeni</Text>
                              </Box>
                            </HStack>
                            <Text fontSize="sm" color="gray.700" mb={2}>
                              Marriage is a covenant, not a contract. Honor it, protect it, and watch it flourish. 💑 #Marriage #Covenant #RelationshipGoals
                            </Text>
                            <HStack spacing={4} color="gray.500" fontSize="xs">
                              <span className="flex items-center gap-1"><Icon as={FaHeart} className="text-xs" /> 78</span>
                              <span className="flex items-center gap-1"><Icon as={FaComment} className="text-xs" /> 12</span>
                              <span className="flex items-center gap-1"><Icon as={FaShare} className="text-xs" /> 6</span>
                            </HStack>
                          </Box>
                        </VStack>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>

                {/* YouTube Feed */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    <Box className="bg-red-600 text-white p-4 flex items-center gap-3">
                      <Icon as={FaYoutube} className="text-2xl" />
                      <Box>
                        <Text fontWeight="bold" className="text-sm md:text-base">YouTube</Text>
                        <Text fontSize="xs" className="text-red-200">@olusolaoladeni</Text>
                      </Box>
                    </Box>
                    
                    <Box className="w-full min-h-[500px] bg-gray-50 flex items-center justify-center p-4">
                      <Box className="text-center max-w-md">
                        <Icon as={FaYoutube} className="text-6xl text-red-600 mb-4 mx-auto" />
                        <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2}>
                          Subscribe on YouTube
                        </Text>
                        <Text color="gray.600" mb={4} className="text-sm md:text-base">
                          Watch our latest sermons, teachings, and video content
                        </Text>
                        <a 
                          href={socialLinks.youtube} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm md:text-base"
                        >
                          Visit YouTube Channel
                        </a>
                        
                        {/* YouTube Videos Grid */}
                        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mt={8}>
                          {[1, 2, 3, 4].map((item) => (
                            <Box 
                              key={item} 
                              className="bg-white rounded-lg shadow overflow-hidden border border-gray-100"
                            >
                              <Box className="aspect-video bg-gray-800 flex items-center justify-center">
                                <Icon as={FaYoutube} className="text-4xl text-gray-500" />
                              </Box>
                              <Box p={3}>
                                <Text fontSize="sm" fontWeight="medium" noOfLines={2} mb={1}>
                                  Sample Video Title {item}
                                </Text>
                                <HStack fontSize="xs" color="gray.500">
                                  <Icon as={FaClock} />
                                  <span>12:34</span>
                                </HStack>
                              </Box>
                            </Box>
                          ))}
                        </SimpleGrid>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          {/* Social Media Links Bar - Mobile Friendly */}
          <Box className="mt-8 bg-white rounded-xl shadow-md p-4 md:p-6">
            <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={4} className="text-center">
              Connect With Us
            </Text>
            <HStack spacing={4} justify="center" className="flex flex-wrap gap-3">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Icon as={FaFacebook} className="text-xl" />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Icon as={FaInstagram} className="text-xl" />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Icon as={FaTwitter} className="text-xl" />
              </a>
              <a 
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Icon as={FaYoutube} className="text-xl" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
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
