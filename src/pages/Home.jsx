import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";
import { Image } from "@chakra-ui/react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import Dad from "../assets/dad.svg";
import Preparing from "../assets/prep.jpg";

import ImageGallery from "../utils/ImageGallery";
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

			<div className="w-full">
				<ImageGallery />
			</div>
					

			{/* Core Training Areas */}
			<div className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-green-50">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row items-start md:items-center gap-12">
						{/* Title on the left */}
						<div className="flex-shrink-0">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
								My Area of
								<br />
								<span className="text-green-600">Training Focus</span>
							</h2>
						</div>

						{/* List on the right */}
						<div className="flex-1 space-y-4">
							<motion.div
								className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-purple-500 flex items-center justify-center flex-shrink-0">
									<span className="text-white text-sm">♦</span>
								</div>
								<p className="text-gray-700 font-medium">Professional and personal purpose achievement</p>
							</motion.div>
							<motion.div
								className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-purple-500 flex items-center justify-center flex-shrink-0">
									<span className="text-white text-sm">♦</span>
								</div>
								<p className="text-gray-700 font-medium">Improved personal relational skills, including work and life</p>
							</motion.div>
							<motion.div
								className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-purple-500 flex items-center justify-center flex-shrink-0">
									<span className="text-white text-sm">♦</span>
								</div>
								<p className="text-gray-700 font-medium">Increased responsibility and persistence</p>
							</motion.div>
							<motion.div
								className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-purple-500 flex items-center justify-center flex-shrink-0">
									<span className="text-white text-sm">♦</span>
								</div>
								<p className="text-gray-700 font-medium">Growth in marriage-building proficiency and capability</p>
							</motion.div>
							<motion.div
								className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-purple-500 flex items-center justify-center flex-shrink-0">
									<span className="text-white text-sm">♦</span>
								</div>
								<p className="text-gray-700 font-medium">Better passion for counselling and encouragement</p>
							</motion.div>
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
								className="w-32 h-32 bg-white/20 rounded-lg"
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
							/>
							<motion.div
								className="w-32 h-32 bg-white/10 rounded-lg mt-8"
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
							/>
						</div>
					</div>
				</div>
			</div>

			<WhatsappChat />
			<Footer />
		</div>
	);
};

export default Home;
