import React from 'react'
import Navbar from '../components/Navbar'
import WhatsappChat from '../components/Whatsapp/Index'
import Footer from '../components/Footer/Footer'
import { Text } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react';


const Articles = () => {
    return (
        <>
            <Navbar />

            <Text mt="90px" py='20px' textAlign={'center'} fontSize={'4xl'} fontWeight={'extrabold'} color={'white'} backgroundColor='teal'>ARTICLES</Text>






            <WhatsappChat />
            <Footer />
        </>
    )
}

export default Articles