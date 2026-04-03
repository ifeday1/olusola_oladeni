import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsappChat from '../components/Whatsapp/Index';
import { Container, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Icon, Text, SimpleGrid, HStack, VStack, Button, Image } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaUserPlus, FaBell, FaHeart, FaComment, FaShare, FaPlay, FaLink, FaExternalLinkAlt } from 'react-icons/fa';

const Feeds = () => {
  const socialLinks = {
    facebook: 'https://web.facebook.com/olusolaoladeniministries',
    instagram: 'https://instagram.com/olusola_oladeni',
    twitter: 'https://twitter.com/olusola_oladeni',
    youtube: 'https://youtube.com/@olusolaoladeni',
    linkedin: 'https://linkedin.com/in/olusola-oladeni'
  };

  const facebookPosts = [
    { id: 1, content: "God is doing something new in your life! Embrace the change and trust His timing. 🙌🏾 #Faith #Blessing #NewBeginnings", likes: 234, comments: 45, shares: 12, time: "2 hours ago", image: null },
    { id: 2, content: "Marriage is a covenant, not a contract. Honor it, protect it, and watch it flourish. 💑💕 #Marriage #Covenant #Relationship", likes: 189, comments: 32, shares: 8, time: "1 day ago", image: null },
    { id: 3, content: "Stay blessed and keep trusting God! He is faithful to complete what He started in your life. 🙌🏾 #Faith #TrustGod #Blessing", likes: 156, comments: 28, shares: 5, time: "2 days ago", image: null },
    { id: 4, content: "Join us for our weekly fellowship! Experience the presence of God and be transformed. 📖✝️ #Fellowship #Church #God", likes: 312, comments: 67, shares: 23, time: "3 days ago", image: null },
  ];

  const tweets = [
    { id: 1, content: "God is doing something new in your life! Embrace the change and trust His timing. 🙌🏾 #Faith #NewBeginnings", likes: 45, replies: 8, retweets: 12, time: "1h" },
    { id: 2, content: "Marriage is a covenant, not a contract. Honor it and protect it. 💑 #Marriage #Covenant", likes: 38, replies: 5, retweets: 8, time: "2h" },
    { id: 3, content: "Stay blessed and keep trusting God! He is faithful. 🙏🏾 #Faith #TrustGod", likes: 52, replies: 12, retweets: 15, time: "5h" },
    { id: 4, content: "Trust in the Lord with all your heart. He makes all things work for your good. ✝️ #Trust #Faith", likes: 67, replies: 9, retweets: 18, time: "1d" },
    { id: 5, content: "The best is yet to come! Keep moving forward. 🌟 #Hope #Future #Blessings", likes: 41, replies: 6, retweets: 10, time: "2d" },
  ];

  const youtubeVideos = [
    { id: 1, title: "Strategic Discipleship: Building Strong Faith", views: "12.5K", time: "3 days ago", duration: "24:35", thumbnail: null },
    { id: 2, title: "Marriage Secrets Every Couple Should Know", views: "8.2K", time: "1 week ago", duration: "18:42", thumbnail: null },
    { id: 3, title: "Leadership Development for Christians", views: "15.8K", time: "2 weeks ago", duration: "32:18", thumbnail: null },
    { id: 4, title: "Overcoming Life's Challenges with Faith", views: "22.1K", time: "3 weeks ago", duration: "28:55", thumbnail: null },
  ];

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
            <Tabs variant="soft-rounded" colorScheme="green">
              <TabList className="flex gap-2 min-w-max px-2">
                <Tab _selected={{ bg: 'blue.600', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                  <Icon as={FaFacebook} mr={2} /> Facebook
                </Tab>
                <Tab _selected={{ bg: 'pink.500', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                  <Icon as={FaInstagram} mr={2} /> Instagram
                </Tab>
                <Tab _selected={{ bg: 'blue.500', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                  <Icon as={FaTwitter} mr={2} /> Twitter
                </Tab>
                <Tab _selected={{ bg: 'red.600', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                  <Icon as={FaYoutube} mr={2} /> YouTube
                </Tab>
              </TabList>

              <TabPanels mt={6}>
                {/* Facebook Tab */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Header */}
                    <Box className="bg-blue-600 text-white p-4 md:p-5 flex items-center justify-between">
                      <HStack spacing={3}>
                        <Icon as={FaFacebook} className="text-2xl md:text-3xl" />
                        <Box>
                          <Text fontWeight="bold" className="text-base md:text-lg">Facebook</Text>
                          <Text fontSize="xs" className="text-blue-200">@olusolaoladeniministries</Text>
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
                      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
                        {/* Action Section */}
                        <VStack spacing={4} align="stretch" className="order-2 lg:order-1">
                          <Box className="bg-blue-50 rounded-xl p-4 md:p-6 text-center">
                            <Icon as={FaFacebook} className="text-5xl md:text-6xl text-blue-600 mb-4 mx-auto" />
                            <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2} className="font-heading">
                              Like Our Facebook Page
                            </Text>
                            <Text color="gray.600" mb={4} className="font-body text-sm md:text-base">
                              Get the latest updates, inspirational posts, and engage with our community
                            </Text>
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                              <Button colorScheme="blue" size="md" className="font-body w-full md:w-auto">
                                <Icon as={FaHeart} mr={2} /> Like Page
                              </Button>
                            </a>
                          </Box>
                          
                          {/* Featured Post */}
                          {facebookPosts[0] && (
                            <Box className="border border-gray-100 rounded-xl p-4">
                              <HStack mb={3}>
                                <Box className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                  OO
                                </Box>
                                <Box>
                                  <Text fontWeight="bold" fontSize="sm" className="font-body">Olusola Oladeni Ministries</Text>
                                  <Text fontSize="xs" color="gray.500" className="font-body">{facebookPosts[0].time}</Text>
                                </Box>
                              </HStack>
                              <Text fontSize="sm" color="gray.700" mb={3} className="font-body">
                                {facebookPosts[0].content}
                              </Text>
                              <HStack spacing={4} color="gray.500" fontSize="sm" className="font-body">
                                <span className="flex items-center gap-1"><Icon as={FaHeart} /> {facebookPosts[0].likes}</span>
                                <span className="flex items-center gap-1"><Icon as={FaComment} /> {facebookPosts[0].comments}</span>
                                <span className="flex items-center gap-1"><Icon as={FaShare} /> {facebookPosts[0].shares}</span>
                              </HStack>
                            </Box>
                          )}
                        </VStack>
                        
                        {/* Feed Preview */}
                        <Box className="order-1 lg:order-2">
                          <VStack spacing={3} align="stretch">
                            {facebookPosts.slice(1).map((post) => (
                              <Box key={post.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <HStack mb={2}>
                                  <Box className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    OO
                                  </Box>
                                  <Box flex={1}>
                                    <Text fontWeight="bold" fontSize="sm" className="font-body">Olusola Oladeni Ministries</Text>
                                    <Text fontSize="xs" color="gray.500" className="font-body">{post.time}</Text>
                                  </Box>
                                </HStack>
                                <Text fontSize="sm" color="gray.700" noOfLines={2} mb={2} className="font-body">
                                  {post.content}
                                </Text>
                                <HStack spacing={3} color="gray.500" fontSize="xs" className="font-body">
                                  <span className="flex items-center gap-1"><Icon as={FaHeart} className="text-xs" /> {post.likes}</span>
                                  <span className="flex items-center gap-1"><Icon as={FaComment} className="text-xs" /> {post.comments}</span>
                                  <span className="flex items-center gap-1"><Icon as={FaShare} className="text-xs" /> {post.shares}</span>
                                </HStack>
                              </Box>
                            ))}
                            <Box className="text-center py-2">
                              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-body text-sm flex items-center justify-center gap-2">
                                <Icon as={FaExternalLinkAlt} /> View More on Facebook
                              </a>
                            </Box>
                          </VStack>
                        </Box>
                      </SimpleGrid>
                    </Box>
                  </Box>
                </TabPanel>

                {/* Instagram Tab */}
                <TabPanel p={0}>
                  <Box className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Header */}
                    <Box className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white p-4 md:p-5 flex items-center justify-between">
                      <HStack spacing={3}>
                        <Icon as={FaInstagram} className="text-2xl md:text-3xl" />
                        <Box>
                          <Text fontWeight="bold" className="text-base md:text-lg">Instagram</Text>
                          <Text fontSize="xs" className="text-pink-100">@olusola_oladeni</Text>
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
                      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
                        {/* Action Section */}
                        <VStack spacing={4} align="stretch" className="order-2 lg:order-1">
                          <Box className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 rounded-xl p-4 md:p-6 text-center">
                            <Icon as={FaInstagram} className="text-5xl md:text-6xl text-pink-500 mb-4 mx-auto" />
                            <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2} className="font-heading">
                              Follow Us on Instagram
                            </Text>
                            <Text color="gray.600" mb={4} className="font-body text-sm md:text-base">
                              See our daily posts, stories, and behind-the-scenes content
                            </Text>
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                              <Button colorScheme="pink" size="md" className="font-body w-full md:w-auto">
                                <Icon as={FaUserPlus} mr={2} /> Follow
                              </Button>
                            </a>
                          </Box>
                        </VStack>
                        
                        {/* Instagram Grid */}
                        <Box className="order-1 lg:order-2">
                          <SimpleGrid columns={{ base: 3, sm: 3, md: 3 }} spacing={2}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                              <Box 
                                key={item} 
                                as="a"
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer relative group overflow-hidden"
                              >
                                <Icon as={FaInstagram} className="text-gray-400 text-2xl md:text-3xl" />
                                {/* Hover Overlay */}
                                <Box className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <HStack spacing={1} color="white" fontSize="sm" className="font-body">
                                    <Icon as={FaHeart} />
                                    <span>{Math.floor(Math.random() * 500) + 100}</span>
                                  </HStack>
                                </Box>
                              </Box>
                            ))}
                          </SimpleGrid>
                          <Box className="text-center py-3">
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline font-body text-sm flex items-center justify-center gap-2">
                              <Icon as={FaExternalLinkAlt} /> View More on Instagram
                            </a>
                          </Box>
                        </Box>
                      </SimpleGrid>
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
                          <Text fontSize="xs" className="text-sky-200">@olusola_oladeni</Text>
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
                      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
                        {/* Action Section */}
                        <VStack spacing={4} align="stretch" className="order-2 lg:order-1">
                          <Box className="bg-sky-50 rounded-xl p-4 md:p-6 text-center">
                            <Icon as={FaTwitter} className="text-5xl md:text-6xl text-sky-500 mb-4 mx-auto" />
                            <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2} className="font-heading">
                              Follow Us on Twitter
                            </Text>
                            <Text color="gray.600" mb={4} className="font-body text-sm md:text-base">
                              Get quick updates, inspirational tweets, and engage with us
                            </Text>
                            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                              <Button colorScheme="sky" size="md" className="font-body w-full md:w-auto">
                                <Icon as={FaUserPlus} mr={2} /> Follow
                              </Button>
                            </a>
                          </Box>
                          
                          {/* Featured Tweet */}
                          {tweets[0] && (
                            <Box className="border border-gray-100 rounded-xl p-4">
                              <HStack mb={2}>
                                <Box className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                  OO
                                </Box>
                                <Box flex={1}>
                                  <Text fontWeight="bold" fontSize="sm" className="font-body">Olusola Oladeni</Text>
                                  <Text fontSize="xs" color="gray.500" className="font-body">@olusola_oladeni • {tweets[0].time}</Text>
                                </Box>
                              </HStack>
                              <Text fontSize="sm" color="gray.700" mb={2} className="font-body">
                                {tweets[0].content}
                              </Text>
                              <HStack spacing={3} color="gray.500" fontSize="xs" className="font-body">
                                <span className="flex items-center gap-1"><Icon as={FaHeart} /> {tweets[0].likes}</span>
                                <span className="flex items-center gap-1"><Icon as={FaComment} /> {tweets[0].replies}</span>
                                <span className="flex items-center gap-1"><Icon as={FaShare} /> {tweets[0].retweets}</span>
                              </HStack>
                            </Box>
                          )}
                        </VStack>
                        
                        {/* Tweets List */}
                        <Box className="order-1 lg:order-2">
                          <VStack spacing={3} align="stretch">
                            {tweets.slice(1).map((tweet) => (
                              <Box key={tweet.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <HStack mb={2}>
                                  <Box className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    OO
                                  </Box>
                                  <Box flex={1}>
                                    <Text fontWeight="bold" fontSize="sm" className="font-body">Olusola Oladeni</Text>
                                    <Text fontSize="xs" color="gray.500" className="font-body">@olusola_oladeni • {tweet.time}</Text>
                                  </Box>
                                </HStack>
                                <Text fontSize="sm" color="gray.700" mb={2} className="font-body">
                                  {tweet.content}
                                </Text>
                                <HStack spacing={3} color="gray.500" fontSize="xs" className="font-body">
                                  <span className="flex items-center gap-1"><Icon as={FaHeart} /> {tweet.likes}</span>
                                  <span className="flex items-center gap-1"><Icon as={FaComment} /> {tweet.replies}</span>
                                  <span className="flex items-center gap-1"><Icon as={FaShare} /> {tweet.retweets}</span>
                                </HStack>
                              </Box>
                            ))}
                            <Box className="text-center py-2">
                              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline font-body text-sm flex items-center justify-center gap-2">
                                <Icon as={FaExternalLinkAlt} /> View More on Twitter
                              </a>
                            </Box>
                          </VStack>
                        </Box>
                      </SimpleGrid>
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
                      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
                        {/* Action Section */}
                        <VStack spacing={4} align="stretch" className="order-2 lg:order-1">
                          <Box className="bg-red-50 rounded-xl p-4 md:p-6 text-center">
                            <Icon as={FaYoutube} className="text-5xl md:text-6xl text-red-600 mb-4 mx-auto" />
                            <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2} className="font-heading">
                              Subscribe on YouTube
                            </Text>
                            <Text color="gray.600" mb={4} className="font-body text-sm md:text-base">
                              Watch our latest sermons, teachings, and video content
                            </Text>
                            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                              <Button colorScheme="red" size="md" className="font-body w-full md:w-auto">
                                <Icon as={FaYoutube} mr={2} /> Subscribe
                              </Button>
                            </a>
                          </Box>
                        </VStack>
                        
                        {/* Videos Grid */}
                        <Box className="order-1 lg:order-2">
                          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                            {youtubeVideos.map((video) => (
                              <Box 
                                key={video.id} 
                                className="bg-white rounded-xl shadow overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
                                as="a"
                                href={socialLinks.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Box className="aspect-video bg-gray-800 relative flex items-center justify-center">
                                  <Icon as={FaPlay} className="text-4xl md:text-5xl text-white/80" />
                                  <Box className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-body">
                                    {video.duration}
                                  </Box>
                                </Box>
                                <Box p={3}>
                                  <Text fontSize="sm" fontWeight="medium" noOfLines={2} mb={2} className="font-body">
                                    {video.title}
                                  </Text>
                                  <HStack fontSize="xs" color="gray.500" spacing={3} className="font-body">
                                    <span>{video.views} views</span>
                                    <span>•</span>
                                    <span>{video.time}</span>
                                  </HStack>
                                </Box>
                              </Box>
                            ))}
                            <Box className="text-center py-2 col-span-full">
                              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-body text-sm flex items-center justify-center gap-2">
                                <Icon as={FaExternalLinkAlt} /> View More on YouTube
                              </a>
                            </Box>
                          </SimpleGrid>
                        </Box>
                      </SimpleGrid>
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
