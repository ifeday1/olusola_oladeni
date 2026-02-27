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
	Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
	FaBookOpen,
	FaHeart,
	FaUsers,
	FaStar,
	FaLightbulb,
	FaHome,
	FaSearch,
	FaClock,
	FaEye,
	FaCalendarAlt,
	FaArrowRight,
	FaSortAmountDown,
	FaThLarge,
	FaFire,
	FaCheckCircle,
} from "react-icons/fa";
import CardDataArticles from "../utils/CardDataArticles";
import "./Articles.css";

const Articles = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");
	const [sortBy, setSortBy] = useState("recent");

	// Extract categories from article data
	const categories = [
		{ name: "All", icon: FaStar, color: "#f59e0b" },
		{ name: "Marriage", icon: FaHome, color: "#ec4899" },
		{ name: "Singles", icon: FaHeart, color: "#8b5cf6" },
		{ name: "Leadership", icon: FaLightbulb, color: "#3b82f6" },
		{ name: "Relationships", icon: FaUsers, color: "#10b981" },
	];

	// Sort articles based on selection
	const sortedArticles = useMemo(() => {
		const articles = [...CardDataArticles];
		switch (sortBy) {
			case "popular":
				return articles.sort((a, b) => b.views - a.views);
			case "oldest":
				return articles.sort((a, b) => new Date(a.date) - new Date(b.date));
			case "recent":
			default:
				return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
		}
	}, [sortBy]);

	// Filter articles based on search and category
	const filteredArticles = useMemo(() => {
		return sortedArticles.filter((item) => {
			const matchesSearch =
				item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesCategory =
				activeCategory === "All" || item.category === activeCategory;
			return matchesSearch && matchesCategory;
		});
	}, [sortedArticles, searchQuery, activeCategory]);

	// Featured articles (marked as featured or most viewed)
	const featuredArticles = CardDataArticles.filter(item => item.featured).slice(0, 2);
	
	// Get category info helper
	const getCategoryInfo = (categoryName) => {
		return categories.find(c => c.name === categoryName) || categories[0];
	};

	// Format date helper
	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString('en-US', options);
	};

	return (
		<>
			<Navbar />

			{/* Hero Section */}
			<section className="articles-hero">
				<div className="articles-hero-overlay"></div>
				<div className="articles-hero-content">
					<div className="articles-hero-badge">
						<Icon as={FaBookOpen} mr={2} />
						<span>Inspiring Articles</span>
					</div>
					<h1 className="articles-hero-title">
						Insightful <span>Articles</span>
					</h1>
					<p className="articles-hero-subtitle">
						Explore our collection of inspiring and transformative articles 
						designed to strengthen your faith, relationships, and purpose.
					</p>
					<div className="articles-hero-stats">
						<div className="hero-stat">
							<Icon as={FaBookOpen} />
							<span>{CardDataArticles.length} Articles</span>
						</div>
						<div className="hero-stat">
							<Icon as={FaEye} />
							<span>{CardDataArticles.reduce((acc, a) => acc + a.views, 0).toLocaleString()}+ Views</span>
						</div>
					</div>
				</div>
				<div className="articles-hero-shapes">
					<div className="hero-shape shape-1"></div>
					<div className="hero-shape shape-2"></div>
					<div className="hero-shape shape-3"></div>
				</div>
				<div className="scroll-indicator">
					<span>Scroll to explore</span>
					<div className="scroll-arrow">↓</div>
				</div>
			</section>

			{/* Search and Filter Section */}
			<section className="articles-filter-section">
				<Container maxW="1400px">
					<div className="filter-container">
						<div className="search-filter-row">
							<div className="search-wrapper">
								<InputGroup size="lg">
									<InputLeftElement pointerEvents="none">
										<Icon as={FaSearch} color="gray.400" />
									</InputLeftElement>
									<Input
										placeholder="Search articles by title or topic..."
										value={searchQuery}
										onChange={(e) =>
											setSearchQuery(e.target.value)
										}
										className="search-input"
									/>
								</InputGroup>
							</div>

							<div className="sort-wrapper">
								<Icon as={FaSortAmountDown} className="sort-icon" />
								<select 
									className="sort-select"
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
								>
									<option value="recent">Most Recent</option>
									<option value="popular">Most Popular</option>
									<option value="oldest">Oldest First</option>
								</select>
							</div>
						</div>

						<HStack
							spacing={3}
							className="category-tabs"
							wrap="wrap"
							justify="center"
						>
							{categories.map((category) => (
								<button
									key={category.name}
									className={`category-tab ${activeCategory === category.name ? "active" : ""}`}
									onClick={() => setActiveCategory(category.name)}
									style={{ 
										"--category-color": category.color 
									}}
								>
									<Icon as={category.icon} mr={2} />
									{category.name}
									{activeCategory === category.name && (
										<span className="category-count">
											{CardDataArticles.filter(a => a.category === category.name).length}
										</span>
									)}
								</button>
							))}
						</HStack>
					</div>
				</Container>
			</section>

			{/* Featured Articles Section - Horizontal Layout */}
			{activeCategory === "All" && !searchQuery && (
				<section className="featured-articles-section">
					<Container maxW="1400px">
						<div className="section-header">
							<div className="section-header-left">
								<Icon as={FaFire} className="section-icon" />
								<h2 className="section-title">Featured Articles</h2>
							</div>
							<p className="section-subtitle">
								Handpicked articles that will transform your perspective
							</p>
						</div>
						
						<div className="featured-articles-horizontal">
							{featuredArticles.map((article, index) => {
								const catInfo = getCategoryInfo(article.category);
								return (
									<Link
										to={article.link}
										key={article.id}
										className="featured-article-horizontal"
									>
										<div className="featured-article-horizontal-image">
											<Image
												src={article.image}
												alt={article.title}
												objectFit="cover"
											/>
										</div>
										<div className="featured-article-horizontal-content">
											<Badge 
												className="featured-badge"
												style={{ backgroundColor: catInfo.color }}
											>
												<Icon as={catInfo.icon} mr={1} />
												{article.category}
											</Badge>
											<h3 className="featured-article-horizontal-title">
												{article.title}
											</h3>
											<p className="featured-article-horizontal-excerpt">
												{article.excerpt.substring(0, 180)}...
											</p>
											<div className="featured-article-horizontal-meta">
												<span className="meta-item">
													<Icon as={FaCalendarAlt} />
													{formatDate(article.date)}
												</span>
												<span className="meta-item">
													<Icon as={FaClock} />
													{article.readTime} min read
												</span>
												<span className="meta-item">
													<Icon as={FaEye} />
													{article.views.toLocaleString()}
												</span>
											</div>
											<div className="featured-article-horizontal-cta">
												Read Article
												<Icon as={FaArrowRight} ml={2} />
											</div>
										</div>
									</Link>
								);
							})}
						</div>
					</Container>
				</section>
			)}

			{/* Articles Grid */}
			<section className="articles-grid-section">
				<Container maxW="1400px">
					<div className="articles-header">
						<div className="articles-header-left">
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
					</div>

					{filteredArticles.length > 0 ? (
						<SimpleGrid
							columns={{ base: 1, md: 2, lg: 3 }}
							spacing={8}
							className="articles-grid"
						>
							{filteredArticles.map((item, index) => {
								const catInfo = getCategoryInfo(item.category);
								return (
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
													alt={item.title}
													className="article-card-image"
													objectFit="cover"
												/>
												<div className="article-card-overlay">
													<span className="read-more-icon">
														<Icon as={FaArrowRight} />
													</span>
												</div>
												<Badge 
													className="article-card-category"
													style={{ backgroundColor: catInfo.color }}
												>
													<Icon as={catInfo.icon} mr={1} />
													{item.category}
												</Badge>
												<div className="article-card-read-time">
													<Icon as={FaClock} mr={1} />
													{item.readTime} min
												</div>
											</div>
											<div className="article-card-content">
												<h3 className="article-card-title">
													{item.title}
												</h3>
												<p className="article-card-excerpt">
													{item.excerpt.substring(0, 100)}
													...
												</p>
												<div className="article-card-meta">
													<div className="meta-author">
														<div className="author-avatar">
															{item.author.charAt(0)}
														</div>
														<div className="author-info">
															<span className="author-name">{item.author}</span>
															<span className="article-date">
																{formatDate(item.date)}
															</span>
														</div>
													</div>
													<div className="meta-stats">
														<span className="views-count">
															<Icon as={FaEye} />
															{item.views.toLocaleString()}
														</span>
													</div>
												</div>
											</div>
										</article>
									</Link>
								);
							})}
						</SimpleGrid>
					) : (
						<div className="no-results">
							<Icon as={FaCheckCircle} className="no-results-icon" />
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
								Subscribe to get notified when new articles are published.
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
