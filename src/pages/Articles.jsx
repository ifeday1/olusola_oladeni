import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import WhatsappChat from "../components/Whatsapp/Index";
import Footer from "../components/Footer/Footer";
import {
	Text,
	Image,
	Button,
	SimpleGrid,
	Container,
	Input,
	InputGroup,
	InputLeftElement,
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
	FaSearch,
	FaClock,
	FaEye,
	FaCalendarAlt,
	FaArrowRight,
	FaSortAmountDown,
	FaFire,
	FaCheckCircle,
} from "react-icons/fa";
import axios from 'axios';
import authorImage from "../assets/dad.svg";
import CardDataArticles from "../utils/CardDataArticles";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("recent");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Articles - Olusola Oladeni",
    "description": "Read inspiring articles on strategic discipleship, Christian leadership, and life transformation by Reverend Dr. Olusola Oladeni.",
    "url": "https://olusolaoladeni.org/articles",
    "publisher": {
      "@type": "Person",
      "name": "Reverend Dr. Olusola Oladeni",
      "jobTitle": "Christian Minister and Author",
      "url": "https://olusolaoladeni.org"
    }
  };

  // Extract categories from article data
  const categories = [
    { name: "All", icon: FaStar, color: "#f59e0b" },
    { name: "Marriage", icon: FaHome, color: "#ec4899" },
    { name: "Courtship", icon: FaHeart, color: "#8b5cf6" },
    { name: "Leadership", icon: FaLightbulb, color: "#3b82f6" },
    { name: "Purpose", icon: FaStar, color: "#10b981" },
    { name: "Christian Living", icon: FaUsers, color: "#f97316" },
  ];

	// Sort articles based on selection
	const sortedArticles = useMemo(() => {
		const articles = [...CardDataArticles];
		switch (sortBy) {
			case "popular":
				return articles.sort((a, b) => b.views - a.views);
			case "recent":
				return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
			case "oldest":
				return articles.sort((a, b) => new Date(a.date) - new Date(b.date));
			default:
				return articles;
		}
	}, [sortBy]);

	// Filter articles based on search and category
	const filteredArticles = useMemo(() => {
		let filtered = sortedArticles;
		if (searchQuery) {
			filtered = filtered.filter(article =>
				article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				article.description.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}
		if (activeCategory !== "All") {
			filtered = filtered.filter(article => article.category === activeCategory);
		}
		return filtered;
	}, [sortedArticles, searchQuery, activeCategory]);

	// Get featured articles
	const featuredArticles = useMemo(() => {
		return CardDataArticles.filter(article => article.featured);
	}, []);

	// Format date helper
	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString('en-US', options);
	};

	// Get short category name for mobile
	const getShortCategoryName = (name) => {
		if (name === "Courtship") return "Court";
		if (name === "Christian Living") return "Living";
		if (name === "Leadership") return "Lead";
		if (name === "Purpose") return "Purpose";
		return name;
	};

	return (
		<>
			<Navbar />

			{/* Hero Section - Fully Responsive */}
			<section className="relative bg-gradient-to-r from-green-800 to-purple-800 pt-20 pb-8 px-4 mt-5">
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-4 md:top-10 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-white/10 rounded-full"></div>
					<div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 w-12 md:w-24 h-12 md:h-24 bg-white/10 rounded-full"></div>
					<div className="absolute top-1/2 right-1/4 w-8 md:w-16 h-8 md:h-16 bg-white/10 rounded-full"></div>
				</div>
				<div className="max-w-4xl mx-auto text-center relative z-10 px-2">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-4">
						Insightful <span className="text-green-300">Articles</span>
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-2 md:px-0">
						Explore our collection of inspiring and transformative articles 
						designed to strengthen your faith, relationships, and purpose.
					</p>
					<div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 md:6 text-white text-sm md:text-base">
						<div className="flex items-center gap-2">
							<Icon as={FaBookOpen} className="text-lg md:text-xl" />
							<span>{CardDataArticles.length} Articles</span>
						</div>
						<div className="flex items-center gap-2">
							<Icon as={FaEye} className="text-lg md:text-xl" />
							<span>{CardDataArticles.reduce((acc, a) => acc + a.views, 0).toLocaleString()}+ Views</span>
						</div>
					</div>
				</div>
			</section>

			{/* Search and Filter Section - Fully Responsive */}
			<section className="py-6 md:py-8 px-3 md:px-4 bg-gray-50">
				<Container maxW="1400px">
					<div className="bg-white rounded-xl shadow-md p-4 md:p-6">
						<div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
							<div className="flex-1">
								<InputGroup size="lg">
									<InputLeftElement pointerEvents="none" h="50px">
										<Icon as={FaSearch} color="gray.400" />
									</InputLeftElement>
									<Input
										placeholder="Search articles..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 h-12 md:h-auto"
									/>
								</InputGroup>
							</div>

							<div className="flex items-center gap-2 w-full md:w-auto">
								<Icon as={FaSortAmountDown} className="text-gray-500 hidden sm:block" />
								<select 
									className="border border-gray-300 rounded-lg px-3 md:px-4 py-2.5 focus:ring-2 focus:ring-green-500 w-full md:w-auto text-sm md:text-base"
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
								>
									<option value="recent">Most Recent</option>
									<option value="popular">Most Popular</option>
									<option value="oldest">Oldest First</option>
								</select>
							</div>
						</div>

						{/* Category Buttons - Fully Responsive */}
						<div className="flex flex-wrap justify-center gap-2">
							{categories.map((category) => (
								<button
									key={category.name}
									className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full font-medium text-xs md:text-sm transition-colors ${
										activeCategory === category.name
											? "text-white"
											: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}
									onClick={() => setActiveCategory(category.name)}
									style={{ 
										backgroundColor: activeCategory === category.name ? category.color : undefined
									}}
								>
									<Icon as={category.icon} mr={1} className="text-xs md:text-sm" />
									<span className="hidden xs:inline">{category.name}</span>
									<span className="xs:hidden">{getShortCategoryName(category.name)}</span>
									{activeCategory === category.name && (
										<span className="ml-1 md:ml-2 bg-white/20 px-1.5 md:px-2 py-0.5 rounded-full text-xs">
											{CardDataArticles.filter(a => a.category === category.name).length}
										</span>
									)}
								</button>
							))}
						</div>
					</div>
				</Container>
			</section>

			{/* Featured Articles Section - Fully Responsive */}
			{activeCategory === "All" && !searchQuery && (
				<section className="py-8 md:py-12 px-3 md:px-4">
					<Container maxW="1400px">
						<div className="mb-6 md:mb-8">
							<div className="flex items-center gap-2 mb-1 md:mb-2">
								<Icon as={FaFire} className="text-orange-500 text-lg md:text-xl" />
								<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Featured Articles</h2>
							</div>
							<p className="text-gray-600 text-sm md:text-base">
								Handpicked articles that will transform your perspective
							</p>
						</div>
						
						<div className="space-y-4 md:space-y-6">
							{featuredArticles.map((article, index) => {
								return (
									<Link
										to={article.link}
										key={article.id}
										className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
									>
										<div className="flex flex-col md:flex-row">
											<div className="w-full md:w-1/3 h-40 md:min-h-[200px] lg:min-h-[250px]">
												<Image
													src={article.image}
													alt={article.title}
													className="w-full h-full object-cover"
												/>
											</div>
											<div className="md:w-2/3 p-4 md:p-6">
												
												<h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
													{article.title}
												</h3>
												<p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
													{article.excerpt.substring(0, 100)}...
												</p>
												<div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
													<span className="flex items-center gap-1">
														<Icon as={FaCalendarAlt} className="text-xs" />
														<span className="hidden sm:inline">{formatDate(article.date)}</span>
														<span className="sm:hidden">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
													</span>
													<span className="flex items-center gap-1">
														<Icon as={FaClock} className="text-xs" />
														{article.readTime} min
													</span>
													<span className="flex items-center gap-1">
														<Icon as={FaEye} className="text-xs" />
														{article.views.toLocaleString()}
													</span>
												</div>
												<div className="mt-3 md:mt-4 text-green-600 font-medium flex items-center text-sm md:text-base">
													Read Article
													<Icon as={FaArrowRight} ml={2} />
												</div>
											</div>
										</div>
									</Link>
								);
							})}
						</div>
					</Container>
				</section>
			)}

			{/* Articles Grid - Fully Responsive */}
			<section className="py-8 md:py-12 px-3 md:px-4">
				<Container maxW="1400px">
					<div className="flex justify-between items-start md:items-center mb-6 md:mb-8 flex-col md:flex-row gap-2">
						<div>
							<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
								{activeCategory === "All"
									? "Latest Articles"
									: `${activeCategory} Articles`}
							</h2>
							<Text className="text-gray-600 text-sm md:text-base">
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
							columns={{ base: 1, sm: 2, lg: 3 }}
							spacing={6}
						>
							{filteredArticles.map((item, index) => {
								return (
									<Link
										to={item.link}
										key={item.id}
										className="block"
									>
										<article
											className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col"
										>
											<div className="relative flex-shrink-0">
												<Image
													src={item.image}
													alt={item.title}
													className="w-full h-40 sm:h-48 object-cover"
												/>
												<div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
													<Icon as={FaArrowRight} className="text-white text-2xl md:text-3xl" />
												</div>
												
												<div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
													<Icon as={FaClock} mr={1} className="text-xs" />
													{item.readTime} min
												</div>
											</div>
											<div className="p-3 md:p-4 flex flex-col flex-grow">
												<h3 className="text-gray-800 font-semibold mb-2 line-clamp-2 text-sm md:text-base">
													{item.title}
												</h3>
												<p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 flex-grow">
													{item.excerpt.substring(0, 80)}
													...
												</p>
												<div className="flex justify-between items-center text-xs md:text-sm mt-auto">
													<div className="flex items-center gap-2">
														<img
															src={authorImage}
															alt={item.author}
															className="w-6 md:w-8 h-6 md:h-8 rounded-full object-cover"
														/>
														<div>
															<span className="text-gray-700 font-medium block text-xs md:text-sm">{item.author}</span>
															<span className="text-gray-500 text-xs">
																{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
															</span>
														</div>
													</div>
													<span className="text-gray-500 flex items-center gap-1 text-xs">
														<Icon as={FaEye} className="text-xs" />
														{item.views >= 1000 ? `${(item.views / 1000).toFixed(1)}k` : item.views}
													</span>
												</div>
											</div>
										</article>
									</Link>
								);
							})}
						</SimpleGrid>
					) : (
						<div className="text-center py-12 md:py-16 bg-gray-50 rounded-xl px-4">
							<Icon as={FaCheckCircle} className="text-4xl md:text-6xl text-green-500 mb-4 mx-auto" />
							<h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
							<p className="text-gray-500 mb-4 md:mb-6 text-sm md:text-base">
								Try adjusting your search or filter to find what
								you're looking for.
							</p>
							<Button
								onClick={() => {
									setSearchQuery("");
									setActiveCategory("All");
								}}
								className="bg-green-600 hover:bg-green-700 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base"
							>
								Reset Filters
							</Button>
						</div>
					)}
				</Container>
			</section>

			<WhatsappChat />
			<Footer />
    </>
  );
};

export default Articles;
