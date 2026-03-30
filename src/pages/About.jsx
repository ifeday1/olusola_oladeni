import React from 'react';
import Navbar from '../components/Navbar';
import { WhatsappChat } from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Box, Text, Image, Center, Flex, Button, SimpleGrid, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaChurch, FaAward, FaHeart, FaArrowRight } from 'react-icons/fa';
import Image2 from '../assets/2.webp';
import Couples from '../assets/Couples.jpeg';
import Pro from '../assets/Pro.jpeg';
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

       {/* Purpose Section with Modern 3-Column Design */}
       <Box backgroundColor='white' py={12}>
         <VStack spacing={8} align="center" maxW="7xl" mx="auto" px={4}>
           {/* Header Section */}
           <HStack align="center" justify="between" w="full" mb={6} spacing={6}>
             <Text fontSize={{ base: '24px', md: '32px' }} fontWeight="bold" color="teal.800">
               PURPOSE OF THE MINISTRY
             </Text>
             <Text fontSize="lg" color="gray.600" maxW="2xl">
               Guided by Ephesians 4:12, we exist to equip believers for ministry and spiritual maturity
             </Text>
           </HStack>
           
           {/* 3-Column Grid */}
           <SimpleGrid 
             columns={{ base: 1, md: 3 }} 
             spacing={6} 
             maxW="7xl" 
             mx="auto"
           >
           
             {/* Proclamation Card */}
             <Box 
               bg="white" 
               rounded="lg" 
               shadow="sm" 
               borderWidth="1px" 
               borderColor="gray.100"
               p={6}
               textAlign="center"
               transition="all 0.3s ease"
               _hover={{
                 transform: "translateY(-4px)",
                 boxShadow: "md",
                 borderColor: "teal.200"
               }}
             >
               <Box 
                 bg="peach.50" 
                 rounded="full" 
                 p={4} 
                 mb={4} 
                 display="inline-block"
               >
                 <Image 
                   src={Pro} 
                   alt='proclaim' 
                   width={60} 
                   height={60} 
                   objectFit="cover"
                 />
               </Box>
               <Text fontSize={{ base: '18px', md: '24px' }} fontWeight="bold" color="teal.800" mb={3}>
                 Proclamation
               </Text>
               <Text color="gray.600" mb={4} lineHeight="1.6">
                 To proclaim the Biblical faith in the Lord Jesus as the ultimate Savior from the power of sin and darkness.
               </Text>
               
             </Box>
             
             {/* Preservation Card */}
             <Box 
               bg="white" 
               rounded="lg" 
               shadow="sm" 
               borderWidth="1px" 
               borderColor="gray.100"
               p={6}
               textAlign="center"
               transition="all 0.3s ease"
               _hover={{
                 transform: "translateY(-4px)",
                 boxShadow: "md",
                 borderColor: "gray.200"
               }}
             >
               <Box 
                 bg="gray.50" 
                 rounded="full" 
                 p={4} 
                 mb={4} 
                 display="inline-block"
               >
                 <Image 
                   src={Preservation} 
                   alt='preservation' 
                   width={60} 
                   height={60} 
                   objectFit="cover"
                 />
               </Box>
               <Text fontSize={{ base: '18px', md: '24px' }} fontWeight="bold" color="teal.800" mb={3}>
                 Preservation
               </Text>
               <Text color="gray.600" mb={4} lineHeight="1.6">
                 To preserve people the lives, homes and ministries through discipleship and mentorship, and for spiritual growth.
               </Text>
               
             </Box>
             
             {/* Production Card */}
             <Box 
               bg="white" 
               rounded="lg" 
               shadow="sm" 
               borderWidth="1px" 
               borderColor="gray.100"
               p={6}
               textAlign="center"
               transition="all 0.3s ease"
               _hover={{
                 transform: "translateY(-4px)",
                 boxShadow: "md",
                 borderColor: "peach.200"
               }}
             >
               <Box 
                 bg="peach.50" 
                 rounded="full" 
                 p={4} 
                 mb={4} 
                 display="inline-block"
               >
                 <Image 
                   src={Production} 
                   alt='production' 
                   width={60} 
                   height={60} 
                   objectFit="cover"
                 />
               </Box>
               <Text fontSize={{ base: '18px', md: '24px' }} fontWeight="bold" color="teal.800" mb={3}>
                 Production
               </Text>
               <Text color="gray.600" mb={4} lineHeight="1.6">
                 To produce and provide helpful resources in all set-ups taking the benefit of countless info and communication technological platforms.
               </Text>
               
             </Box>
           </SimpleGrid>
         </VStack>
       </Box>

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default About;
