import React from 'react';
import WhatsappChat from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
import { Flex } from '@chakra-ui/react';
import './Media.css';

const Media = () => {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">Media</h1>
          <p className="page-hero-subtitle">
            Explore our multimedia content and resources
          </p>
        </div>
      </section>

      <Flex wrap='wrap' justifyContent='center' className="media-container">
        <div className="media-work-progress">
          WORK IN PROGRESS!!
        </div>
      </Flex>

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Media;
