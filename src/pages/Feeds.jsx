import React from 'react';
import Navbar from '../components/Navbar';
import WhatsappChat from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import { FacebookEmbed } from 'react-social-media-embed';
import { Text } from '@chakra-ui/react';

const Feeds = () => {
  return (
    <div>
      <Navbar />
      <Text
        mt='90px'
        mb='40px'
        py='20px'
        textAlign={'center'}
        fontSize={'4xl'}
        fontWeight={'extrabold'}
        color={'white'}
        backgroundColor='green'
      >
        FEEDS
      </Text>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FacebookEmbed
          url='https://web.facebook.com/photo?fbid=24158174703826259&set=a.559018640835197'
          width={550}
        />
      </div>
      <WhatsappChat />
      <Footer />
    </div>
  );
};

export default Feeds;
