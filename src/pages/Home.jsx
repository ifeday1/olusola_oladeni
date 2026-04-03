import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";
import { Image } from "@chakra-ui/react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import Dad from "../assets/dad.svg";
import Preparing from "../assets/prep.jpg";
import Webp2 from "../assets/2.webp";
import Picturejpeg from "../assets/Picture.jpeg";

import ImageCarousel from "../utils/ImageCarousel";
import StyledContainer from "../utils/StylishBox";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Olusola Oladeni - Transform Lives Through Strategic Discipleship</title>
        <meta name="description" content="Discover Olusola Oladeni's ministry focused on holistic life transformation through strategic discipleship, Christian counseling, and kingdom-building resources." />
        <meta property="og:title" content="Olusola Oladeni - Transform Lives Through Strategic Discipleship" />
        <meta property="og:description" content="Influence and transform life holistically through strategic discipleship and equipment for a productive Christian life." />
        <meta property="og:image" content="https://olusolaoladeni.org/assets/hero.png" />
        <meta property="og:url" content="https://olusolaoladeni.org" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Olusola Oladeni - Transform Lives Through Strategic Discipleship" />
        <meta name="twitter:description" content="Influence and transform life holistically through strategic discipleship and equipment for a productive Christian life." />
        <meta name="twitter:image" content="https://olusolaoladeni.org/assets/hero.png" />
        <link rel="canonical" href="https://olusolaoladeni.org" />
      </Helmet>
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
								<span className="font-semibold">contact</span> <span className="font-semibold">oladeni2008@yahoo.com</span>
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
			<div className="py-20 px-4 bg-gradient-to-br from-white via-green-50/30 to-white">
				<div className="max-w-7xl mx-auto">
					{/* Full Width Title Section */}
					<div className="mb-16">
						<div className="flex items-center gap-4 mb-4">
							<div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 whitespace-nowrap">
								One of my best selling books
							</h2>
							<div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
						</div>
						<p className="text-green-600 font-semibold text-center text-lg tracking-wider uppercase">Best selling</p>
					</div>

					<div className="flex flex-col lg:flex-row items-center gap-16">
						{/* Enhanced Image Section with Zoom Effect */}
						<div className="flex-shrink-0 w-full lg:w-auto">
							<a
								href="/basic"
								className="block group"
								title="Preview this book"
							>
								<div className="relative overflow-hidden rounded-2xl shadow-2xl">
									<Image 
										src={Preparing} 
										alt="Best selling" 
										className="w-72 md:w-80 lg:w-96 transition-transform duration-500 ease-out group-hover:scale-110" 
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
									<div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
										<p className="text-lg font-semibold">Click to Preview</p>
										<p className="text-sm opacity-90">Discover the wisdom inside</p>
									</div>
								</div>
							</a>
						</div>

						{/* Enhanced Content Section */}
						<div className="flex-1">
							<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
									"Preparing for a Glorious Marriage" has
									transformed countless relationships, with
									readers sharing powerful testimonies.
								</p>

								<div className="space-y-6 mb-8">
									<div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
										<p className="text-gray-700 text-lg">
											<span className="text-3xl text-green-600 mr-2">&ldquo;</span>
											The questions and answers in this book delivered
											me from my ignorance.
											<span className="text-3xl text-green-600 ml-2">&rdquo;</span>
										</p>
									</div>

									<div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
										<p className="text-gray-700 text-lg">
											<span className="text-3xl text-purple-600 mr-2">&ldquo;</span>
											This book has really helped me in choosing my
											life partner.
											<span className="text-3xl text-purple-600 ml-2">&rdquo;</span>
										</p>
									</div>
								</div>

								<div className="mb-8">
									<p className="font-semibold text-gray-800 text-lg mb-4">
										This comprehensive premarital guide equips
										singles with the wisdom to:
									</p>

									<ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<li className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
											<span className="w-2 h-2 bg-green-500 rounded-full"></span>
											<span className="text-gray-700">Make wise relationship decisions</span>
										</li>
										<li className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
											<span className="w-2 h-2 bg-green-500 rounded-full"></span>
											<span className="text-gray-700">Discern God's will for your future</span>
										</li>
										<li className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
											<span className="w-2 h-2 bg-green-500 rounded-full"></span>
											<span className="text-gray-700">Live intentionally during courtship</span>
										</li>
									</ul>
								</div>

								<p className="text-gray-600 mb-8 text-lg leading-relaxed">
									Inside, you'll discover fifteen ways God speaks
									to you, how to nurture His will, types of
									disappointment to avoid, and much more.
								</p>

								<div className="flex flex-wrap gap-4">
									<a
										href="https://www.amazon.com/PREPARING-GLORIOUS-MARRIAGE-OLUSOLA-OLADENI-ebook/dp/B0BTFVF9JQ/ref=sr_1_4?crid=23GLWYN00CK3O&keywords=olusola+oladeni&qid=1697823004&sprefix=olusola+oladeni+%2Caps%2C265&sr=8-4"
										className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
										target="_blank"
										rel="noopener noreferrer"
									>
										Buy Now
									</a>
									<ChakraLink as={ReactRouterLink} to="/books">
										<button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
											View All Books
										</button>
									</ChakraLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full">
				<ImageCarousel />
				
			</div>
					

			{/* Core Training Areas */}
			<div className="py-24 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							My Area of
							<span className="text-green-600"> Training Focus</span>
						</h2>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Equipping individuals and couples with biblical wisdom for thriving relationships and purposeful living.
						</p>
					</div>

					{/* Training Focus Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Card 1 - Purpose */}
						<motion.div
							className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className="h-48 overflow-hidden">
								<img 
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" 
									alt="Purpose Achievement" 
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
									<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">Purpose Achievement</h3>
								<p className="text-gray-600 leading-relaxed">Professional and personal purpose achievement through biblical principles and intentional living.</p>
							</div>
						</motion.div>

						{/* Card 2 - Relationships */}
						<motion.div
							className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<div className="h-48 overflow-hidden">
								<img 
									src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop" 
									alt="Relational Skills" 
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
									<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">Relational Skills</h3>
								<p className="text-gray-600 leading-relaxed">Improved personal relational skills for work, life, and meaningful connections.</p>
							</div>
						</motion.div>

						{/* Card 3 - Responsibility */}
						<motion.div
							className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<div className="h-48 overflow-hidden">
								<img 
									src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
									alt="Leadership & Responsibility" 
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
									<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">Leadership & Responsibility</h3>
								<p className="text-gray-600 leading-relaxed">Increased responsibility, persistence, and leadership development for Kingdom impact.</p>
							</div>
						</motion.div>

						{/* Card 4 - Marriage */}
						<motion.div
							className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<div className="h-48 overflow-hidden">
								<img 
									src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop" 
									alt="Marriage Building" 
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
									<svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">Marriage Building</h3>
								<p className="text-gray-600 leading-relaxed">Growth in marriage-building proficiency and capability for lasting relationships.</p>
							</div>
						</motion.div>

						{/* Card 5 - Counselling */}
						<motion.div
							className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<div className="h-48 overflow-hidden">
								<img 
									src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop" 
									alt="Counselling & Encouragement" 
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
									<svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">Counselling & Support</h3>
								<p className="text-gray-600 leading-relaxed">Better passion for counselling and encouragement to help others thrive.</p>
							</div>
						</motion.div>

						{/* Card 6 - Singles */}
						<motion.div
							className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<div className="h-48 overflow-hidden">
								<img 
									src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop" 
									alt="Singles Ministry" 
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
									<svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">Singles Ministry</h3>
								<p className="text-gray-600 leading-relaxed">Equipping singles with wisdom for intentional living and godly relationships.</p>
							</div>
						</motion.div>
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
							<button>
								<Link
										  to="/contact"
										  className="inline-block bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
								Book a Session
								</Link>
							</button>

						</div>

						<div className="flex gap-4">
							<motion.div
								className="w-32 h-32 rounded-lg overflow-hidden"
								initial={{ opacity: 0, y: 20, rotate: 0 }}
								animate={{ 
									opacity: 1, 
									y: [0, -15, 0, 10, 0],
									rotate: [0, 5, -5, 3, 0]
								}}
								transition={{ 
									duration: 4, 
									repeat: Infinity, 
									ease: "easeInOut" 
								}}
							>
								<img 
									src={Webp2} 
									alt="Transformation" 
									className="w-full h-full object-cover"
								/>
							</motion.div>
							<motion.div
								className="w-32 h-32 rounded-lg overflow-hidden mt-8"
								initial={{ opacity: 0, y: 20, rotate: 0 }}
								animate={{ 
									opacity: 1, 
									y: [0, 10, 0, -15, 0],
									rotate: [0, -3, 5, -4, 0]
								}}
								transition={{ 
									duration: 5, 
									repeat: Infinity, 
									ease: "easeInOut",
									delay: 0.5
								}}
							>
								<img 
									src={Picturejpeg} 
									alt="Growth" 
									className="w-full h-full object-cover"
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			<WhatsappChat />
			<Footer />
		</>
	);
};

export default Home;
