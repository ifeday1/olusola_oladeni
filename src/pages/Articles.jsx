import React, { useState, useMemo } from "react";
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
	HStack,
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
import CardDataArticles from "../utils/CardDataArticles";

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
			<section className="relative bg-gradient-to-r from-green-800 to-purple-800 pt-20 pb-8 px-4 mt-5 ">
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
					<div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
					<div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
				</div>
				<div className="max-w-4xl mx-auto text-center relative z-10">
					
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
						Insightful <span className="text-green-300">Articles</span>
					</h1>
					<p className="text-xl text-white/90 max-w-2xl mx-auto">
						Explore our collection of inspiring and transformative articles 
						designed to strengthen your faith, relationships, and purpose.
					</p>
					<div className="flex justify-center gap-8 mt-6 text-white">
						<div className="flex items-center gap-2">
							<Icon as={FaBookOpen} />
							<span>{CardDataArticles.length} Articles</span>
						</div>
						<div className="flex items-center gap-2">
							<Icon as={FaEye} />
							<span>{CardDataArticles.reduce((acc, a) => acc + a.views, 0).toLocaleString()}+ Views</span>
						</div>
					</div>
				</div>
				
			</section>

			{/* Search and Filter Section */}
			<section className="py-8 px-4 bg-gray-50">
				<Container maxW="1400px">
					<div className="bg-white rounded-xl shadow-md p-6">
						<div className="flex flex-col md:flex-row gap-4 mb-6">
							<div className="flex-1">
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
										className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
									/>
								</InputGroup>
							</div>

							<div className="flex items-center gap-2">
								<Icon as={FaSortAmountDown} className="text-gray-500" />
								<select 
									className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
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
							className="flex flex-wrap justify-center"
							wrap="wrap"
							justify="center"
						>
							{categories.map((category) => (
								<button
									key={category.name}
									className={`px-4 py-2 rounded-full font-medium transition-colors ${
										activeCategory === category.name
											? "text-white"
											: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}
									onClick={() => setActiveCategory(category.name)}
									style={{ 
										backgroundColor: activeCategory === category.name ? category.color : undefined
									}}
								>
									<Icon as={category.icon} mr={2} />
									{category.name}
									{activeCategory === category.name && (
										<span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
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
				<section className="py-12 px-4">
					<Container maxW="1400px">
						<div className="mb-8">
							<div className="flex items-center gap-2 mb-2">
								<Icon as={FaFire} className="text-orange-500 text-xl" />
								<h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Articles</h2>
							</div>
							<p className="text-gray-600">
								Handpicked articles that will transform your perspective
							</p>
						</div>
						
						<div className="space-y-6">
							{featuredArticles.map((article, index) => {
								const catInfo = getCategoryInfo(article.category);
								return (
									<Link
										to={article.link}
										key={article.id}
										className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
									>
										<div className="flex flex-col md:flex-row">
											<div className="md:w-1/3">
												<Image
													src={article.image}
													alt={article.title}
													className="w-full h-48 md:h-full object-cover"
												/>
											</div>
											<div className="md:w-2/3 p-6">
												<Badge 
													className="mb-2"
													style={{ backgroundColor: catInfo.color }}
												>
													<Icon as={catInfo.icon} mr={1} />
													{article.category}
												</Badge>
												<h3 className="text-xl font-bold text-gray-800 mb-2">
													{article.title}
												</h3>
												<p className="text-gray-600 mb-4">
													{article.excerpt.substring(0, 180)}...
												</p>
												<div className="flex flex-wrap gap-4 text-sm text-gray-500">
													<span className="flex items-center gap-1">
														<Icon as={FaCalendarAlt} />
														{formatDate(article.date)}
													</span>
													<span className="flex items-center gap-1">
														<Icon as={FaClock} />
														{article.readTime} min read
													</span>
													<span className="flex items-center gap-1">
														<Icon as={FaEye} />
														{article.views.toLocaleString()}
													</span>
												</div>
												<div className="mt-4 text-green-600 font-medium flex items-center">
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

			{/* Articles Grid */}
			<section className="py-12 px-4">
				<Container maxW="1400px">
					<div className="flex justify-between items-center mb-8">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-gray-800">
								{activeCategory === "All"
									? "Latest Articles"
									: `${activeCategory} Articles`}
							</h2>
							<Text className="text-gray-600">
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
						>
							{filteredArticles.map((item, index) => {
								const catInfo = getCategoryInfo(item.category);
								return (
									<Link
										to={item.link}
										key={item.id}
										className="block"
									>
										<article
											className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full"
										>
											<div className="relative">
												<Image
													src={item.image}
													alt={item.title}
													className="w-full h-48 object-cover"
												/>
												<div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
													<Icon as={FaArrowRight} className="text-white text-3xl" />
												</div>
												<Badge 
													className="absolute top-2 left-2"
													style={{ backgroundColor: catInfo.color }}
												>
													<Icon as={catInfo.icon} mr={1} />
													{item.category}
												</Badge>
												<div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
													<Icon as={FaClock} mr={1} />
													{item.readTime} min
												</div>
											</div>
											<div className="p-4">
												<h3 className="text-gray-800 font-semibold mb-2 line-clamp-2">
													{item.title}
												</h3>
												<p className="text-gray-600 text-sm mb-4 line-clamp-2">
													{item.excerpt.substring(0, 100)}
													...
												</p>
												<div className="flex justify-between items-center text-sm">
													<div className="flex items-center gap-2">
														<div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">
															{item.author.charAt(0)}
														</div>
														<div>
															<span className="text-gray-700 font-medium block">{item.author}</span>
															<span className="text-gray-500 text-xs">
																{formatDate(item.date)}
															</span>
														</div>
													</div>
													<span className="text-gray-500 flex items-center gap-1">
														<Icon as={FaEye} />
														{item.views.toLocaleString()}
													</span>
												</div>
											</div>
										</article>
									</Link>
								);
							})}
						</SimpleGrid>
					) : (
						<div className="text-center py-16 bg-gray-50 rounded-xl">
							<Icon as={FaCheckCircle} className="text-6xl text-green-500 mb-4 mx-auto" />
							<h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
							<p className="text-gray-500 mb-6">
								Try adjusting your search or filter to find what
								you're looking for.
							</p>
							<Button
								onClick={() => {
									setSearchQuery("");
									setActiveCategory("All");
								}}
								className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
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
