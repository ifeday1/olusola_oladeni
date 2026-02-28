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
import { Link as ChakraLink } from "@chakra-ui/react";
import Patience1 from "../assets/patience.webp";
import Presence1 from "../assets/presence.jpg";

const StyledContainer = () => {
	return (
		<>
			<Box className="bg-gradient-to-r from-green-50 to-purple-50 py-16 px-4">
				<Flex
					pt={{ base: "60px", md: "100px" }}
					direction={{ base: "column", md: "row" }}
					justify="space-around"
					align="center"
					wrap="wrap"
					maxW="7xl"
					mx="auto"
					gap={8}
				>
					<Box
						className="text-center md:text-left"
						align={{ base: "center", md: "center" }}
					>
						<Text className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Articles</Text>
						<Text className="text-gray-600 text-lg mb-6">
							Some of the most educative and most<br></br> inspiring articles from the archives of<br></br>
							Reverend Dr. Olusola Oladeni
						</Text>
						<ChakraLink as={ReactRouterLink} to="/articles">
							<Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
								See all Articles
							</Button>
						</ChakraLink>
					</Box>

					<Spacer />

					<Box className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full">
						
						<Link to="/patience">
							<Center>
								<Image
									className="h-48 w-full object-cover"
									src={Patience1}
									alt="image"
								/>
							</Center>
						</Link>

						<Text className="text-gray-800 font-semibold px-4 py-2">
							PATIENCE: A VIRTUE FOR SUSTAINING CHRISTIAN
							COURTSHIP
						</Text>
						<Text className="text-gray-500 text-sm px-4 pb-4">Feb, 18 2025</Text>
						<Flex gap={2} mt={4} px={4} mb={4}>
							<Text className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Courtship</Text>
							<Text className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Marriage</Text>
							<Text className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Purpose</Text>
						</Flex>
					</Box>

					{/* Article Card 2 */}
					<Box className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full">
						
						<Link to="/presence">
							<Center>
								<Image
									className="h-48 w-full object-cover"
									src={Presence1}
									alt="image"
								/>
							</Center>
						</Link>

						<Text className="text-gray-800 font-semibold px-4 py-2">
							THE PRESENCE THAT MAKES THE DIFFERENCE IN A
							CHRISTIAN MARRIAGE
						</Text>
						<Text className="text-gray-500 text-sm px-4 pb-4">Feb, 18 2025</Text>
						<Flex gap={2} mt={4} px={4} mb={4}>
							<Text className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Courtship</Text>
							<Text className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Marriage</Text>
							<Text className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Purpose</Text>
						</Flex>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default StyledContainer;
