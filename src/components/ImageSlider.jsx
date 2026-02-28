import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
<<<<<<< HEAD
import { Text, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
=======
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
>>>>>>> c24bcc57584f1dfcf929f40026e0afd4163f8882

import Image from "../assets/1.webp";
import Image1 from "../assets/2.webp";
import Image2 from "../assets/3.webp";
import Image3 from "../assets/4.webp";
import Image5 from "../assets/5.webp";

<<<<<<< HEAD
const HeroButtons = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="flex justify-center gap-[30px] mt-[30px] flex-wrap"
  >
    <Link
      as={RouterLink}
      to="/book-session"
      _hover={{ textDecoration: "none" }}
    >
      <Button className="bg-green-600 text-white rounded-lg font-bold text-lg px-10 py-7 hover:bg-green-700 hover:translate-y-[-2px]">
        Book a Session
      </Button>
    </Link>
    <Link as={RouterLink} to="/media" _hover={{ textDecoration: "none" }}>
      <Button className="text-white border-white border-2 rounded-lg font-bold text-lg px-10 py-7 hover:bg-white hover:text-gray-900" variant="outline" size="lg">
        Watch Messages
      </Button>
    </Link>
  </motion.div>
);

const SlideText = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3 }}
  >
    <Text className="text-center font-bold text-white leading-[120%] pb-0 md:text-[56px] text-[30px] md:pt-[350px] pt-[250px] px-2">
      To influence and transform life holistically
      <br></br>through strategic discipleship and equipment
      <br></br>for a productive Christian life.
    </Text>
    <HeroButtons />
  </motion.div>
);

const SlideContent = ({ image, duration = 1 }) => (
  <div className="pt-[90px] md:pt-[70px]">
    <div
      className="w-full h-[875px] bg-cover bg-repeat bg-center md:h-[600px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration }}
        >
          <SlideText />
        </motion.div>
      </span>
    </div>
  </div>
);

const Example = () => {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <Zoom scale={1.4}>
        <SlideContent image={Image} duration={3} />
        <SlideContent image={Image5} />
        <SlideContent image={Image1} />
        <SlideContent image={Image2} />
        <SlideContent image={Image3} />
=======
const Example = () => {
  return (
    <div>
      <Zoom scale={1.4}>
        <div className="each-slide-effect" style={{ paddingTop: "90px" }}>
          <div
            style={{
              backgroundImage: `url(${Image})`,
              width: "100%",
              height: "600px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <span>
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial state of the text
                animate={{ opacity: 1, y: 0 }} // Animation when it appears
                transition={{ duration: 3 }} // Duration of the animation
              >
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "30px", md: "4xl" }}
                  fontWeight={"bold"}
                  color={"white"}
                  py={{ base: "300px", md: "400px" }}
                  lineHeight="110%"
                  paddingBottom={{ base: "0px", md: "0px" }}
                >
                  To influence and transform life holistically
                  <br></br>through strategic discipleship and equipment
                  <br></br>for a productive Christian life.
                </Text>
              </motion.div>
            </span>
          </div>
        </div>

        <div className="each-slide-effect" style={{ paddingTop: "90px" }}>
          <div
            style={{
              backgroundImage: `url(${Image5})`,
              width: "100%",
              height: "600px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <span>
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial state of the text
                animate={{ opacity: 1, y: 0 }} // Animation when it appears
                transition={{ duration: 1 }} // Duration of the animation
              >
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "30px", md: "4xl" }}
                  fontWeight={"bold"}
                  color={"white"}
                  py={{ base: "300px", md: "400px" }}
                  lineHeight="110%"
                  paddingBottom={{ base: "0px", md: "0px" }}
                >
                  To influence and transform life holistically
                  <br></br>through strategic discipleship and equipment
                  <br></br>for a productive Christian life.
                </Text>{" "}
              </motion.div>
            </span>
          </div>
        </div>

        <div className="each-slide-effect" style={{ paddingTop: "90px" }}>
          <div
            style={{
              backgroundImage: `url(${Image1})`,
              width: "100%",
              height: "600px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <span style={{ color: "white" }}>
              <Text
                textAlign={"center"}
                fontSize={{ base: "30px", md: "4xl" }}
                fontWeight={"bold"}
                color={"white"}
                py={{ base: "300px", md: "400px" }}
                lineHeight="110%"
                paddingBottom={{ base: "0px", md: "0px" }}
              >
                To influence and transform life holistically
                <br></br>through strategic discipleship and equipment
                <br></br>for a productive Christian life.
              </Text>{" "}
            </span>
          </div>
        </div>
        <div className="each-slide-effect" style={{ paddingTop: "90px" }}>
          <div
            style={{
              backgroundImage: `url(${Image2})`,
              width: "100%",
              height: "600px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <span>
              <Text
                textAlign={"center"}
                fontSize={{ base: "30px", md: "4xl" }}
                fontWeight={"bold"}
                color={"white"}
                py={{ base: "300px", md: "400px" }}
                lineHeight="110%"
                paddingBottom={{ base: "0px", md: "0px" }}
              >
                To influence and transform life holistically
                <br></br>through strategic discipleship and equipment
                <br></br>for a productive Christian life.
              </Text>{" "}
            </span>
          </div>
        </div>
        <div className="each-slide-effect" style={{ paddingTop: "90px" }}>
          <div
            style={{
              backgroundImage: `url(${Image3})`,
              width: "100%",
              height: "600px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <span>
              <Text
                textAlign={"center"}
                fontSize={{ base: "30px", md: "4xl" }}
                fontWeight={"bold"}
                color={"white"}
                py={{ base: "300px", md: "400px" }}
                lineHeight="110%"
                paddingBottom={{ base: "0px", md: "0px" }}
              >
                To influence and transform life holistically
                <br></br>through strategic discipleship and equipment
                <br></br>for a productive Christian life.
              </Text>
            </span>
          </div>
        </div>
>>>>>>> c24bcc57584f1dfcf929f40026e0afd4163f8882
      </Zoom>
    </div>
  );
};

export default Example;
