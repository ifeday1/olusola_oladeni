import React from 'react';
import Navbar from '../components/Navbar';
import { WhatsappChat } from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Box, Text, Image, Center, Flex, Button, SimpleGrid, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaCross, FaHands, FaBook, FaChurch, FaAward, FaHeart } from 'react-icons/fa';
import Image2 from '../assets/2.webp';
import Couples from '../assets/Couples.jpeg';
import Pro from '../assets/Pro.jpeg';
import Pray from '../assets/pray.jpg';
import Preservation from '../assets/preservation.jpg';
import Production from '../assets/production.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='each-slide-effect' style={{ paddingTop: '90px' }}>
        <div
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(' + Image2 + ')',
            width: '100%',
            height: '600px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Text
            textAlign={'center'}
            fontSize={{ base: '30px', md: '50px' }}
            fontWeight={'bold'}
            color={'white'}
            py={{ base: '400px', md: '400px' }}
            lineHeight='110%'
            paddingBottom={{ base: '0px', md: '0px' }}
          >
            THE MINISTRY
          </Text>
          <Text
            textAlign={'center'}
            fontSize={{ base: '20px', md: '40px' }}
            fontWeight={'medium'}
            color={'white'}
            mb={4}
          >
            OF REVEREND OLUSOLA OLADENI. Ph.D.
          </Text>
          {/* Mission Statement */}
          <Text
            textAlign={'center'}
            fontSize={{ base: '16px', md: '22px' }}
            fontWeight={'normal'}
            color={'white'}
            opacity={0.9}
            mx={{ base: '20px', md: '100px' }}
            fontStyle="italic"
          >
            "Directing people to Jesus Christ, the great transformer, and equipping them for a productive Christian life through teaching, training, and counseling."
          </Text>
          {/* CTA Buttons in Hero */}
          <Center mt={8} gap={4} flexWrap="wrap" justify="center">
            <ChakraLink as={ReactRouterLink} to="/contact">
              <Button
                size="lg"
                bg="green.600"
                color="white"
                _hover={{ bg: 'green.700' }}
                px={8}
              >
                Book Counseling
              </Button>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/books">
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                px={8}
              >
                View Books
              </Button>
            </ChakraLink>
          </Center>
        </div>
      </div>

      {/* Bio Section with Icons */}
      <Box py={16} px={4} bg="gray.50">
        <Center mb={10}>
          <VStack spacing={2}>
            <Text fontSize="3xl" fontWeight="bold" color="teal.800">ABOUT THE MINISTRY</Text>
            <Box w="100px" h="3px" bg="green.500"></Box>
          </VStack>
        </Center>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="6xl" mx="auto">
          {/* Left Column - Bio */}
          <VStack align="start" spacing={6}>
            <Text fontSize="lg" lineHeight="1.8" color="gray.700">
              Olusola Oladeni is a called pastor and an ordained Baptist minister. He
              is a family and marriage counsellor who has authored many books and
              articles. He is spiritually gifted in teaching, preaching, counselling
              and pre-marital and marital relationship building.
            </Text>
            <Text fontSize="lg" lineHeight="1.8" color="gray.700">
              His Christian and ministerial principles are established on{' '}
              <Text as="span" fontWeight="bold" color="teal.600">Ephesians 4:12</Text>, 
              equipping people so that the body of Christ may be built up and become mature,
              attaining the whole measure of all the fullness of Christ.
            </Text>
          </VStack>

          {/* Right Column - Credentials */}
          <VStack align="start" spacing={4}>
            <HStack spacing={4} align="start">
              <Icon as={FaAward} boxSize={6} color="green.600" mt={1} />
              <Box>
                <Text fontWeight="bold" fontSize="lg">Ph.D. in Counselling Psychology</Text>
                <Text color="gray.600">University of Ibadan, Nigeria</Text>
              </Box>
            </HStack>
            <HStack spacing={4} align="start">
              <Icon as={FaChurch} boxSize={6} color="green.600" mt={1} />
              <Box>
                <Text fontWeight="bold" fontSize="lg">Lead Pastor</Text>
                <Text color="gray.600">Winners Baptist Church, Bariga, Lagos</Text>
              </Box>
            </HStack>
            <HStack spacing={4} align="start">
              <Icon as={FaHeart} boxSize={6} color="green.600" mt={1} />
              <Box>
                <Text fontWeight="bold" fontSize="lg">Marriage & Family Specialist</Text>
                <Text color="gray.600">Marfam Life Counselling Ministry</Text>
              </Box>
            </HStack>
          </VStack>
        </SimpleGrid>

        {/* Family Section */}
        <Center mt={12}>
          <Box textAlign="center" maxW="2xl">
            <Text fontSize="xl" fontWeight="bold" color="teal.800" mb={4}>
              Family
            </Text>
            <Text fontSize="lg" color="gray.700">
              He is happily married to his Gem, Esther Adegbenjo and they are blessed with 
              biological and spiritual children.
            </Text>
          </Box>
        </Center>
      </Box>

      <Center py={8}>
        <Image
          src={Couples}
          alt='Reverend Olusola Oladeni and wife'
          boxSize={{ base: '300px', md: '450px', lg: '600px' }}
          borderRadius="lg"
          objectFit="cover"
          shadow="xl"
        />
      </Center>

      {/* Purpose Section with Enhanced Design */}
      <Box backgroundColor='teal.800' py={16} borderLeftRadius='70px'>
        <VStack spacing={4} mb={12}>
          <Text align='center' fontWeight='bold' fontSize={{ base: '30px', md: '40px' }} fontStyle='italic' color='white'>
            PURPOSE OF THE MINISTRY
          </Text>
          <Text align='center' color='white' fontSize="lg" opacity={0.9} maxW="2xl" mx={4}>
            Guided by Ephesians 4:12, we exist to equip believers for ministry and spiritual maturity
          </Text>
        </VStack>

        <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' p={6}>
          <Box flex={1} maxW='500px' color='white'>
            <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight='bold'>Proclamation</Text>
            <Text mt={4}>To proclaim the Biblical faith in the Lord Jesus as the ultimate Savior from the power of sin and darkness.</Text>
          </Box>
          <Box flex={1} mt={{ base: 4, md: 0 }} maxW='500px'>
            <Image src={Pro} alt='proclaim' borderRadius="md" width="100%" />
          </Box>
        </Flex>

        <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' p={6}>
          <Box flex={1} mt={{ base: 4, md: 0 }} maxW='500px'>
            <Image src={Preservation} alt='preservation' borderRadius="md" width="100%" />
          </Box>
          <Box flex={1} maxW='500px' color='white' pl={{ base: 0, md: 7 }} mt={{ base: 4, md: 0 }}>
            <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight='bold'>Preservation</Text>
            <Text mt={4}>To preserve people the lives, homes and ministries through discipleship and mentorship, and for spiritual growth.</Text>
          </Box>
        </Flex>

        <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' p={6}>
          <Box flex={1} maxW='500px' color='white'>
            <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight='bold'>Production</Text>
            <Text mt={4}>To produce and provide helpful resources in all set-ups taking the benefit of countless info and communication technological platforms.</Text>
          </Box>
          <Box flex={1} mt={{ base: 4, md: 0 }} maxW='500px'>
            <Image src={Production} alt='production' borderRadius="md" width="100%" />
          </Box>
        </Flex>
      </Box>

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default About;
