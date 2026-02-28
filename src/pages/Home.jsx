<<<<<<< HEAD
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";
import { Image, CSSReset } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import Dad from "../assets/dad.svg";
import Preparing from "../assets/prep.jpg";

import ImageCarousel from "../utils/ImageCarousel";
import StyledContainer from "../utils/StylishBox";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />

			{/* Welcome Section */}
			<div className="bg-gradient-to-r from-green-50 to-purple-50 py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="flex-1">
							<p className="text-gray-700 text-lg leading-relaxed mb-6">
								It is great to have you here. I delightfully welcome
								you to my website. My vision and mission is to
								direct people to Jesus Christ, the great
								transformer, and to support them through the grace
								of God and to influence and transform life
								holistically through strategic discipleship and
								equipment for a productive Christian life. My areas
								of specialization is Marriage and Family Life and
								Leadership development through teaching, training
								and counselling and relationship building. As you
								surf through the pages of this website, I pray that
								you will find answers to all your questions and your
								needs be met. Do well to go through all the
								resources on this website. I am very certain that
								you will be blessed through them.
							</p>

							<p className="text-gray-700 text-lg">
								Contact me directly for counselling, prayer,
								testimonies, suggestions and anything else
								<br></br>
								<br></br>
								<span className="font-semibold">contact@olusolaoladeni.org</span> OR <span className="font-semibold">oladeni2008@yahoo.com</span>
								<br></br>
								<br></br>
								Yours In The Lord's Service,
								<br></br>
								<br></br>
								<span className="text-xl font-bold text-green-700">Olusola Oladeni</span>
							</p>
						</div>

						<div className="flex-shrink-0">
							<Image
								as={motion.img}
								src={Dad}
								alt="Reverend Dr. Olusola Oladeni"
								className="rounded-lg shadow-xl max-w-sm"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Best Selling Book Section */}
			<div className="py-16 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
							One of my best selling books
						</h2>
						<p className="text-green-600 font-semibold">Best selling</p>
					</div>

					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="flex-shrink-0">
							<a
								href="/basic"
								className="block"
								title="Preview this book"
							>
								<div className="relative group">
									<Image src={Preparing} alt="Best selling" className="rounded-lg shadow-lg w-64" />
									<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
								</div>
							</a>
						</div>

						<div className="flex-1">
							<p className="text-xl text-gray-700 mb-6 italic">
								"Preparing for a Glorious Marriage" has
								transformed countless relationships, with
								readers sharing powerful testimonies.
							</p>

							<p className="text-gray-600 mb-4">
								<span className="text-2xl text-green-600 mr-1">&ldquo;</span>
								The questions and answers in this book delivered
								me from my ignorance.
								<span className="text-2xl text-green-600 ml-1">&rdquo;</span>
							</p>

							<p className="text-gray-600 mb-6">
								<span className="text-2xl text-green-600 mr-1">&ldquo;</span>
								This book has really helped me in choosing my
								life partner.
								<span className="text-2xl text-green-600 ml-1">&rdquo;</span>
							</p>

							<p className="font-semibold text-gray-800 mb-3">
								This comprehensive premarital guide equips
								singles with the wisdom to:
							</p>

							<ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
								<li>Make wise relationship decisions</li>
								<li>Discern God's will for your future</li>
								<li>Live intentionally during courtship</li>
							</ul>

							<p className="text-gray-600 mb-6">
								Inside, you'll discover fifteen ways God speaks
								to you, how to nurture His will, types of
								disappointment to avoid, and much more.
							</p>

							<div className="flex flex-wrap gap-4">
								<a
									href="https://www.amazon.com/PREPARING-GLORIOUS-MARRIAGE-OLUSOLA-OLADENI-ebook/dp/B0BTFVF9JQ/ref=sr_1_4?crid=23GLWYN00CK3O&keywords=olusola+oladeni&qid=1697823004&sprefix=olusola+oladeni+%2Caps%2C265&sr=8-4"
									className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
									target="_blank"
									rel="noopener noreferrer"
								>
									Buy Now
								</a>
								<ChakraLink as={ReactRouterLink} to="/books">
									<button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-colors">
										View All Books
									</button>
								</ChakraLink>
							</div>
						</div>
					</div>
				</div>
			</div>

			<CSSReset />
			<div className="w-full">
				<ImageCarousel />
			</div>

			{/* Featured Articles Section
			<div className="py-16 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Featured Articles</h2>
					<p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
						Some of the most educative and most inspiring articles from
						the archives of Reverend Dr. Olusola Oladeni
					</p>

					<div className="grid md:grid-cols-3 gap-6">
						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
							<div>
								<span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Courtship</span>
								<p className="text-gray-800 font-semibold mt-3">
									PATIENCE: A VIRTUE FOR SUSTAINING CHRISTIAN
									COURTSHIP
								</p>
							</div>
							<span className="text-gray-500 text-sm">Feb, 18 2025</span>
						</div>

						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
							<div>
								<span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Marriage</span>
								<p className="text-gray-800 font-semibold mt-3">
									THE PRESENCE THAT MAKES THE DIFFERENCE IN A
									CHRISTIAN MARRIAGE
								</p>
							</div>
							<span className="text-gray-500 text-sm">Feb, 18 2025</span>
						</div>

						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
							<div>
								<span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Purpose</span>
								<p className="text-gray-800 font-semibold mt-3">
									PURPOSES OF HIS DIVINE POWER
								</p>
							</div>
							<span className="text-gray-500 text-sm">Feb, 18 2025</span>
						</div>
					</div>

					<div className="text-center mt-10">
						<ChakraLink as={ReactRouterLink} to="/articles">
							<button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
								See all Articles
							</button>
						</ChakraLink>
					</div>
				</div>
			</div> */}

			{/* Core Training Areas */}
			<div className="py-16 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Core Training Areas</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
							<p className="text-gray-700 font-medium">Professional and personal purpose achievement</p>
						</div>
						<div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
							<p className="text-gray-700 font-medium">
								Improved personal relational skills, including work
								and life
							</p>
						</div>
						<div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
							<p className="text-gray-700 font-medium">Increased responsibility and persistence</p>
						</div>
						<div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
							<p className="text-gray-700 font-medium">
								Growth in marriage-building proficiency and
								capability
							</p>
						</div>
						<div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
							<p className="text-gray-700 font-medium">Better passion for counselling and encouragement</p>
						</div>
					</div>
				</div>
			</div>

			<StyledContainer />

			{/* Transformation Section */}
			<div className="py-16 px-4 bg-gradient-to-r from-green-800 to-purple-800">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row items-center justify-between gap-8">
						<div className="text-white flex-1">
							<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
								<h3 className="text-2xl md:text-3xl font-bold">
									Transformation is not accidental. It is
									intentional.
								</h3>
							</div>
							<p className="text-white/90 text-lg mb-6">
								Take the next step in your spiritual journey today.
							</p>
							<button className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
								Book a Session
							</button>
						</div>

						<div className="flex gap-4">
							<div className="w-32 h-32 bg-white/20 rounded-lg"></div>
							<div className="w-32 h-32 bg-white/10 rounded-lg mt-8"></div>
						</div>
					</div>
				</div>
			</div>

			<WhatsappChat />
			<Footer />
		</div>
	);
