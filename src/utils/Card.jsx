import React from "react";
import { Box, Image, Text, Button, VStack, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
    const { image, description, price, link, amazon } = data;

    console.log('image', image)
    console.log('link', link)


    return (
        <Box bg='white' mx="40px" my="20px" borderWidth="1px" borderRadius="lg" overflow="hidden" width='300px' height='300px'>
            <Box mt='30px' display='flex' justifyContent='center'>
                <Image justifyContent='center' width='80px' src={image} alt={description} />
            </Box>

            <VStack p={4} spacing={2}>
                <Text fontWeight="semibold">{description}</Text>
                <Text color="teal.500" fontSize="xl">
                    {price}
                </Text>
                <Center >
                    <Button mr='5px' colorScheme="teal"><Link to={link} />Add to Cart</Button>
                    <Button colorScheme="teal"><Link to={amazon} />Buy on Amazon</Button>
                </Center>
            </VStack>
        </Box>
    );
};

export default Card;
