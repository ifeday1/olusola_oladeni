import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";
import {
	Container,
	Button,
	Icon,
	Image,
	SimpleGrid,
	HStack,
	Badge,
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
	FaQuoteLeft,
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

			{/* Hero Section with Enhanced Image Presentation */}
			<section className="relative bg-gradient-to-b from-gray-900 to-gray-800">
				<div className="h-96 md:h-[500px] lg:h-[600px] relative overflow-hidden">
					<Image
						src={article.image}
						alt={article.title}
						className="w-full h-full object-cover opacity-70"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
					<div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
				</div>
				
				{/* Article Header Overlay */}
				<Container maxW="1000px" className="absolute inset-x-0 bottom-0 z-10 pb-12 md:pb-16">
					<div className="text-white">
						<Badge className="mb-4 bg-green-600 text-white px-4 py-1.5 rounded-full inline-flex items-center text-sm font-medium shadow-lg">
							<Icon as={CategoryIcon} mr={2} />
							{article.category}
						</Badge>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl">
							{article.title}
						</h1>
						<div className="flex flex-wrap gap-6 text-sm text-gray-200">
							<span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
								<Icon as={FaUser} className="text-green-400" />
								{article.author}
							</span>
							<span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
								<Icon as={FaCalendarAlt} className="text-green-400" />
								{formatDate(article.date)}
							</span>
							<span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
								<Icon as={FaClock} className="text-green-400" />
								{article.readTime} min read
							</span>
							<span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
								<Icon as={FaEye} className="text-green-400" />
								{article.views.toLocaleString()} views
							</span>
						</div>
					</div>
				</Container>
			</section>

			{/* Article Content */}
			<section className="py-16 md:py-20 px-4 bg-white">
				<Container maxW="900px">
					<div className="flex flex-col lg:flex-row gap-12">
						{/* Main Content */}
						<article className="flex-1">
							{/* Share Sidebar (Desktop) */}
							<div className="hidden lg:block w-16 fixed left-4 top-1/2 transform -translate-y-1/2 z-20">
								<span className="text-gray-500 text-xs block text-center mb-3 font-medium">Share</span>
								<div className="flex flex-col gap-3">
									<button
										className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110 shadow-lg"
										onClick={() => handleShare("facebook")}
										aria-label="Share on Facebook"
									>
										<Icon as={FaFacebookF} />
									</button>
									<button
										className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-all hover:scale-110 shadow-lg"
										onClick={() => handleShare("twitter")}
										aria-label="Share on Twitter"
									>
										<Icon as={FaTwitter} />
									</button>
									<button
										className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110 shadow-lg"
										onClick={() => handleShare("whatsapp")}
										aria-label="Share on WhatsApp"
									>
										<Icon as={FaWhatsapp} />
									</button>
									<button
										className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-all hover:scale-110 shadow-lg"
										onClick={() => handleShare("copy")}
										aria-label="Copy link"
									>
										<Icon as={copied ? FaCheckCircle : FaLink} />
									</button>
								</div>
							</div>

							{/* Article Body with Enhanced Typography */}
							<div className="prose prose-lg max-w-none">
								{/* Excerpt as Pull Quote */}
								<div className="relative my-10 pl-8 border-l-4 border-green-600">
									<Icon 
										as={FaQuoteLeft} 
										className="absolute -left-3 top-0 text-green-600 text-2xl bg-white px-2" 
									/>
									<p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed font-light">
										{article.excerpt}
									</p>
								</div>

								{/* Article Content with Drop Cap */}
								<div className="text-gray-700 leading-relaxed space-y-6 text-lg">
									{article.content
										.split("\n\n")
										.map((paragraph, index) => (
											<p 
												key={index} 
												className={`${
													index === 0 
														? "first-letter:text-5xl first-letter:font-bold first-letter:text-green-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1" 
														: ""
												}`}
											>
												{paragraph}
											</p>
										))}
								</div>

								{/* Key Takeaway Box */}
								<div className="my-12 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-r-lg shadow-sm">
									<h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
										<Icon as={FaLightbulb} className="mr-3 text-green-600" />
										Key Takeaway
									</h3>
									<p className="text-gray-700 leading-relaxed">
										{article.excerpt}
									</p>
								</div>
							</div>

							{/* Share Section (Mobile) */}
							<div className="lg:hidden mt-12 pt-8 border-t border-gray-200">
								<span className="text-gray-600 text-sm block mb-4 font-medium">
									Share this article
								</span>
								<div className="flex gap-3">
									<button
										className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-md"
										onClick={() => handleShare("facebook")}
									>
										<Icon as={FaFacebookF} /> Facebook
									</button>
									<button
										className="flex-1 bg-sky-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-sky-600 transition-colors shadow-md"
										onClick={() => handleShare("twitter")}
									>
										<Icon as={FaTwitter} /> Twitter
									</button>
									<button
										className="flex-1 bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-md"
										onClick={() => handleShare("whatsapp")}
									>
										<Icon as={FaWhatsapp} /> WhatsApp
									</button>
								</div>
							</div>

							{/* Author Bio with Enhanced Design */}
							<div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6 shadow-sm border border-gray-100">
								<div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0 shadow-lg">
									{article.author.charAt(0)}
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-bold text-gray-800 mb-2">
										{article.author}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										Christian author and speaker dedicated
										to helping individuals build stronger
										relationships, develop leadership
										skills, and deepen their faith through
										practical biblical teachings.
									</p>
									<Link 
										to="/about" 
										className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mt-4 transition-colors"
									>
										Learn more about the author
										<Icon as={FaChevronRight} className="text-sm" />
									</Link>
								</div>
							</div>

							{/* Back Button */}
							<div className="mt-12 pt-8 border-t border-gray-200">
								<Link 
									to="/articles" 
									className="inline-flex items-center gap-3 text-green-600 hover:text-green-700 font-medium text-lg group transition-colors"
								>
									<Icon as={FaArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
									Back to Articles
								</Link>
							</div>
						</article>
					</div>
				</Container>
			</section>

			{/* Related Articles */}
			{relatedArticles.length > 0 && (
				<section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
					<Container maxW="1200px">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
								Continue Reading
							</h2>
							<p className="text-gray-600 max-w-2xl mx-auto">
								Explore more articles on {article.category} and deepen your understanding
							</p>
						</div>
						<SimpleGrid
							columns={{ base: 1, md: 3 }}
							spacing={8}
						>
							{relatedArticles.map((related) => (
								<Link
									to={related.link}
									key={related.id}
									className="group block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
								>
									<div className="h-56 overflow-hidden relative">
										<Image
											src={related.image}
											alt={related.title}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</div>
									<div className="p-6">
										<Badge className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
											{related.category}
										</Badge>
										<h3 className="text-gray-800 font-bold text-lg mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
											{related.title}
										</h3>
										<div className="flex gap-4 text-sm text-gray-500">
											<span className="flex items-center gap-1">
												<Icon as={FaClock} className="text-green-500" />
												{related.readTime} min
											</span>
											<span className="flex items-center gap-1">
												<Icon as={FaEye} className="text-green-500" />
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
			<section className="py-20 px-4 bg-gradient-to-r from-green-800 via-green-700 to-emerald-800 relative overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0" style={{
						backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
					}}></div>
				</div>
				<Container maxW="700px" className="relative z-10">
					<div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 text-center">
						<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
							<Icon
								as={FaBookOpen}
								className="text-3xl text-green-600"
							/>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
							Enjoyed this article?
						</h3>
						<p className="text-gray-600 mb-8 text-lg">
							Subscribe to get notified when new articles are
							published. Join our community of readers!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
							/>
							<button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg text-base">
								Subscribe
							</button>
						</div>
						<p className="text-gray-500 text-sm mt-4">
							No spam, unsubscribe at any time.
						</p>
					</div>
				</Container>
			</section>

			<WhatsappChat />
			<Footer />
		</>
	);
};

export default ArticleDetail;