=======
import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer/Footer';
import WhatsappChat from '../components/Whatsapp/Index';
import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Button,
  CSSReset,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// import Picture from '../assets/Picture.png';
import Dad from '../assets/dad.svg';
import Preparing from '../assets/prep.jpg';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

import ImageCarousel from '../utils/ ImageCarousel';
// import StylishBox from "../utils/StylishBox";
import StyledContainer from '../utils/StylishBox';
import { motion } from 'framer-motion';
// import { useInView } from "react-intersection-observer";

const Home = () => {
  // const [ inView] = useInView({
  //   triggerOnce: true, // Trigger animation only once
  //   threshold: 0.2, // Percentage of the element's visibility required to trigger the animation
  // });

  // const imageVariants = {
  //   hidden: { opacity: 0, scale: 0.5 }, // Initial state of the image
  //   visible: { opacity: 1, scale: 1, rotate: 360 }, // Animation when it appears
  // };

  const marginValue = useBreakpointValue({ base: '2', md: '3', lg: '5' });
  return (
    <div>
      <Navbar />
      <ImageSlider />

      <Box
        bgColor='teal.800'
        width='100%'
        height='130vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Flex
          direction={{ base: 'column', md: 'row' }} // Stack in a column on small screens
          alignItems='center'
        >
          <Image
            as={motion.img}
            src={Dad} // Replace with your image URL
            alt=' Image'
            width='350px'
            height='auto'
            paddingLeft={{ base: '0px', md: '40px' }}
            boxSize={{ base: '200px', md: '490px' }} // Adjust image size based on screen size
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state of the text
            animate={{ opacity: 1, y: 0 }} // Animation when it appears
            s
          >
            <Text
              fontSize={{ base: '15px', md: '20px' }}
              ml={4}
              px='50px'
              color='white'
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
        align='center'
        fontWeight='bold'
        fontSize='30px'
        fontStyle='italic'
        mt='40px'
      >
        One of my best selling books{' '}
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }} // Stack in a column on small screens
        alignItems='center'
        align='center'
        justify='center'
        spacing={4}
        margin={marginValue}
        my='40px'
        mx={{ base: '20px', md: '180px' }}
      >
        {/* Image */}
        <Image
          src={Preparing}
          alt='Best selling'
          boxSize={{ base: '1 00px', md: '250px', lg: '400px' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          mr='100px'
          paddingLeft={{ base: '50px', md: '40px' }}
        />

        {/* Text */}
        <Box>
          <Text
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
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
          <Link href='https://www.amazon.com/PREPARING-GLORIOUS-MARRIAGE-OLUSOLA-OLADENI-ebook/dp/B0BTFVF9JQ/ref=sr_1_4?crid=23GLWYN00CK3O&keywords=olusola+oladeni&qid=1697823004&sprefix=olusola+oladeni+%2Caps%2C265&sr=8-4'>
            <Button mr='20px' mt='10px' colorScheme='blue'>
              Purchase Book
            </Button>
          </Link>

          <ChakraLink as={ReactRouterLink} to='/books'>
            <Button mt='10px' colorScheme='green'>
              Browse through other books
            </Button>
          </ChakraLink>
        </Box>
      </Flex>


      <CSSReset />
      <Box p={4}>
        <ImageCarousel />
      </Box>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        align='center'
        justify='center'
        spacing={4}
        margin={marginValue}
        gap={20}
        my='40px'
        mx={{ base: '20px', md: '180px' }}
      >
        <Box align='center'>
          {/* <Text>Counselling and Relationships </Text> */}
          <Text fontSize='50px' py={{ base: '20px', md: '70px' }}>
            My Area of
            <br></br>
            <span style={{ color: 'teal', fontWeight: 'bold' }}>
              {' '}
              Training Focus
            </span>
          </Text>
        </Box>

        <Box>
          <Text
            fontSize={{ base: 'md', md: '17px', lg: '17px' }}
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
>>>>>>> c24bcc57584f1dfcf929f40026e0afd4163f8882
};

export default Home;
