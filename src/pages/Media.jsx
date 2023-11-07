import React from "react";
import WhatsappChat from "../components/Whatsapp/Index";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { Text } from "@chakra-ui/react";

const Media = () => {
  return (
    <>
      <Navbar />
      <Text
        mt="90px"
        py="20px"
        textAlign={"center"}
        fontSize={"4xl"}
        fontWeight={"extrabold"}
        color={"white"}
        backgroundColor="red"
      >
        MEDIA
      </Text>
      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Media;
