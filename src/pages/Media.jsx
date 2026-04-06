import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsappChat from '../components/Whatsapp/Index';
import { Container, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Icon, Text, SimpleGrid, HStack, VStack, Button, Image, Select, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Badge, Flex } from '@chakra-ui/react';
import { FaPlay, FaHeadphones, FaImages, FaCalendar, FaUser, FaDownload, FaVideo, FaVolumeUp } from 'react-icons/fa';
import { YouTubeEmbed } from 'react-social-media-embed';

const Media = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSermon, setSelectedSermon] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [filterSeries, setFilterSeries] = useState('');
  const [filterSpeaker, setFilterSpeaker] = useState('');

  const sermons = [
    { id: 1, title: "Walking in Faith", series: "Faith Foundations", speaker: "Olusola Oladeni", date: "2025-03-30", duration: "45:30", type: "video", youtubeId: "dQw4w9WgXcQ", thumbnail: null, description: "Learn how to walk by faith and not by sight in this powerful message." },
    { id: 2, title: "The Power of Prayer", series: "Prayer Warriors", speaker: "Olusola Oladeni", date: "2025-03-23", duration: "38:15", type: "video", youtubeId: "dQw4w9WgXcQ", thumbnail: null, description: "Discover the transformative power of prayer in your daily life." },
    { id: 3, title: "Marriage Covenant", series: "Family Matters", speaker: "Olusola Oladeni", date: "2025-03-16", duration: "52:00", type: "video", youtubeId: "dQw4w9WgXcQ", thumbnail: null, description: "Understanding the sacred covenant of marriage." },
    { id: 4, title: "Breaking Barriers", series: "Overcoming", speaker: "Olusola Oladeni", date: "2025-03-09", duration: "41:45", type: "audio", audioUrl: "#", thumbnail: null, description: "Learn to break through the barriers that hold you back." },
    { id: 5, title: "Living with Purpose", series: "Purpose Driven", speaker: "Olusola Oladeni", date: "2025-03-02", duration: "47:20", type: "audio", audioUrl: "#", thumbnail: null, description: "Discover your God-given purpose and live intentionally." },
    { id: 6, title: "Faith for Today", series: "Faith Foundations", speaker: "Olusola Oladeni", date: "2025-02-23", duration: "44:10", type: "video", youtubeId: "dQw4w9WgXcQ", thumbnail: null, description: "Applying faith principles to your everyday life." },
  ];

  const videos = [
    { id: 1, title: "Strategic Discipleship: Building Strong Faith", views: "12.5K", time: "3 days ago", duration: "24:35", youtubeId: "dQw4w9WgXcQ", category: "Sermons" },
    { id: 2, title: "Marriage Secrets Every Couple Should Know", views: "8.2K", time: "1 week ago", duration: "18:42", youtubeId: "dQw4w9WgXcQ", category: "Marriage" },
    { id: 3, title: "Leadership Development for Christians", views: "15.8K", time: "2 weeks ago", duration: "32:18", youtubeId: "dQw4w9WgXcQ", category: "Leadership" },
    { id: 4, title: "Overcoming Life's Challenges with Faith", views: "22.1K", time: "3 weeks ago", duration: "28:55", youtubeId: "dQw4w9WgXcQ", category: "Sermons" },
    { id: 5, title: "Testimony: God's Faithfulness", views: "5.3K", time: "1 month ago", duration: "12:20", youtubeId: "dQw4w9WgXcQ", category: "Testimonies" },
    { id: 6, title: "Youth Conference Highlights 2025", views: "18.9K", time: "1 month ago", duration: "45:00", youtubeId: "dQw4w9WgXcQ", category: "Events" },
  ];

  const audioSermons = [
    { id: 1, title: "Breaking Barriers", series: "Overcoming", speaker: "Olusola Oladeni", date: "2025-03-09", duration: "41:45", description: "Learn to break through the barriers that hold you back." },
    { id: 2, title: "Living with Purpose", series: "Purpose Driven", speaker: "Olusola Oladeni", date: "2025-03-02", duration: "47:20", description: "Discover your God-given purpose and live intentionally." },
    { id: 3, title: "Financial Wisdom", series: "Prosperity Principles", speaker: "Olusola Oladeni", date: "2025-02-23", duration: "39:50", description: "Biblical principles for financial breakthrough." },
    { id: 4, title: "Healing and Wholeness", series: "Divine Health", speaker: "Olusola Oladeni", date: "2025-02-16", duration: "43:15", description: "God's promise of healing and wholeness for your life." },
    { id: 5, title: "The Holy Spirit", series: "Spiritual Power", speaker: "Olusola Oladeni", date: "2025-02-09", duration: "51:30", description: "Understanding the person and power of the Holy Spirit." },
  ];

  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", alt: "Mountain sunrise", category: "Events" },
    { id: 2, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400", alt: "Church building", category: "Sunday Service" },
    { id: 3, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400", alt: "Worship team", category: "Sunday Service" },
    { id: 4, src: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=400", alt: "Conference crowd", category: "Conferences" },
    { id: 5, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400", alt: "Community outreach", category: "Outreach" },
    { id: 6, src: "https://images.unsplash.com/photo-1531206715517-5c0ba140840e?w=400", alt: "Bible study", category: "Sunday Service" },
    { id: 7, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400", alt: "Prayer meeting", category: "Events" },
    { id: 8, src: "https://images.unsplash.com/photo-1543832923-4466d580d5d7?w=400", alt: "Fellowship", category: "Events" },
  ];

  const seriesList = [...new Set(sermons.map(s => s.series))];
  const speakersList = [...new Set(sermons.map(s => s.speaker))];

  const filteredSermons = sermons.filter(sermon => {
    if (filterSeries && sermon.series !== filterSeries) return false;
    if (filterSpeaker && sermon.speaker !== filterSpeaker) return false;
    return true;
  });

  const openLightbox = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-purple-800 py-20 px-4 pb-10 md:pt-25">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white my-4">Media</h1>
          <p className="text-xl text-white/90">
            Watch, listen, and experience our multimedia content
          </p>
        </div>
      </section>

      {/* Media Content */}
      <Box className="min-h-screen bg-gray-50 py-8 md:py-12 px-3 md:px-4">
        <Container maxW="1400px">
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList className="flex gap-2 min-w-max px-2 mb-6" flexWrap="wrap" justify="center">
              <Tab _selected={{ bg: 'green.600', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                <Icon as={FaPlay} mr={2} /> Sermons
              </Tab>
              <Tab _selected={{ bg: 'red.600', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                <Icon as={FaVideo} mr={2} /> Videos
              </Tab>
              <Tab _selected={{ bg: 'purple.600', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                <Icon as={FaHeadphones} mr={2} /> Audio
              </Tab>
              <Tab _selected={{ bg: 'blue.600', color: 'white' }} className="font-body px-4 md:px-6 py-2.5 text-sm md:text-base">
                <Icon as={FaImages} mr={2} /> Gallery
              </Tab>
            </TabList>

            <TabPanels>
              {/* Sermons Tab */}
              <TabPanel p={0}>
                <Box className="bg-white rounded-xl shadow-md p-4 md:p-6">
                  {/* Filters */}
                  <Flex className="flex flex-wrap gap-4 mb-6" align="center" justify="space-between" wrap="wrap">
                    <HStack spacing={4} className="flex-wrap">
                      <Select 
                        placeholder="All Series" 
                        size="sm" 
                        width="200px"
                        value={filterSeries}
                        onChange={(e) => setFilterSeries(e.target.value)}
                        className="font-body"
                      >
                        {seriesList.map(series => (
                          <option key={series} value={series}>{series}</option>
                        ))}
                      </Select>
                      <Select 
                        placeholder="All Speakers" 
                        size="sm" 
                        width="200px"
                        value={filterSpeaker}
                        onChange={(e) => setFilterSpeaker(e.target.value)}
                        className="font-body"
                      >
                        {speakersList.map(speaker => (
                          <option key={speaker} value={speaker}>{speaker}</option>
                        ))}
                      </Select>
                    </HStack>
                  </Flex>

                  {/* Sermon Grid */}
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {filteredSermons.map((sermon) => (
                      <Box 
                        key={sermon.id} 
                        className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedSermon(sermon)}
                      >
                        <Box className="aspect-video bg-gray-800 relative flex items-center justify-center">
                          {sermon.type === 'video' ? (
                            <Icon as={FaPlay} className="text-5xl text-white/70" />
                          ) : (
                            <Icon as={FaVolumeUp} className="text-5xl text-white/70" />
                          )}
                          <Badge 
                            className="absolute top-2 right-2" 
                            colorScheme={sermon.type === 'video' ? 'red' : 'purple'}
                          >
                            {sermon.type === 'video' ? 'Video' : 'Audio'}
                          </Badge>
                          <Text className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-body">
                            {sermon.duration}
                          </Text>
                        </Box>
                        <Box p={4}>
                          <HStack spacing={2} mb={2}>
                            <Badge colorScheme="green" fontSize="xs">{sermon.series}</Badge>
                          </HStack>
                          <Text fontWeight="bold" fontSize="md" mb={2} className="font-body">
                            {sermon.title}
                          </Text>
                          <Text fontSize="sm" color="gray.600" noOfLines={2} mb={3} className="font-body">
                            {sermon.description}
                          </Text>
                          <HStack spacing={4} fontSize="xs" color="gray.500" className="font-body">
                            <span className="flex items-center gap-1"><Icon as={FaUser} /> {sermon.speaker}</span>
                            <span className="flex items-center gap-1"><Icon as={FaCalendar} /> {formatDate(sermon.date)}</span>
                          </HStack>
                        </Box>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              </TabPanel>

              {/* Videos Tab */}
              <TabPanel p={0}>
                <Box className="bg-white rounded-xl shadow-md p-4 md:p-6">
                  {/* Featured Video */}
                  <Box className="mb-8">
                    <Box className="rounded-xl overflow-hidden border border-gray-200 mb-4">
                      <YouTubeEmbed url="https://www.youtube.com/@olusolaoladeni" width="100%" height="450" />
                    </Box>
                    <Text fontWeight="bold" fontSize="xl" className="font-heading text-center">
                      Featured Message
                    </Text>
                  </Box>

                  {/* Video Grid */}
                  <Text fontWeight="bold" fontSize="lg" mb={4} className="font-body">
                    Latest Videos
                  </Text>
                  <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={4}>
                    {videos.map((video) => (
                      <Box 
                        key={video.id} 
                        className="bg-white rounded-xl shadow overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
                        as="a"
                        href={`https://youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Box className="aspect-video bg-gray-800 relative flex items-center justify-center">
                          <Icon as={FaPlay} className="text-4xl md:text-5xl text-white/80" />
                          <Box className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-body">
                            {video.duration}
                          </Box>
                          <Badge className="absolute top-2 left-2" colorScheme="red">
                            {video.category}
                          </Badge>
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
                  </SimpleGrid>
                </Box>
              </TabPanel>

              {/* Audio Tab */}
              <TabPanel p={0}>
                <Box className="bg-white rounded-xl shadow-md p-4 md:p-6">
                  {/* Now Playing */}
                  {selectedSermon && selectedSermon.type === 'audio' && (
                    <Box className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 mb-6 text-white">
                      <HStack spacing={4} mb={4}>
                        <Box className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                          <Icon as={FaHeadphones} className="text-3xl" />
                        </Box>
                        <Box flex={1}>
                          <Text fontWeight="bold" fontSize="lg" className="font-body">{selectedSermon.title}</Text>
                          <Text fontSize="sm" className="text-purple-200">{selectedSermon.series} • {selectedSermon.speaker}</Text>
                        </Box>
                        <Button 
                          colorScheme="whiteAlpha" 
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? 'Pause' : 'Play'}
                        </Button>
                      </HStack>
                      <Box className="w-full bg-white/20 rounded-full h-2 mb-2">
                        <Box className="bg-white rounded-full h-2 w-1/3"></Box>
                      </Box>
                      <HStack justify="space-between" fontSize="xs" className="text-purple-200">
                        <span>12:30</span>
                        <span>{selectedSermon.duration}</span>
                      </HStack>
                    </Box>
                  )}

                  {/* Audio List */}
                  <Text fontWeight="bold" fontSize="lg" mb={4} className="font-body">
                    Audio Sermons
                  </Text>
                  <VStack spacing={3} align="stretch">
                    {audioSermons.map((sermon) => (
                      <Box 
                        key={sermon.id} 
                        className={`border rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer ${selectedSermon?.id === sermon.id ? 'border-purple-500 bg-purple-50' : 'border-gray-100'}`}
                        onClick={() => setSelectedSermon(sermon)}
                      >
                        <Flex justify="space-between" align="center" wrap="wrap" gap={2}>
                          <HStack spacing={4}>
                            <Box className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <Icon as={FaHeadphones} className="text-purple-600" />
                            </Box>
                            <Box>
                              <Text fontWeight="bold" fontSize="md" className="font-body">{sermon.title}</Text>
                              <HStack spacing={3} fontSize="xs" color="gray.500" className="font-body">
                                <span>{sermon.series}</span>
                                <span>•</span>
                                <span>{sermon.speaker}</span>
                                <span>•</span>
                                <span>{formatDate(sermon.date)}</span>
                              </HStack>
                            </Box>
                          </HStack>
                          <HStack spacing={2}>
                            <Text fontSize="sm" color="gray.500" className="font-body">{sermon.duration}</Text>
                            <Button size="sm" colorScheme="purple" variant="outline" leftIcon={<FaDownload />} className="font-body">
                              Download
                            </Button>
                          </HStack>
                        </Flex>
                      </Box>
                    ))}
                  </VStack>
                </Box>
              </TabPanel>

              {/* Gallery Tab */}
              <TabPanel p={0}>
                <Box className="bg-white rounded-xl shadow-md p-4 md:p-6">
                  <Text fontWeight="bold" fontSize="lg" mb={4} className="font-body">
                    Photo Gallery
                  </Text>
                  <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={3}>
                    {galleryImages.map((image) => (
                      <Box 
                        key={image.id}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative group"
                        onClick={() => openLightbox(image)}
                      >
                        <Image 
                          src={image.src} 
                          alt={image.alt} 
                          objectFit="cover" 
                          className="w-full h-full"
                        />
                        <Box className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <Icon as={FaImages} className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Box>
                        <Badge className="absolute top-2 left-2" colorScheme="green" fontSize="xs">
                          {image.category}
                        </Badge>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>

      {/* Lightbox Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" size="lg" />
          <ModalBody p={0} display="flex" justifyContent="center" alignItems="center" minH="60vh">
            {selectedImage && (
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                maxH="80vh"
                borderRadius="md"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Media;