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
import "./Home.css";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />

			{/* Welcome Section */}
			<div className="welcome-section">
				<div className="welcome-container">
					<div className="welcome-content">
						<p className="welcome-text">
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

						<p className="welcome-signature">
							Contact me directly for counselling, prayer,
							testimonies, suggestions and anything else
							<br></br>
							<br></br>
							contact@olusolaoladeni.org OR oladeni2008@yahoo.com
							<br></br>
							<br></br>
							Yours In The Lord's Service,
							<br></br>
							<br></br>
							Olusola Oladeni
						</p>
					</div>

					<div className="welcome-image">
						<Image
							as={motion.img}
							src={Dad}
							alt="Reverend Dr. Olusola Oladeni"
						/>
					</div>
				</div>
			</div>

			{/* Best Selling Book Section */}
			<div className="book-section">
				<div className="book-content">
					<div className="book-header">
					<h2 className="book-title">
						One of my best selling books
					</h2>
					<p className="book-subtitle">Best selling</p>
				</div>

				<div className="book-main">
						<div className="book-image-wrapper">
							<a
								href="/basic"
								className="book-image-link"
								title="Preview this book"
							>
								<div className="book-image-container">
									<Image src={Preparing} alt="Best selling" />
								</div>
							</a>
						</div>

						<div className="book-details">
							<p className="book-highlight">
								"Preparing for a Glorious Marriage" has
								transformed countless relationships, with
								readers sharing powerful testimonies.
							</p>

							<p className="book-testimony">
								<span className="quote-icon">"</span>
								The questions and answers in this book delivered
								me from my ignorance.
								<span className="quote-icon">"</span>
							</p>

							<p className="book-testimony">
								<span className="quote-icon">"</span>
								This book has really helped me in choosing my
								life partner.
								<span className="quote-icon">"</span>
							</p>

							<p className="book-list-title">
								This comprehensive premarital guide equips
								singles with the wisdom to:
							</p>

							<ul className="book-list">
								<li>Make wise relationship decisions</li>
								<li>Discern God's will for your future</li>
								<li>Live intentionally during courtship</li>
							</ul>

							<p className="book-features">
								Inside, you'll discover fifteen ways God speaks
								to you, how to nurture His will, types of
								disappointment to avoid, and much more.
							</p>

							<div className="book-cta">
								<a
									href="https://www.amazon.com/PREPARING-GLORIOUS-MARRIAGE-OLUSOLA-OLADENI-ebook/dp/B0BTFVF9JQ/ref=sr_1_4?crid=23GLWYN00CK3O&keywords=olusola+oladeni&qid=1697823004&sprefix=olusola+oladeni+%2Caps%2C265&sr=8-4"
									className="btn-buy"
									target="_blank"
									rel="noopener noreferrer"
								>
									Buy Now
								</a>
								<ChakraLink as={ReactRouterLink} to="/books">
									<button className="btn-outline">
										View All Books
									</button>
								</ChakraLink>
							</div>
						</div>
				</div>
			</div>
		</div>

			<CSSReset />
			<div className="carousel-section">
				<ImageCarousel />
			</div>

			{/* Featured Articles Section */}
			<div className="featured-articles-section">
				<h2 className="section-title">Featured Articles</h2>
				<p className="section-subtitle">
					Some of the most educative and most inspiring articles from
					the archives of Reverend Dr. Olusola Oladeni
				</p>

				<div className="articles-grid">
					{/* Article Card 1 - Courtship */}
					<div className="article-card">
						<div>
							<span className="article-category">Courtship</span>
							<p className="article-title-text">
								PATIENCE: A VIRTUE FOR SUSTAINING CHRISTIAN
								COURTSHIP
							</p>
						</div>
						<span className="article-date">Feb, 18 2025</span>
					</div>

					{/* Article Card 2 - Marriage */}
					<div className="article-card">
						<div>
							<span className="article-category">Marriage</span>
							<p className="article-title-text">
								THE PRESENCE THAT MAKES THE DIFFERENCE IN A
								CHRISTIAN MARRIAGE
							</p>
						</div>
						<span className="article-date">Feb, 18 2025</span>
					</div>

					{/* Article Card 3 - Purpose */}
					<div className="article-card">
						<div>
							<span className="article-category">Purpose</span>
							<p className="article-title-text">
								PURPOSES OF HIS DIVINE POWER
							</p>
						</div>
						<span className="article-date">Feb, 18 2025</span>
					</div>
				</div>

				<div className="articles-cta">
					<ChakraLink as={ReactRouterLink} to="/articles">
						<button className="btn-see-all">
							See all Articles
						</button>
					</ChakraLink>
				</div>
			</div>

			{/* Core Training Areas */}
			<div className="training-section">
				<h2 className="section-title">Core Training Areas</h2>

				<div className="training-grid">
					<div className="training-card">
						<p>Professional and personal purpose achievement</p>
					</div>
					<div className="training-card">
						<p>
							Improved personal relational skills, including work
							and life
						</p>
					</div>
					<div className="training-card">
						<p>Increased responsibility and persistence</p>
					</div>
					<div className="training-card">
						<p>
							Growth in marriage-building proficiency and
							capability
						</p>
					</div>
					<div className="training-card">
						<p>Better passion for counselling and encouragement</p>
					</div>
				</div>
			</div>

			<StyledContainer />

			{/* Transformation Section */}
			<div className="transformation-section">
				<div className="transformation-container">
					<div className="transformation-left">
						<div className="transformation-text-box">
							<h3 className="transformation-title">
								Transformation is not accidental. It is
								intentional.
							</h3>
						</div>
						<p className="transformation-subtitle">
							Take the next step in your spiritual journey today.
						</p>
						<button className="btn-book-session">
							Book a Session
						</button>
					</div>

					<div className="transformation-right">
						<div className="rectangle-box"></div>
						<div className="rectangle-box"></div>
					</div>
				</div>
			</div>

			<WhatsappChat />
			<Footer />
		</div>
	);
};

export default Home;
