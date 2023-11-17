import React from "react";
import { Box, Flex, Spacer, Text, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import "./StyledContainer.css"; // Create a separate CSS file for additional styling

const StyledContainer = () => {
  return (
    <>
      <Box className="styled-container">
        <Flex
          pt="100px"
          direction={{ base: "column", md: "row" }}
          justify="space-around"
          align="center"
          wrap="wrap"
        >
          <Box pl={{ base: "0px", md: "60px" }}>
            <Text
              pt={{ base: "0px", md: "60px" }}
              fontSize="60px"
              fontWeight="semi-bold"
              fontFamily="sans"
            >
              Featured Articles
            </Text>
            <Text fontSize="20px" fontStyle="italic">
              Some of the most educative and most
              <br></br> inspiring articles from the archives of
              <br></br>
              Reverend Dr. Olusola Oladeni
            </Text>
            <ChakraLink as={ReactRouterLink} to="/articles">
              <Button mt="10px" colorScheme="blue">
                SEEL ALL ARTICLES
              </Button>
            </ChakraLink>
          </Box>

          <Spacer />
          <Box w="300px" h="400px" bg="red.500"></Box>
          <Spacer />
          <Box w="180px" h="10" bg="red.500" />
        </Flex>
      </Box>
    </>
  );
};

export default StyledContainer;
