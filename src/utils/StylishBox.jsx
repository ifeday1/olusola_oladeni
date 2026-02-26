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
import "./StyledContainer.css";
import Patience1 from "../assets/patience.webp";
import Presence1 from "../assets/presence.jpg";

const StyledContainer = () => {
	return (
		<>
			<Box className="styled-box">
				<Flex
					pt={{ base: "60px", md: "100px" }}
					direction={{ base: "column", md: "row" }}
					justify="space-around"
					align="center"
					wrap="wrap"
				>
					<Box
						className="featured-content"
						align={{ base: "center", md: "center" }}
					>
						<Text className="box-title">Featured Articles</Text>
						<Text className="box-subtitle">
							Some of the most educative and most
							<br></br> inspiring articles from the archives of
							<br></br>
							Reverend Dr. Olusola Oladeni
						</Text>
						<ChakraLink as={ReactRouterLink} to="/articles">
							<Button className="box-button">
								See all Articles
							</Button>
						</ChakraLink>
					</Box>

					<Spacer />

					<Box className="featured-article-card">
						<Flex gap={2} mt={4}>
							<Text className="article-tag">Courtship</Text>
							<Text className="article-tag">Marriage</Text>
							<Text className="article-tag">Purpose</Text>
						</Flex>
						<Link to="/patience">
							<Center>
								<Image
									className="article-image"
									src={Patience1}
									alt="image"
								/>
							</Center>
						</Link>

						<Text className="article-title">
							PATIENCE: A VIRTUE FOR SUSTAINING CHRISTIAN
							COURTSHIP
						</Text>
						<Text className="article-date">Feb, 18 2025</Text>
					</Box>

					{/* Article Card 2 */}
					<Box className="featured-article-card">
						<Flex gap={2} mt={4}>
							<Text className="article-tag">Courtship</Text>
							<Text className="article-tag">Marriage</Text>
							<Text className="article-tag">Purpose</Text>
						</Flex>
						<Link to="/presence">
							<Center>
								<Image
									className="article-image"
									src={Presence1}
									alt="image"
								/>
							</Center>
						</Link>

						<Text className="article-title">
							THE PRESENCE THAT MAKES THE DIFFERENCE IN A
							CHRISTIAN MARRIAGE
						</Text>
						<Text className="article-date">Feb, 18 2025</Text>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default StyledContainer;
