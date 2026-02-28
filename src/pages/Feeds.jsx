<<<<<<< HEAD
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
	Icon,
	HStack,
	Text
} from "@chakra-ui/react";
import { 
	FaFacebookF, 
	FaInstagram, 
	FaYoutube, 
	FaTwitter, 
	FaUsers, 
	FaHeart, 
	FaShareAlt,
	FaCheckCircle,
	FaPaperPlane
} from "react-icons/fa";

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

			{/* Platform Cards Section */}
			<section className="py-16 px-4 bg-gray-50 mt-10">
				<Container maxW="1400px">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest From Our Platforms</h2>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Stay updated with our most recent content across all social channels
						</p>
					</div>

					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
						{socialPlatforms.map((platform) => (
							<Box key={platform.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
								<div 
									className="p-4 flex justify-between items-center text-white"
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
										className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
									>
										Follow
									</a>
								</div>
								
								<div className="p-4 border-b">
									<div className="flex gap-6 text-gray-600">
										<div className="flex items-center gap-2">
											<Icon as={FaUsers} />
											<span>{platform.followers} Followers</span>
										</div>
										<div className="flex items-center gap-2">
											<Icon as={FaHeart} />
											<span>{platform.engagement} Engagement</span>
										</div>
									</div>
								</div>

								<p className="p-4 text-gray-600">{platform.description}</p>

								<div className="p-4">
									{platform.embedUrl ? (
										platform.id === "facebook" ? (
											<FacebookEmbed url={platform.embedUrl} width="100%" />
										) : platform.id === "instagram" ? (
											<InstagramEmbed url={platform.embedUrl} width="100%" />
										) : platform.id === "youtube" ? (
											<YouTubeEmbed url={platform.embedUrl} width="100%" />
										) : null
									) : (
										<Box className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
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

								<div className="p-4 bg-gray-50 border-t">
									<a 
										href={platform.link} 
										target="_blank" 
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-semibold"
									>
										<Icon as={FaShareAlt} />
										View More Posts
									</a>
								</div>
							</Box>
						))}
					</SimpleGrid>
				</Container>
			</section>

			{/* CTA Section - Follow All Platforms */}
			<section className="py-16 px-4 bg-gradient-to-r from-green-800 to-purple-800">
				<Container maxW="1200px">
					<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
						<div className="mb-6">
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Never Miss an Update!</h3>
							<p className="text-white/80">
								Follow us on all platforms to stay informed about new content, 
								events, and inspirational posts.
							</p>
						</div>
						<div className="flex flex-wrap justify-center gap-4">
							<a 
								href="https://web.facebook.com/olusolaoladeniministries" 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
							>
								<Icon as={FaFacebookF} />
								Facebook
							</a>
							<a 
								href="https://instagram.com/olusola_oladeni" 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
							>
								<Icon as={FaInstagram} />
								Instagram
							</a>
							<a 
								href="https://youtube.com/@olusolaoladeni" 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
							>
								<Icon as={FaYoutube} />
								YouTube
							</a>
							<a 
								href="https://twitter.com/olusola_oladeni" 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg transition-colors"
							>
								<Icon as={FaTwitter} />
								Twitter
							</a>
						</div>
					</div>
				</Container>
			</section>

			{/* Newsletter Section */}
			<section className="py-16 px-4 bg-gray-50">
				<Container maxW="800px">
					<div className="bg-white rounded-xl shadow-lg p-8">
						{!subscribed ? (
							<>
								<div className="text-center mb-6">
									<Icon as={FaPaperPlane} className="text-4xl text-green-600 mb-4 mx-auto" />
									<h3 className="text-2xl font-bold text-gray-800 mb-2">Get Updates in Your Inbox</h3>
									<p className="text-gray-600">
										Subscribe to our newsletter for weekly summaries of new content 
										and exclusive insights.
									</p>
								</div>
								<form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubscribe}>
									<input
										type="email"
										placeholder="Enter your email address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
										required
									/>
									<button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
										Subscribe
									</button>
								</form>
							</>
						) : (
							<div className="text-center py-8">
								<Icon as={FaCheckCircle} className="text-5xl text-green-500 mb-4 mx-auto" />
								<h3 className="text-2xl font-bold text-gray-800 mb-2">You're Subscribed!</h3>
								<p className="text-gray-600">Thank you for subscribing. Check your inbox for a confirmation email.</p>
							</div>
						)}
					</div>
				</Container>
			</section>

			<WhatsappChat />
			<Footer />
		</div>
	);
=======
import React from 'react';
import Navbar from '../components/Navbar';
import WhatsappChat from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import { FacebookEmbed } from 'react-social-media-embed';
import { Text } from '@chakra-ui/react';

const Feeds = () => {
  return (
    <div>
      <Navbar />
      <Text
        mt='90px'
        mb='40px'
        py='20px'
        textAlign={'center'}
        fontSize={'4xl'}
        fontWeight={'extrabold'}
        color={'white'}
        backgroundColor='green'
      >
        FEEDS
      </Text>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FacebookEmbed
          url='https://web.facebook.com/photo?fbid=24158174703826259&set=a.559018640835197'
          width={550}
        />
      </div>
      <WhatsappChat />
      <Footer />
    </div>
  );
>>>>>>> c24bcc57584f1dfcf929f40026e0afd4163f8882
};

export default Feeds;
