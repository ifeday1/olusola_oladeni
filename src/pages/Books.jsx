import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'

import { ChakraProvider, Flex, Container, Box, Text } from "@chakra-ui/react";
import Card from "../utils/Card";
import cardData from "../utils/CardData";

const Books = ({ data }) => {


    return (
        <>
            <Navbar />
            <Box mt='90px' width='100%' height='80px' bg='red'>
                <Text pt='10px' align='center' color='white' fontSize='40px' fontWeight="bold" >MY BOOKS</Text>
            </Box>
            <Flex
                pt='80px'
                flexWrap={{ base: "wrap", md: "no-wrap" }} // Wrap on small screens, no wrap on medium and larger screens
                justifyContent="center"
                bgGradient='linear(red.100 0%, white.100 25%, yellow.100 50%)'
            >
                {cardData.map((item) => (

                    <Card key={cardData.id} data={item} />
                )
                )}
            </Flex>
            <Footer />
        </>
    )
}

export default Books