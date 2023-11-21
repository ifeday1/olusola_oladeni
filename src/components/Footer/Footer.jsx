import React from "react";

import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/long.png";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import { Link as SLink } from "react-scroll";

const Footer = () => {
  return (
    <section>
      <Box p={{ base: "1rem", md: "4rem" }} bg="whitesmoke">
        <Flex flexDir={{ base: "column", md: "row" }}>
          {/* About & logo */}
          <Box py={{ base: "10px", md: "0px" }} w={{ base: "100%", md: "30%" }}>
            <Box width="200px" ml="-60px" className="logo">
              <Link to="/home">
                <img src={Logo} alt="Logo" />
              </Link>
            </Box>

            <Text pr={"30px"}>
              To influence, build, and transform the total person. To facilitate
              life-changing programmes through teaching, training and
              counselling.{" "}
            </Text>
          </Box>

          {/* Home, features, packages, pricing */}
          <Box py={{ base: "10px", md: "0px" }} w={{ base: "100%", md: "20%" }}>
            <Text fontWeight={"bold"}>Useful Links</Text>
            <List spacing={3} paddingLeft={"0 !important"}>
              <ListItem fontWeight={"semibold"}>
                {" "}
                <Link to="/about">About</Link>{" "}
              </ListItem>
              <ListItem fontWeight={"semibold"}>
                {" "}
                <Link to="/books">Books</Link>{" "}
              </ListItem>
              <ListItem fontWeight={"semibold"}>
                {" "}
                <Link to="/media">Media</Link>{" "}
              </ListItem>
              <ListItem fontWeight={"semibold"}>
                {" "}
                <Link to="/media">Contact</Link>{" "}
              </ListItem>
            </List>
          </Box>
          {/* terms, privacy */}
          <Box py={{ base: "10px", md: "0px" }} w={{ base: "100%", md: "25%" }}>
            <Text fontWeight={"bold"}>Support</Text>
            <List spacing={3} paddingLeft={"0 !important"}>
              <ListItem fontWeight={"semibold"}>
                {" "}
                <Link to="">Privacy Policy</Link>{" "}
              </ListItem>
              <ListItem fontWeight={"semibold"}>
                {" "}
                <Link to="">Terms and Conditions</Link>{" "}
              </ListItem>
            </List>
          </Box>
          {/* Contact info */}
          <Box py={{ base: "10px", md: "0px" }} w={{ base: "100%", md: "25%" }}>
            <Text fontWeight={"bold"}>Get in touch</Text>
            <List spacing={3} paddingLeft={"0 !important"}>
              <ListItem fontWeight={"semibold"}>
                {" "}
                <a href="mailto:oladeni2008@yahoo.com">
                  {" "}
                  <ListIcon as={FaEnvelope} color="red.400" />{" "}
                  oladeni2008@yahoo.com
                </a>{" "}
              </ListItem>
              <ListItem fontWeight={"semibold"}>
                {" "}
                <a href="tel:+23408034498307">
                  {" "}
                  <ListIcon as={FaPhone} color="red.400" /> +234 803 4498 307
                </a>{" "}
              </ListItem>
              <ListItem fontWeight={"semibold"}>
                {" "}
                <Text>
                  {" "}
                  <ListIcon as={FaMap} color="red.400" />
                  5, Adebayo Adekoya Street New Garage Bariga, Lagos
                </Text>{" "}
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>

      <Box background="black" p={"2rem"}>
        <Text textAlign={"center"} color="#ffffff">
          {" "}
          Designed & Developed by{" "}
          <a
            href="https://web-portfilo-git-master-ifeday1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ifeday Concepts
          </a>
        </Text>
      </Box>
    </section>
  );
};

export default Footer;
