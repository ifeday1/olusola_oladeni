import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Image from "../assets/1.webp";
import Image1 from "../assets/2.webp";
import Image2 from "../assets/3.webp";
import Image3 from "../assets/4.webp";
import Image5 from "../assets/5.webp";

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
      </Zoom>
    </div>
  );
};

export default Example;
