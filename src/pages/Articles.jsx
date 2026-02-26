import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import WhatsappChat from "../components/Whatsapp/Index";
import Footer from "../components/Footer/Footer";
import {
	Box,
	Text,
	Image,
	Button,
	SimpleGrid,
	Container,
	Input,
	InputGroup,
	InputLeftElement,
	HStack,
	VStack,
	Badge,
	Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
	FaBookOpen,
	FaHeart,
	FaUsers,
	FaStar,
	FaLightbulb,
	FaHome,
	FaShieldAlt,
	FaSearch,
} from "react-icons/fa";
import CardDataArticles from "../utils/CardDataArticles";
import "./Articles.css";

const Articles = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");

	// Extract categories from article data
	const categories = [
		"All",
		"Marriage",
		"Singles",
		"Leadership",
		"Relationships",
	];

	// Get category for each article based on description/content
	const getCategory = (item) => {
		const desc = item.description.toLowerCase();
		if (
			desc.includes("marriage") ||
			desc.includes("home") ||
			desc.includes("couple")
		)
			return "Marriage";
		if (desc.includes("single") || desc.includes("courtship"))
			return "Singles";
		if (desc.includes("leader") || desc.includes("leadership"))
			return "Leadership";
		if (desc.includes("covenant") || desc.includes("relationship"))
			return "Relationships";
		return "Relationships";
	};

	// Filter articles based on search and category
	const filteredArticles = useMemo(() => {
		return CardDataArticles.filter((item) => {
			const matchesSearch =
				item.description
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				item.price.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesCategory =
				activeCategory === "All" ||
				getCategory(item) === activeCategory;
			return matchesSearch && matchesCategory;
		});
	}, [searchQuery, activeCategory]);

	// Featured article (first one)
	const featuredArticle = CardDataArticles[0];

	return (
		<>
			<Navbar />

			{/* Hero Section */}
			<section className="articles-hero">
				<div className="articles-hero-overlay"></div>
				<div className="articles-hero-content">
		
					<h1 className="articles-hero-title">
						Insightful <span>Articles</span>
					</h1>
					<p className="articles-hero-subtitle">
						Explore our collection of inspiring and transformative
						articles designed to strengthen your faith,
						relationships, and purpose.
					</p>
				</div>
				<div className="articles-hero-shapes">
					<div className="hero-shape shape-1"></div>
					<div className="hero-shape shape-2"></div>
					<div className="hero-shape shape-3"></div>
				</div>
			</section>

			{/* Search and Filter Section */}
			<section className="articles-filter-section">
				<Container maxW="1400px">
					<div className="filter-container">
						<div className="search-wrapper">
							<InputGroup size="lg">
								<InputLeftElement pointerEvents="none">
									<Icon as={FaSearch} color="gray.400" />
								</InputLeftElement>
								<Input
									placeholder="Search articles..."
									value={searchQuery}
									onChange={(e) =>
										setSearchQuery(e.target.value)
									}
									className="search-input"
								/>
							</InputGroup>
						</div>

						<HStack
							spacing={2}
							className="category-tabs"
							wrap="wrap"
						>
							{categories.map((category) => (
								<button
									key={category}
									className={`category-tab ${activeCategory === category ? "active" : ""}`}
									onClick={() => setActiveCategory(category)}
								>
									{category === "All" && (
										<Icon as={FaStar} mr={2} />
									)}
									{category === "Marriage" && (
										<Icon as={FaHome} mr={2} />
									)}
									{category === "Singles" && (
										<Icon as={FaHeart} mr={2} />
									)}
									{category === "Leadership" && (
										<Icon as={FaLightbulb} mr={2} />
									)}
									{category === "Relationships" && (
										<Icon as={FaUsers} mr={2} />
									)}
									{category}
								</button>
							))}
						</HStack>
					</div>
				</Container>
			</section>

			{/* Featured Article */}
			{activeCategory === "All" && !searchQuery && (
				<section className="featured-section">
					<Container maxW="1400px">
						<div className="featured-label">
							<Icon as={FaStar} mr={2} /> Featured Article
						</div>
						<Link
							to={featuredArticle.link}
							className="featured-card-link"
						>
							<div className="featured-card">
								<div className="featured-image-wrapper">
									<Image
										src={featuredArticle.image}
										alt={featuredArticle.description}
										className="featured-image"
									/>
									<div className="featured-image-overlay"></div>
								</div>
								<div className="featured-content">
									<Badge className="featured-category-badge">
										{getCategory(featuredArticle)}
									</Badge>
									<h2 className="featured-title">
										{featuredArticle.description}
									</h2>
									<p className="featured-excerpt">
										{featuredArticle.price.substring(
											0,
											200,
										)}
										...
									</p>
									<Button className="featured-read-more">
										Read Article
										<span className="arrow">→</span>
									</Button>
								</div>
							</div>
						</Link>
					</Container>
				</section>
			)}

			{/* Articles Grid */}
			<section className="articles-grid-section">
				<Container maxW="1400px">
					<div className="articles-header">
						<h2 className="articles-grid-title">
							{activeCategory === "All"
								? "Latest Articles"
								: `${activeCategory} Articles`}
						</h2>
						<Text className="articles-count">
							{filteredArticles.length}{" "}
							{filteredArticles.length === 1
								? "article"
								: "articles"}{" "}
							found
						</Text>
					</div>

					{filteredArticles.length > 0 ? (
						<SimpleGrid
							columns={{ base: 1, md: 2, lg: 3 }}
							spacing={8}
							className="articles-grid"
						>
							{filteredArticles.map((item, index) => (
								<Link
									to={item.link}
									key={item.id}
									className="article-card-link"
								>
									<article
										className="article-card"
										style={{
											animationDelay: `${index * 0.1}s`,
										}}
									>
										<div className="article-card-image-wrapper">
											<Image
												src={item.image}
												alt={item.description}
												className="article-card-image"
											/>
											<div className="article-card-overlay">
												<span className="read-more-icon">
													→
												</span>
											</div>
											<Badge className="article-card-category">
												{getCategory(item)}
											</Badge>
										</div>
										<div className="article-card-content">
											<h3 className="article-card-title">
												{item.description}
											</h3>
											<p className="article-card-excerpt">
												{item.price.substring(0, 120)}
												...
											</p>
											<div className="article-card-footer">
												<Button
													size="sm"
													className="article-card-btn"
												>
													Read More
												</Button>
											</div>
										</div>
									</article>
								</Link>
							))}
						</SimpleGrid>
					) : (
						<div className="no-results">
							<Icon
								as={FaShieldAlt}
								className="no-results-icon"
							/>
							<h3>No articles found</h3>
							<p>
								Try adjusting your search or filter to find what
								you're looking for.
							</p>
							<Button
								onClick={() => {
									setSearchQuery("");
									setActiveCategory("All");
								}}
								className="reset-btn"
							>
								Reset Filters
							</Button>
						</div>
					)}
				</Container>
			</section>

			{/* Newsletter Section */}
			<section className="newsletter-section">
				<Container maxW="800px">
					<div className="newsletter-card">
						<div className="newsletter-content">
							<h3 className="newsletter-title">Stay Updated</h3>
							<p className="newsletter-subtitle">
								Subscribe to get notified when new articles are
								published.
							</p>
						</div>
						<div className="newsletter-form">
							<Input
								placeholder="Enter your email"
								className="newsletter-input"
							/>
							<Button className="newsletter-btn">
								Subscribe
							</Button>
						</div>
					</div>
				</Container>
			</section>

			<WhatsappChat />
			<Footer />
		</>
	);
};

export default Articles;
