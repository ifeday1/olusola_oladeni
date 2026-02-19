import { React, useState } from "react";
import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Flex,
  Box,
  HStack,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Image2 from "../../src/assets/3.webp";
import WhatsappChat from "../components/Whatsapp/Index";

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showToast = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        title: "Fill empty fields",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Sent",
        description: "Your message has been sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const [state, handleSubmit] = useForm("xbjvqnvz");
  if (state.succeeded) {
  }

  return (
    <>
      <Navbar />
      <div className="each-slide-effect" style={{ paddingTop: "90px" }}>
        <Box
          height={{ base: "1100px", md: "750px" }}
          style={{
            backgroundImage: `url(${Image2})`,
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <span>
            <Text
              py="20px"
              textAlign={"center"}
              fontSize={"4xl"}
              fontWeight={"extrabold"}
              color={"white"}
              backgroundColor="red"
            >
              CONTACT US
            </Text>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              alignItems="center"
            >
              <Box
                width={{ base: "100%", md: "50%" }}
                p={10}
                order={{ base: 2, md: 1 }}
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  lineHeight={{ base: "20px", md: "40px" }}
                  fontSize={{ base: "20px", md: "3xl" }}
                >
                  {" "}
                  I WOULD LOVE TO HEAR FROM YOU
                </Text>
                <Text fontSize="15px" pt="10px" color="whitesmoke">
                  Welcome to my contact information page. If you will like to
                  send me a message, you can use the form at the right. Good
                  bless you.
                </Text>
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems="center"
                  gap={4}
                >
                  {/* Your two items inside the second box */}
                  <Box pr="150px">
                    <Text
                      pt=" 50px"
                      color="white"
                      fontSize="15px"
                      fontWeight="bold"
                    >
                      REACH ME THROUGH
                    </Text>
                    <HStack spacing={4} mt={4}>
                      <IconButton
                        aria-label="Phone"
                        icon={<FaPhone />}
                        onClick={() => window.open("tel:+2348034498307")}
                      >
                        08034498307
                      </IconButton>
                      <IconButton
                        aria-label="Email"
                        icon={<FaEnvelope />}
                        onClick={() =>
                          window.open("mailto:oladeni2008@yahoo.com")
                        }
                      >
                        oladeni2008@yahoo.com
                      </IconButton>
                    </HStack>
                  </Box>
                  <Box pt="0px">
                    <Text
                      pt=" 50px"
                      color="white"
                      fontSize="15px"
                      fontWeight="bold"
                      pb="10px"
                    >
                      SOCIAL NETWORKS
                    </Text>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        mr={4}
                        aria-label="Facebook"
                        icon={<FaFacebook />}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        mr={4}
                        aria-label="Instagram"
                        icon={<FaInstagram />}
                      />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        mr={4}
                        aria-label="Twitter"
                        icon={<FaTwitter />}
                      />
                    </a>
                    <a
                      href="https://www.tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        mr={4}
                        aria-label="TikTok"
                        icon={<FaTiktok />}
                      />
                    </a>
                  </Box>
                </Flex>
              </Box>

              <Box
                width={{ base: "100%", md: "50%" }}
                p={10}
                order={{ base: 1, md: 2 }}
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  lineHeight={{ base: "20px", md: "40px" }}
                  fontSize={{ base: "20px", md: "3xl" }}
                >
                  {" "}
                  Send Us A Message{" "}
                </Text>
                <VStack
                  as="form"
                  action="https://formspree.io/f/xbjvqnvz"
                  method="POST"
                  spacing="2"
                  onSubmit={handleSubmit}
                  onClick={showToast}
                >
                  <FormControl color="white">
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <FormControl color="white">
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl color="white">
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl color="white">
                    <FormLabel>Message(Testimony,Prayer request...)</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    disabled={state.submitting}
                  >
                    Submit
                  </Button>
                </VStack>
              </Box>
            </Flex>
          </span>
        </Box>
      </div>

      <WhatsappChat />
      <Footer />
    </>
  );
};

export default Contact;
