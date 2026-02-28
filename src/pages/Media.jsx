import React from 'react';
import WhatsappChat from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
<<<<<<< HEAD

const Media = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Media</h1>
          <p className="text-xl text-white/90">
            Explore our multimedia content and resources
          </p>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">WORK IN PROGRESS!!</h2>
            <p className="text-gray-600">We're working on bringing you amazing media content. Stay tuned!</p>
          </div>
        </div>
      </div>
=======
import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

const Media = () => {
  // const imageUrls = [
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/200',
  //   'https://via.placeholder.com/250',
  //   'https://via.placeholder.com/250',
  //   'https://via.placeholder.com/250',
  //   'https://via.placeholder.com/250',
  //   'https://via.placeholder.com/250',
  //   'https://via.placeholder.com/250',
  //   'https://via.placeholder.com/250',
  //   'https://via.placeholder.com/250',
  // ];
  return (
    <>
      <Navbar />
      {/* work in progress */}
      <Text
        mt='90px'
        py='20px'
        textAlign={'center'}
        fontSize={'4xl'}
        fontWeight={'extrabold'}
        color={'white'}
        backgroundColor='green'
      >
        MEDIA
      </Text>

      <Flex wrap='wrap' justifyContent='center'>
        {/* {imageUrls.map((url, index) => (
          <Box
            key={index}
            m={2}
            p={4}
            bg='gray.200'
            borderRadius='md'
            boxShadow='md'
            maxW={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }}
          >
            <img src={url} alt={`Image ${index}`} />
          </Box>
        ))} */}
        WORK IN PROGRESS!!
      </Flex>
>>>>>>> c24bcc57584f1dfcf929f40026e0afd4163f8882

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Media;
