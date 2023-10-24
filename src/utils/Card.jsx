import React from "react";
import { Box, Image, Text, Button, VStack, Center, Link } from "@chakra-ui/react";


const Card = ({ data }) => {
    const { image, description, price, buttonLabel, link } = data;

    console.log('image', image)
    console.log('link', link)


    return (
        <Box bg='white' mx="40px" my="20px" borderWidth="1px" borderRadius="lg" overflow="hidden" width='300px' height='350px'>
            <Box mt='30px' display='flex' justifyContent='center'>
                <Image justifyContent='center' width='80px' src={image} alt={description} />
            </Box>

            <VStack p={4} spacing={2}>
                <Text fontWeight="semibold" align='center'>{description}</Text>
                <Text color="teal.500" fontSize="xl">
                    {price}
                </Text>
                <Center >
                    <Link href={link} isExternal>
                        <Button colorScheme="teal" mt={4}>
                            {buttonLabel}
                        </Button>
                    </Link>
                </Center>
            </VStack>
        </Box>
    );
};

export default Card;
