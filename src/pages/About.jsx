import React from 'react';
import Navbar from '../components/Navbar';
import { WhatsappChat } from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import { Box, Text, Image, Center, SimpleGrid, VStack, HStack, Icon, Button } from '@chakra-ui/react';
import { FaChurch, FaAward, FaHeart, FaBook, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image2 from '../assets/2.webp';
import Couples from '../assets/Couples.jpeg';
import Picturejpeg from '../assets/Picture.jpeg';
import Webp4 from '../assets/4.webp';
import Pro from '../assets/Pro.jpeg';
import Preservation from '../assets/preservation.jpg';
import Production from '../assets/production.jpg';

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* Hero Section */}
      <div style={{
        paddingTop: '90px',
        position: 'relative',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${Image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="text-center px-4 max-w-4xl mx-auto py-16">
          <Text fontSize={{ base: '28px', md: '48px', lg: '50px' }} fontWeight="bold" color="white" lineHeight="110%" mb={2}>
            THE MINISTRY
          </Text>
          <Text fontSize={{ base: '18px', md: '32px', lg: '40px' }} fontWeight="medium" color="white" mb={6}>
            OF REVEREND OLUSOLA OLADENI. Ph.D.
          </Text>
          <Text fontSize={{ base: '14px', md: '20px', lg: '22px' }} fontWeight="normal" color="white" opacity={0.9} mx={{ base: '10px', md: 'auto' }} fontStyle="italic" mb={8}>
            "Directing people to Jesus Christ, the great transformer, and equipping them for a productive Christian life through teaching, training, and counseling."
          </Text>
          <HStack spacing={4} justify="center" flexWrap="wrap" gap={3}>
            <Link to="/books">
              <Button leftIcon={<FaBook />} bg="green.600" color="white" _hover={{ bg: 'green.700' }} size="md">
                View Books
              </Button>
            </Link>
            <Link to="/contact">
              <Button leftIcon={<FaPhone />} variant="outline" color="white" borderColor="white" _hover={{ bg: 'white', color: 'gray.800' }} size="md">
                Contact Us
              </Button>
            </Link>
          </HStack>
        </div>
      </div>

      {/* Bio Section */}
      <Box py={{ base: 10, md: 16 }} px={4} bg="gray.50">
        <Center mb={{ base: 6, md: 10 }}>
          <VStack spacing={2}>
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="green.700" textAlign="center">ABOUT THE MINISTRY</Text>
            <Box w="100px" h="3px" bg="green.500"></Box>
          </VStack>
        </Center>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 10 }} maxW="6xl" mx="auto">
          <VStack align="start" spacing={4}>
            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8" color="gray.700">
              Olusola Oladeni is a called pastor and an ordained Baptist minister. He is a family and marriage counsellor who has authored many books and articles. He is spiritually gifted in teaching, preaching, counselling and pre-marital and marital relationship building.
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8" color="gray.700">
              His Christian and ministerial principles are established on <Text as="span" fontWeight="bold" color="green.600">Ephesians 4:12</Text>, equipping people so that the body of Christ may be built up and become mature, attaining the whole measure of all the fullness of Christ.
            </Text>
          </VStack>

          <VStack align="start" spacing={3}>
            <HStack spacing={3} align="start" p={3} borderRadius="md" _hover={{ bg: 'green.50' }} transition="all 0.3s">
              <Icon as={FaAward} boxSize={5} color="green.600" mt={1} />
              <Box>
                <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>Ph.D. in Counselling Psychology</Text>
                <Text color="gray.600" fontSize="sm">University of Ibadan, Nigeria</Text>
              </Box>
            </HStack>
            <HStack spacing={3} align="start" p={3} borderRadius="md" _hover={{ bg: 'green.50' }} transition="all 0.3s">
              <Icon as={FaChurch} boxSize={5} color="green.600" mt={1} />
              <Box>
                <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>Lead Pastor</Text>
                <Text color="gray.600" fontSize="sm">Winners Baptist Church, Bariga, Lagos</Text>
              </Box>
            </HStack>
            <HStack spacing={3} align="start" p={3} borderRadius="md" _hover={{ bg: 'green.50' }} transition="all 0.3s">
              <Icon as={FaHeart} boxSize={5} color="green.600" mt={1} />
              <Box>
                <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>Marriage & Family Specialist</Text>
                <Text color="gray.600" fontSize="sm">Marfam Life Counselling Ministry</Text>
              </Box>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Family Section */}
      <Box py={{ base: 8, md: 12 }} px={4} bg="white">
        <Box maxW="6xl" mx="auto">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, md: 10 }} alignItems="center">
            <VStack align={{ base: 'center', lg: 'start' }} spacing={4} textAlign={{ base: 'center', lg: 'left' }}>
              <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="green.700">Family</Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                He is happily married to his Gem, Esther Adegbenjo and they are blessed with biological and spiritual children.
              </Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                Together, they serve the body of Christ through marriage counseling, family mentorship, and building strong Christian homes that honor God.
              </Text>
            </VStack>
            <Center>
              <Box position="relative" borderRadius="xl" overflow="hidden" shadow="2xl" maxW={{ base: '100%', md: '500px' }}>
                <Image src={Couples} alt="Couple" w="full" h={{ base: '300px', md: '400px' }} objectFit="cover" />
                <Box position="absolute" bottom={0} left={0} right={0} bgGradient="linear(to-t, blackAlpha.700, transparent)" p={6}>
                  <Text color="white" fontWeight="bold" fontSize="lg">Olusola & Esther Oladeni</Text>
                  <Text color="whiteAlpha.800" fontSize="sm">Married for over 20 years</Text>
                </Box>
              </Box>
            </Center>
          </SimpleGrid>
        </Box>
      </Box>

      {/* 3D Tilt Effect - Large Screen Only */}
      <Box py={16} px={4} bg="white" display={{ base: 'none', lg: 'block' }}>
        <Center mb={8}>
          <VStack spacing={2}>
            <Text fontSize="2xl" fontWeight="bold" color="green.700">Our Journey Together</Text>
            <Box w="100px" h="3px" bg="green.500"></Box>
          </VStack>
        </Center>
        <Box maxW="6xl" mx="auto">
          <HStack spacing={8} justify="center">
            {[
              { src: Couples, subtitle: "Family First" },
              { src: Picturejpeg, subtitle: "Building Together" },
              { src: Webp4, subtitle: "Leading Forward" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  rotateY: 15,
                  rotateX: -15,
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px" }}
              >
                <Box borderRadius="xl" overflow="hidden" shadow="xl" w="300px" h="400px" position="relative">
                  <Image src={item.src} alt={item.subtitle} w="full" h="full" objectFit="cover" />
                  <Box position="absolute" bottom={0} left={0} right={0} bgGradient="linear(to-t, blackAlpha.800, transparent)" p={6}>
                    <Text color="white" fontWeight="bold" fontSize="xl">{item.subtitle}</Text>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* Purpose Section */}
      <Box backgroundColor="white" py={{ base: 8, md: 12 }} px={4}>
        <VStack spacing={6} align="center" maxW="7xl" mx="auto">
          <VStack spacing={2} textAlign="center" mb={2}>
            <Text fontSize={{ base: '20px', md: '32px' }} fontWeight="bold" color="green.700">PURPOSE OF THE MINISTRY</Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="2xl">Guided by Ephesians 4:12, we exist to equip believers for ministry and spiritual maturity</Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} maxW="7xl" mx="auto">
            <Box bg="white" rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100" overflow="hidden" transition="all 0.3s ease" _hover={{ transform: "translateY(-4px)", boxShadow: "lg", borderColor: "green.300" }}>
              <Box position="relative" h={{ base: "140px", md: "180px" }}>
                <Image src={Pro} alt="Proclamation" w="full" h="full" objectFit="cover" />
                <Box position="absolute" bottom={0} left={0} right={0} h="50%" bgGradient="linear(to-t, blackAlpha.600, transparent)" />
              </Box>
              <Box p={{ base: 4, md: 5 }}>
                <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold" color="green.700" mb={2}>Proclamation</Text>
                <Text color="gray.600" lineHeight="1.6" fontSize={{ base: 'sm', md: 'md' }}>To proclaim the Biblical faith in the Lord Jesus as the ultimate Savior from the power of sin and darkness.</Text>
              </Box>
            </Box>
            <Box bg="white" rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100" overflow="hidden" transition="all 0.3s ease" _hover={{ transform: "translateY(-4px)", boxShadow: "lg", borderColor: "green.300" }}>
              <Box position="relative" h={{ base: "140px", md: "180px" }}>
                <Image src={Preservation} alt="Preservation" w="full" h="full" objectFit="cover" />
                <Box position="absolute" bottom={0} left={0} right={0} h="50%" bgGradient="linear(to-t, blackAlpha.600, transparent)" />
              </Box>
              <Box p={{ base: 4, md: 5 }}>
                <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold" color="green.700" mb={2}>Preservation</Text>
                <Text color="gray.600" lineHeight="1.6" fontSize={{ base: 'sm', md: 'md' }}>To preserve people the lives, homes and ministries through discipleship and mentorship, and for spiritual growth.</Text>
              </Box>
            </Box>
            <Box bg="white" rounded="xl" shadow="sm" borderWidth="1px" borderColor="gray.100" overflow="hidden" transition="all 0.3s ease" _hover={{ transform: "translateY(-4px)", boxShadow: "lg", borderColor: "green.300" }}>
              <Box position="relative" h={{ base: "140px", md: "180px" }}>
                <Image src={Production} alt="Production" w="full" h="full" objectFit="cover" />
                <Box position="absolute" bottom={0} left={0} right={0} h="50%" bgGradient="linear(to-t, blackAlpha.600, transparent)" />
              </Box>
              <Box p={{ base: 4, md: 5 }}>
                <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold" color="green.700" mb={2}>Production</Text>
                <Text color="gray.600" lineHeight="1.6" fontSize={{ base: 'sm', md: 'md' }}>To produce and provide helpful resources in all set-ups taking the benefit of countless info and communication technological platforms.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <WhatsappChat />
      <Footer />
    </React.Fragment>
  );
};

export default About;