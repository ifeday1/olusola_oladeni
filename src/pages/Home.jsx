import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";
import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Button,
  CSSReset,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Picture from "../assets/Picture.png";
import Preparing from "../assets/prep.jpg";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import ImageCarousel from "../utils/ ImageCarousel";
import StylishBox from "../utils/StylishBox";
import StyledContainer from "../utils/StylishBox";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Percentage of the element's visibility required to trigger the animation
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Initial state of the image
    visible: { opacity: 1, scale: 1, rotate: 360 }, // Animation when it appears
  };

  const marginValue = useBreakpointValue({ base: "2", md: "3", lg: "5" });
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
            as={motion.img}
            src={Picture} // Replace with your image URL
            alt=" Image"
            width="350px"
            height="auto"
            paddingLeft={{ base: "0px", md: "40px" }}
            boxSize={{ base: "200px", md: "490px" }} // Adjust image size based on screen size
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state of the text
            animate={{ opacity: 1, y: 0 }} // Animation when it appears
            transition={{ duration: 9 }} // Duration of the animation
          >
            <Text
              fontSize={{ base: "15px", md: "20px" }}
              ml={4}
              px="50px"
              color="white"
            >
              It is great to have you here. I delightfully welcome you to my
              website. My vision and mission is to direct people to Jesus
              Christ, the great transformer, and to support them through the
              grace of God and to influence and transform life holistically
              through strategic discipleship and equipment for a productive
              Christian life. My areas of specialization is Marriage and Family
              Life and Leadership development through teaching, training and
              counselling and relationship building. As you surf through the
              pages of this website, I pray that you will find answers to all
              your questions and your needs be met. Do well to go through all
              the resources on this website. I am very certain that you will be
              blessed through them. Contact me directly for counselling, prayer,
              testimonies, suggestions and anything else on
              contact@olusolaoladeni.org / oladeni2008@yahoo.com
              <br></br>
              Yours In The Lord's Service,
              <br></br>
              <br></br>
              Olusola Oladeni
            </Text>
          </motion.div>
        </Flex>
      </Box>

      {/* best selling */}
      <Text
        align="center"
        fontWeight="bold"
        fontSize="30px"
        fontStyle="italic"
        mt="40px"
      >
        One of my best selling books{" "}
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }} // Stack in a column on small screens
        alignItems="center"
        align="center"
        justify="center"
        spacing={4}
        margin={marginValue}
        my="40px"
        mx={{ base: "20px", md: "180px" }}
      >
        {/* Image */}
        <Image
          src={Preparing}
          alt="Best selling"
          boxSize={{ base: "1 00px", md: "250px", lg: "400px" }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          mr="100px"
          paddingLeft={{ base: "50px", md: "40px" }}
        />

        {/* Text */}
        <Box>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The book, Preparing for a Glorious Marriage, has attracted
            testimonies from readers. Some of the testimonies include the
            following: A lady testified, “The questions and answers in this book
            has delivered me from my ignorance”. A brother also testified, “This
            book has really helped me in choosing my life partner”. Therefore,
            this book is a premarital counselling book. It is a total book that
            seeks to teach singles on how to choose rightly, how to know God’s
            will and to live correctly in courtship in the fear of the Lord. I n
            this book, you will discover fifteen ways through which God can
            speak to you, ways to nurture God’s will, types of disappointment
            and the type you should work against, and lots more.
          </Text>
          <Link href="https://www.amazon.com/PREPARING-GLORIOUS-MARRIAGE-OLUSOLA-OLADENI-ebook/dp/B0BTFVF9JQ/ref=sr_1_4?crid=23GLWYN00CK3O&keywords=olusola+oladeni&qid=1697823004&sprefix=olusola+oladeni+%2Caps%2C265&sr=8-4">
            <Button mr="20px" mt="10px" colorScheme="blue">
              Purchase Book
            </Button>
          </Link>

          <ChakraLink as={ReactRouterLink} to="/books">
            <Button mt="10px" colorScheme="green">
              Browse through other books
            </Button>
          </ChakraLink>
        </Box>
      </Flex>

      {/* carousel */}

      <CSSReset />
      <Box p={4}>
        <ImageCarousel />
      </Box>

      {/* my area of focus */}
      <Flex
        direction={{ base: "column", md: "row" }} // Stack in a column on small screens
        alignItems="center"
        align="center"
        justify="center"
        spacing={4}
        margin={marginValue}
        gap={20}
        my="40px"
        mx={{ base: "20px", md: "180px" }}
      >
        <Box align="center">
          {/* <Text>Counselling and Relationships </Text> */}
          <Text fontSize="50px" py={{ base: "20px", md: "70px" }}>
            My Area of
            <br></br>
            <span style={{ color: "teal", fontWeight: "bold" }}>
              {" "}
              Training Focus
            </span>
          </Text>
        </Box>

        {/* Text */}
        <Box>
          <Text
            fontSize={{ base: "md", md: "17px", lg: "17px" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            ♣ Professional and personal purpose achievement<br></br>♣ Improved
            personal relational skills, including work and life<br></br>♣
            Increased responsibility and persistence<br></br>♣ Growth in
            marriage-building proficiency and capability<br></br>♣ Better
            passion for counselling and encouragement<br></br>
          </Text>
        </Box>
      </Flex>

      <StyledContainer />

      {/* <Box width="100%" height="500px">
        <Text
          align="center"
          fontWeight="bold"
          fontSize="50px"
          mt="40px"
          color="teal.500"
        >
          Featured Sermons & Teachings
        </Text>
        <Text align="center" fontSize="15px" color="teal.500">
          Watch some of my most watched teachings and sermons selected randomly.
        </Text>

        <Flex
          pt="100px"
          direction={{ base: "column", md: "row" }}
          justify="space-around"
          align="center"
          wrap="wrap"
          mx={{ base: "0px", md: "90px" }}
        >
          <Box>
            <Box h="40px" w="50px" background="red"></Box>
          </Box>

          <Spacer />
          <Box>
            <Box h="40px" w="50px" background="red"></Box>
          </Box>

          <Spacer />
          <Box h="40px" w="50px" background="red"></Box>
        </Flex>
      </Box> */}

      <WhatsappChat />
      <Footer />
    </div>
  );
};

export default Home;
