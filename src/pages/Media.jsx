import React from 'react';
import WhatsappChat from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
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
        WORKING IN PROGRESS
      </Flex>

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Media;
