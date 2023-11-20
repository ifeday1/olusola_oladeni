import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import "./StyledContainer.css"; // Create a separate CSS file for additional styling
import Patience1 from "../assets/patience.webp";
import Presence1 from "../assets/presence.jpg";

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
          <Box
            pl={{ base: "0px", md: "60px" }}
            pb="40px"
            align={{ base: "center", md: "center" }}
          >
            <Text
              pt={{ base: "0px", md: "0px" }}
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
          <Box
            w="300px"
            h="450px"
            bg="blue.600"
            borderRadius="20px"
            px="20px"
            mb="40px"
            mr={{ base: "0px", md: "60px" }}
          >
            <Link to="/patience">
              <Center>
                <Image
                  justifyContent="center"
                  width="250px"
                  borderRadius="20px"
                  src={Patience1}
                  alt="image"
                  alignContent="center"
                />
              </Center>
            </Link>

            <Text fontWeight="semibold" align="center" color="white" pt="20px">
              PATIENCE: A VIRTUE FOR SUSTAINING CHRISTIAN COURTSHIP
            </Text>
            <Text color="white" fontSize="15px" align="center" pt="20px">
              Some courtships had broken up as a result of a lack of patience in
              one or the two who were in the courtship. Some potential couples
              have missed God’s will for their lives due...
            </Text>
          </Box>

          <Box
            w="300px"
            h="450px"
            bg="purple.600"
            borderRadius="20px"
            px="20px"
            mr={{ base: "0px", md: "60px" }}
          >
            <Link to="/presence">
              <Center>
                <Image
                  justifyContent="center"
                  width="250px"
                  borderRadius="20px"
                  src={Presence1}
                  alt="image"
                  alignContent="center"
                />
              </Center>
            </Link>

            <Text fontWeight="semibold" align="center" color="white" pt="20px">
              THE PRESENCE THAT MAKES THE DIFFERENCE IN A CHRISTIAN MARRIAGE
              (JOHN 02:1 -11)
            </Text>
            <Text color="white" fontSize="15px" align="center" pt="20px">
              In all relationships, especially in marital relationships, the
              presence of God is very important. The lack of God’s presence is
              tantamount to a lack of what it takes to make a Christian home.
              There was a wealthy man in a small village called “Konkobilo”...
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default StyledContainer;
