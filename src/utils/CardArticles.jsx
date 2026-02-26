import React from "react";
import { Box, Image, Text, Button, VStack, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardArticles = ({ data }) => {
  const { image, description, price, buttonLabel, link } = data;

  console.log("image", image);
  console.log("link", link);

  return (
    <Box
      bg="white"
      mx="40px"
      my="20px"
      borderWidth="1px"
      overflow="hidden"
      width="400px"
      height="600px"
      backgroundColor="teal.500"
      borderRadius="20px"
    >
      <Link to={link} isExternal>
        <Box mt="30px" display="flex" justifyContent="center">
          <Image
            justifyContent="center"
            width="350px"
            borderRadius="20px"
            src={image}
            alt={description}
          />
        </Box>

        <VStack p={4} spacing={2}>
          <Text fontWeight="semibold" align="center" color="white">
            {description}
          </Text>
          <Text color="white" fontSize="15px" align="center">
            {price}
          </Text>
          <Center>
            <Link href={link} isExternal>
              <Button colorScheme="teal" mt={4}>
                {buttonLabel}
              </Button>
            </Link>
          </Center>
        </VStack>
      </Link>
    </Box>
  );
};

export default CardArticles;
