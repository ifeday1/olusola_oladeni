import React from 'react';
import Navbar from '../components/Navbar';
import WhatsappChat from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import { Flex, Text } from '@chakra-ui/react';
import Card from '../utils/CardArticles';
// import CardArticles from "../utils/CardArticles";
import CardDataArticles from '../utils/CardDataArticles';

const Articles = () => {
  return (
    <>
      <Navbar />

      <Text
        mt='90px'
        py='20px'
        textAlign={'center'}
        fontSize={'4xl'}
        fontWeight={'extrabold'}
        color={'white'}
        backgroundColor='teal'
      >
        ARTICLES
      </Text>
      <Flex
        pt='80px'
        flexWrap={{ base: 'wrap', md: 'no-wrap' }} // Wrap on small screens, no wrap on medium and larger screens
        justifyContent='center'
      >
        {CardDataArticles.map((item) => (
          <Card key={CardDataArticles.id} data={item} />
        ))}
      </Flex>

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Articles;
