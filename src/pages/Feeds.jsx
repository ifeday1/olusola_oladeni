import React, { useState } from "react";
import Navbar from "../components/Navbar";
import WhatsappChat from "../components/Whatsapp/Index";
import Footer from "../components/Footer/Footer";
import {
	FacebookEmbed,
	InstagramEmbed,
	YouTubeEmbed,
} from "react-social-media-embed";
import { 
	Container, 
	SimpleGrid, 
	Box, 
	Button, 
	Input,
	Icon,
	HStack,
	VStack,
	Badge,
	Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { 
	FaFacebookF, 
	FaInstagram, 
	FaYoutube, 
	FaTwitter, 
	FaBell, 
	FaUsers, 
	FaHeart, 
	FaShareAlt,
	FaCheckCircle,
	FaPaperPlane
} from "react-icons/fa";
import "./Feeds.css";

// Social media data with stats
const socialPlatforms = [
	{
		id: "facebook",
		name: "Facebook",
		icon: FaFacebookF,
		color: "#1877F2",
		followers: "15.2K",
		engagement: "High",
		description: "Get inspirational posts, event updates, and community highlights",
		link: "https://web.facebook.com/olusolaoladeniministries",
		embedUrl: "https://web.facebook.com/photo?fbid=24158174703826259&set=a.559018640835197"
	},
	{
		id: "instagram",
		name: "Instagram",
		icon: FaInstagram,
		color: "#E4405F",
		followers: "8.5K",
		engagement: "Very High",
		description: "Visual content, behind-the-scenes, and daily inspiration",
		link: "https://instagram.com/olusola_oladeni",
		embedUrl: "https://www.instagram.com/p/Cq1xkNpM_6-/"
	},
	{
		id: "youtube",
		name: "YouTube",
		icon: FaYoutube,
		color: "#FF0000",
		followers: "22K",
		engagement: "Growing",
		description: "Sermons, teachings, and video series",
		link: "https://youtube.com/@olusolaoladeni",
		embedUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
	},
	{
		id: "twitter",
		name: "Twitter / X",
		icon: FaTwitter,
		color: "#1DA1F2",
		followers: "5.8K",
		engagement: "Active",
		description: "Quick updates, thoughts, and engagement",
		link: "https://twitter.com/olusola_oladeni",
		embedUrl: null
	}
];

const Feeds = () => {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const handleSubscribe = (e) => {
		e.preventDefault();
		if (email) {
			setSubscribed(true);
			setEmail("");
		}
	};

	return (
		<div>
			<Navbar />

			{/* Hero Section */}
			

			{/* Platform Cards Section */}
			<section className="platforms-section">
				<Container maxW="1400px">
					<div className="section-header">
						<h2 className="section-title">Latest From Our Platforms</h2>
						<p className="section-subtitle">
							Stay updated with our most recent content across all social channels
						</p>
					</div>

					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
						{socialPlatforms.map((platform) => (
							<Box key={platform.id} className="platform-card">
								<div 
									className="platform-header" 
									style={{ background: `linear-gradient(135deg, ${platform.color} 0%, ${platform.color}99 100%)` }}
								>
									<HStack spacing={3}>
										<Icon as={platform.icon} boxSize={6} color="white" />
										<Text fontSize="xl" fontWeight="bold" color="white">
											{platform.name}
										</Text>
									</HStack>
									<a 
										href={platform.link} 
										target="_blank" 
										rel="noopener noreferrer"
										className="platform-follow-btn"
									>
										Follow
									</a>
								</div>
								
								<div className="platform-stats">
									<div className="platform-stat">
										<Icon as={FaUsers} />
										<span>{platform.followers} Followers</span>
									</div>
									<div className="platform-stat">
										<Icon as={FaHeart} />
										<span>{platform.engagement} Engagement</span>
									</div>
								</div>

								<p className="platform-description">{platform.description}</p>

								<div className="platform-embed">
									{platform.embedUrl ? (
										platform.id === "facebook" ? (
											<FacebookEmbed url={platform.embedUrl} width="100%" />
										) : platform.id === "instagram" ? (
											<InstagramEmbed url={platform.embedUrl} width="100%" />
										) : platform.id === "youtube" ? (
											<YouTubeEmbed url={platform.embedUrl} width="100%" />
										) : null
									) : (
										<Box className="placeholder-embed">
											<Icon as={platform.icon} boxSize={12} color={platform.color} />
											<Text mt={4} color="gray.500">Latest post from Twitter</Text>
											<Button 
												as="a" 
												href={platform.link} 
												target="_blank"
												mt={4}
												colorScheme="twitter"
											>
												View on Twitter
											</Button>
										</Box>
									)}
								</div>

								<div className="platform-footer">
									<a 
										href={platform.link} 
										target="_blank" 
										rel="noopener noreferrer"
										className="platform-link-btn"
									>
										<Icon as={FaShareAlt} mr={2} />
										View More Posts
									</a>
								</div>
							</Box>
						))}
					</SimpleGrid>
				</Container>
			</section>

			{/* CTA Section - Follow All Platforms */}
			<section className="cta-section">
				<Container maxW="1200px">
					<div className="cta-card">
						<div className="cta-content">
							<h3 className="cta-title">Never Miss an Update!</h3>
							<p className="cta-subtitle">
								Follow us on all platforms to stay informed about new content, 
								events, and inspirational posts.
							</p>
						</div>
						<div className="cta-buttons">
							<a 
								href="https://web.facebook.com/olusolaoladeniministries" 
								target="_blank" 
								rel="noopener noreferrer"
								className="cta-social-btn facebook"
							>
								<Icon as={FaFacebookF} mr={2} />
								Facebook
							</a>
							<a 
								href="https://instagram.com/olusola_oladeni" 
								target="_blank" 
								rel="noopener noreferrer"
								className="cta-social-btn instagram"
							>
								<Icon as={FaInstagram} mr={2} />
								Instagram
							</a>
							<a 
								href="https://youtube.com/@olusolaoladeni" 
								target="_blank" 
								rel="noopener noreferrer"
								className="cta-social-btn youtube"
							>
								<Icon as={FaYoutube} mr={2} />
								YouTube
							</a>
							<a 
								href="https://twitter.com/olusola_oladeni" 
								target="_blank" 
								rel="noopener noreferrer"
								className="cta-social-btn twitter"
							>
								<Icon as={FaTwitter} mr={2} />
								Twitter
							</a>
						</div>
					</div>
				</Container>
			</section>

			{/* Newsletter Section */}
			<section className="feeds-newsletter-section">
				<Container maxW="800px">
					<div className="newsletter-card-feeds">
						{!subscribed ? (
							<>
								<div className="newsletter-content-feeds">
									<Icon as={FaPaperPlane} className="newsletter-icon" />
									<h3 className="newsletter-title-feeds">Get Updates in Your Inbox</h3>
									<p className="newsletter-subtitle-feeds">
										Subscribe to our newsletter for weekly summaries of new content 
										and exclusive insights.
									</p>
								</div>
								<form className="newsletter-form-feeds" onSubmit={handleSubscribe}>
									<Input
										type="email"
										placeholder="Enter your email address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="newsletter-input-feeds"
										required
									/>
									<Button type="submit" className="newsletter-btn-feeds">
										Subscribe
									</Button>
								</form>
							</>
						) : (
							<div className="success-message">
								<Icon as={FaCheckCircle} className="success-icon" />
								<h3>You're Subscribed!</h3>
								<p>Thank you for subscribing. Check your inbox for a confirmation email.</p>
							</div>
						)}
					</div>
				</Container>
			</section>

			<WhatsappChat />
			<Footer />
		</div>
	);
};

export default Feeds;
