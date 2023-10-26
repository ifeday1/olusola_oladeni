import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer/Footer'
import WhatsappChat from '../components/Whatsapp/Index'
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Picture from '../assets/Picture.png'

const Home = () => {
    return (
        <div>
            <Navbar />
            <ImageSlider />

            <Box

                bgColor="teal.500"
                width="100%"
                height="77vh"
                display="flex"
                justifyContent="center"
                alignItems="center"

            >
                <Flex
                    direction={{ base: "column", md: "row" }} // Stack in a column on small screens
                    alignItems="center"
                >
                    <Image
                        src={Picture}// Replace with your image URL
                        alt="Sample Image"
                        width="350px"
                        height="auto"
                        paddingLeft={{ base: "0px", md: "40px" }}
                        boxSize={{ base: "200px", md: "490px" }} // Adjust image size based on screen size
                    />
                    <Text fontSize={{ base: "10px", md: "20px" }} ml={4} px="50px" color="white">
                        It is great to have you here. I delightfully welcome you to my website.
                        My vision and mission is to direct people to Jesus Christ, the great transformer, and to support them through the grace of God and to influence and transform life holistically through strategic discipleship and equipment for a productive Christian life. My areas of specialization is Marriage and Family Life and Leadership development through teaching, training and counselling and relationship building.
                        As you surf through the pages of this website, I pray that you will find answers to all your questions and your needs be met. Do well to go through all the resources on this website. I am very certain that you will be blessed through them. Contact me directly for counselling, prayer, testimonies, suggestions and anything else on contact@olusolaoladeni.org / oladeni2008@yahoo.com
                        <br></br>
                        Yours In The Lord's Service,
                        <br></br><br></br>
                        Olusola Oladeni
                    </Text>
                </Flex>
            </Box>

            <WhatsappChat />
            <Footer />
        </div>
    )
}

export default Home;