import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";
import {
	Container,
	Button,
	Icon,
	Badge,
	Image,
	SimpleGrid,
	HStack,
} from "@chakra-ui/react";
import {
	FaArrowLeft,
	FaClock,
	FaCalendarAlt,
	FaUser,
	FaEye,
	FaFacebookF,
	FaTwitter,
	FaWhatsapp,
	FaLink,
	FaChevronRight,
	FaBookOpen,
	FaHeart,
	FaLightbulb,
	FaUsers,
	FaCheckCircle,
} from "react-icons/fa";
import CardDataArticles from "../utils/CardDataArticles";

// Category icon mapping
const categoryIcons = {
	Marriage: FaHeart,
	Singles: FaUser,
	Leadership: FaLightbulb,
	Relationships: FaUsers,
};

// Get article by path
const getArticleByPath = (path) => {
	return CardDataArticles.find((article) => article.link === path);
};

// Get related articles by category
const getRelatedArticles = (currentArticle, limit = 3) => {
	return CardDataArticles.filter(
		(article) =>
			article.category === currentArticle.category &&
			article.id !== currentArticle.id,
	).slice(0, limit);
};

const ArticleDetail = () => {
	const location = useLocation();
	const [copied, setCopied] = useState(false);

	// Get article from URL path
	const article = getArticleByPath(location.pathname);

	// Get related articles
	const relatedArticles = article ? getRelatedArticles(article) : [];

	// Get category icon
	const CategoryIcon = article
		? categoryIcons[article.category] || FaBookOpen
		: FaBookOpen;

	// Format date
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString("en-US", options);
	};

	// Handle share
	const handleShare = (platform) => {
		const url = window.location.href;
		const text = article?.title || "";

		switch (platform) {
			case "facebook":
				window.open(
					`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
					"_blank",
				);
				break;
			case "twitter":
				window.open(
					`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
					"_blank",
				);
				break;
			case "whatsapp":
				window.open(
					`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
					"_blank",
				);
				break;
			case "copy":
				navigator.clipboard.writeText(url);
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
				break;
			default:
				break;
		}
	};

	// If no article found, show message
	if (!article) {
		return (
			<>
				<Navbar />
				<div className="min-h-screen bg-gray-50 py-16">
					<Container maxW="800px">
						<div className="bg-white rounded-xl shadow-lg p-8 text-center">
							<Icon as={FaBookOpen} className="text-6xl text-gray-300 mb-4 mx-auto" />
							<h1 className="text-2xl font-bold text-gray-800 mb-2">Article Not Found</h1>
							<p className="text-gray-600 mb-6">
								The article you're looking for doesn't exist or
								has been moved.
							</p>
							<Link to="/articles">
								<Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
									<Icon as={FaArrowLeft} mr={2} />
									Back to Articles
								</Button>
							</Link>
						</div>
					</Container>
				</div>
				<WhatsappChat />
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navbar />

			{/* Breadcrumb Navigation */}
			<div className="bg-gray-50 py-4 border-b">
				<Container maxW="1200px">
					<HStack spacing={2} className="text-sm">
						<Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
							Home
						</Link>
						<Icon as={FaChevronRight} className="text-gray-400 text-xs" />
						<Link to="/articles" className="text-gray-600 hover:text-green-600 transition-colors">
							Articles
						</Link>
						<Icon as={FaChevronRight} className="text-gray-400 text-xs" />
						<span className="text-gray-500 truncate max-w-[200px]">
							{article.title.substring(0, 40)}...
						</span>
					</HStack>
				</Container>
			</div>

			{/* Hero Section */}
			<section className="relative">
				<div className="h-80 md:h-96 relative">
					<Image
						src={article.image}
						alt={article.title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/50"></div>
				</div>
				<Container maxW="1000px" className="relative -mt-32 z-10">
					<div className="bg-white rounded-xl shadow-lg p-8">
						<Badge className="mb-4 bg-green-600 text-white px-3 py-1 rounded inline-flex items-center">
							<Icon as={CategoryIcon} mr={2} />
							{article.category}
						</Badge>
						<h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
						<div className="flex flex-wrap gap-4 text-sm text-gray-600">
							<span className="flex items-center gap-1">
								<Icon as={FaUser} />
								{article.author}
							</span>
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
								{article.views.toLocaleString()} views
							</span>
						</div>
					</div>
				</Container>
			</section>

			{/* Article Content */}
			<section className="py-12 px-4">
				<Container maxW="900px">
					<div className="flex flex-col lg:flex-row gap-8">
						{/* Main Content */}
						<article className="flex-1">
							{/* Share Sidebar (Desktop) */}
							<div className="hidden lg:block w-16 fixed left-4 top-1/2 transform -translate-y-1/2">
								<span className="text-gray-500 text-xs block text-center mb-2">Share</span>
								<div className="flex flex-col gap-2">
									<button
										className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
										onClick={() => handleShare("facebook")}
										aria-label="Share on Facebook"
									>
										<Icon as={FaFacebookF} />
									</button>
									<button
										className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
										onClick={() => handleShare("twitter")}
										aria-label="Share on Twitter"
									>
										<Icon as={FaTwitter} />
									</button>
									<button
										className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
										onClick={() => handleShare("whatsapp")}
										aria-label="Share on WhatsApp"
									>
										<Icon as={FaWhatsapp} />
									</button>
									<button
										className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
										onClick={() => handleShare("copy")}
										aria-label="Copy link"
									>
										<Icon as={copied ? FaCheckCircle : FaLink} />
									</button>
								</div>
							</div>

							{/* Article Body */}
							<div className="prose max-w-none">
								<p className="text-xl text-gray-600 italic mb-8 border-l-4 border-green-600 pl-4">
									{article.excerpt}
								</p>
								<div className="text-gray-700 space-y-4">
									{article.price
										.split("\n\n")
										.map((paragraph, index) => (
											<p key={index}>{paragraph}</p>
										))}
								</div>
							</div>

							{/* Share Section (Mobile) */}
							<div className="lg:hidden mt-8 pt-8 border-t">
								<span className="text-gray-500 text-sm block mb-4">
									Share this article
								</span>
								<div className="flex gap-2">
									<button
										className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
										onClick={() => handleShare("facebook")}
									>
										<Icon as={FaFacebookF} /> Facebook
									</button>
									<button
										className="flex-1 bg-sky-500 text-white py-2 rounded-lg flex items-center justify-center gap-2"
										onClick={() => handleShare("twitter")}
									>
										<Icon as={FaTwitter} /> Twitter
									</button>
									<button
										className="flex-1 bg-green-500 text-white py-2 rounded-lg flex items-center justify-center gap-2"
										onClick={() => handleShare("whatsapp")}
									>
										<Icon as={FaWhatsapp} /> WhatsApp
									</button>
								</div>
							</div>

							{/* Author Bio */}
							<div className="mt-12 bg-gray-50 rounded-xl p-6 flex items-start gap-4">
								<div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
									{article.author.charAt(0)}
								</div>
								<div>
									<h3 className="text-lg font-bold text-gray-800">
										{article.author}
									</h3>
									<p className="text-gray-600 text-sm">
										Christian author and speaker dedicated
										to helping individuals build stronger
										relationships, develop leadership
										skills, and deepen their faith through
										practical biblical teachings.
									</p>
								</div>
							</div>

							{/* Back Button */}
							<div className="mt-8">
								<Link to="/articles" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium">
									<Icon as={FaArrowLeft} />
									Back to Articles
								</Link>
							</div>
						</article>
					</div>
				</Container>
			</section>

			{/* Related Articles */}
			{relatedArticles.length > 0 && (
				<section className="py-12 px-4 bg-gray-50">
					<Container maxW="1200px">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
							<Icon as={FaBookOpen} className="mr-3 text-green-600" />
							Related Articles
						</h2>
						<SimpleGrid
							columns={{ base: 1, md: 3 }}
							spacing={8}
						>
							{relatedArticles.map((related) => (
								<Link
									to={related.link}
									key={related.id}
									className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
								>
									<div className="h-48 overflow-hidden">
										<Image
											src={related.image}
											alt={related.title}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="p-4">
										<Badge className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs mb-2">
											{related.category}
										</Badge>
										<h3 className="text-gray-800 font-semibold mb-2 line-clamp-2">
											{related.title}
										</h3>
										<div className="flex gap-4 text-xs text-gray-500">
											<span className="flex items-center gap-1">
												<Icon as={FaClock} mr={1} />
												{related.readTime} min
											</span>
											<span className="flex items-center gap-1">
												<Icon as={FaEye} mr={1} />
												{related.views.toLocaleString()}
											</span>
										</div>
									</div>
								</Link>
							))}
						</SimpleGrid>
					</Container>
				</section>
			)}

			{/* Newsletter Section */}
			<section className="py-16 px-4 bg-gradient-to-r from-green-800 to-purple-800">
				<Container maxW="700px">
					<div className="bg-white rounded-xl shadow-lg p-8 text-center">
						<Icon
							as={FaBookOpen}
							className="text-4xl text-green-600 mb-4 mx-auto"
						/>
						<h3 className="text-2xl font-bold text-gray-800 mb-2">Enjoyed this article?</h3>
						<p className="text-gray-600 mb-6">
							Subscribe to get notified when new articles are
							published.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
							/>
							<button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</Container>
			</section>

			<WhatsappChat />
			<Footer />
		</>
	);
};

export default ArticleDetail;
