import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../utils/Card";
import cardData from "../utils/CardData";
import WhatsappChat from "../components/Whatsapp/Index";
import {
	Container,
	SimpleGrid,
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	HStack,
	Text,
	Badge,
	Icon,
	Button,
} from "@chakra-ui/react";
import { FaBook, FaHeart, FaCrown, FaStar, FaSearch } from "react-icons/fa";
import "./Books.css";

const Books = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");

	// Extract categories from book data
	const categories = [
		{ name: "All", icon: FaBook },
		{ name: "Marriage", icon: FaHeart },
		{ name: "Leadership", icon: FaCrown },
		{ name: "Motivation", icon: FaStar },
	];

	// Get category for each book based on description
	const getCategory = (item) => {
		const desc = item.description.toLowerCase();
		if (desc.includes("marriage") || desc.includes("married"))
			return "Marriage";
		if (
			desc.includes("church") ||
			desc.includes("lead") ||
			desc.includes("effective")
		)
			return "Leadership";
		return "Motivation";
	};

	// Filter books based on search and category
	const filteredBooks = useMemo(() => {
		return cardData.filter((item) => {
			const matchesSearch = item.description
				.toLowerCase()
				.includes(searchQuery.toLowerCase());
			const matchesCategory =
				activeCategory === "All" ||
				getCategory(item) === activeCategory;
			return matchesSearch && matchesCategory;
		});
	}, [searchQuery, activeCategory]);

	return (
		<>
			<Navbar />

			{/* Hero Section */}
			<section className="books-hero">
				<div className="books-hero-overlay"></div>
				<div className="books-hero-content">
					<Badge className="books-badge">
						<Icon as={FaBook} mr={2} /> Collection
					</Badge>
					<h1 className="books-hero-title">
						My <span>Books</span>
					</h1>
					<p className="books-hero-subtitle">
						Discover transformative books that will inspire your
						marriage, leadership, and personal growth journey.
					</p>
				</div>
				<div className="books-hero-shapes">
					<div className="hero-shape shape-1"></div>
					<div className="hero-shape shape-2"></div>
					<div className="hero-shape shape-3"></div>
				</div>
			</section>

			{/* Search and Filter Section */}
			<section className="books-filter-section">
				<Container maxW="1400px">
					<div className="filter-container-books">
						<div className="search-wrapper-books">
							<InputGroup size="lg">
								<InputLeftElement pointerEvents="none">
									<Icon as={FaSearch} color="gray.400" />
								</InputLeftElement>
								<Input
									placeholder="Search books..."
									value={searchQuery}
									onChange={(e) =>
										setSearchQuery(e.target.value)
									}
									className="search-input-books"
								/>
							</InputGroup>
						</div>

						<HStack
							spacing={2}
							className="category-tabs-books"
							wrap="wrap"
						>
							{categories.map((category) => (
								<button
									key={category.name}
									className={`category-tab-books ${activeCategory === category.name ? "active" : ""}`}
									onClick={() =>
										setActiveCategory(category.name)
									}
								>
									<Icon as={category.icon} mr={2} />
									{category.name}
								</button>
							))}
						</HStack>
					</div>
				</Container>
			</section>

			{/* Books Grid Section */}
			<section className="books-grid-section">
				<Container maxW="1400px">
					<div className="books-header-section">
						<h2 className="books-grid-title">
							{activeCategory === "All"
								? "All Books"
								: `${activeCategory} Books`}
						</h2>
						<Text className="books-count">
							{filteredBooks.length}{" "}
							{filteredBooks.length === 1 ? "book" : "books"}{" "}
							available
						</Text>
					</div>

					{filteredBooks.length > 0 ? (
						<SimpleGrid
							columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
							spacing={8}
							className="books-grid-new"
						>
							{filteredBooks.map((item, index) => (
								<div
									key={item.id}
									className="book-card-new"
									style={{
										animationDelay: `${index * 0.1}s`,
									}}
								>
									<div className="book-cover-wrapper">
										<img
											src={item.image}
											alt={item.description}
											className="book-cover-image"
										/>
										<div className="book-cover-overlay">
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												className="buy-btn-overlay"
											>
												Buy Now
											</a>
										</div>
										<Badge className="book-category-badge">
											{getCategory(item)}
										</Badge>
									</div>

									<div className="book-details">
										<h3 className="book-title">
											{item.description}
										</h3>
										<p className="book-price">
											{item.price}
										</p>

										<div className="book-actions">
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												className="buy-btn"
											>
												{item.buttonLabel}
											</a>
											{item.previewLink && (
												<a
													href={item.previewLink}
													className="preview-btn"
												>
													Preview
												</a>
											)}
										</div>
									</div>
								</div>
							))}
						</SimpleGrid>
					) : (
						<div className="no-results-books">
							<Icon
								as={FaBook}
								className="no-results-icon-books"
							/>
							<h3>No books found</h3>
							<p>
								Try adjusting your search or filter to find what
								you're looking for.
							</p>
							<Button
								onClick={() => {
									setSearchQuery("");
									setActiveCategory("All");
								}}
								className="reset-btn-books"
							>
								Reset Filters
							</Button>
						</div>
					)}
				</Container>
			</section>

			{/* Featured Book CTA */}
			<section className="featured-cta-section">
				<Container maxW="1000px">
					<div className="featured-cta-card">
						<div className="featured-cta-content">
							<Badge className="featured-badge">
								Best Seller
							</Badge>
							<h3 className="featured-cta-title">
								Start Your Transformation Today
							</h3>
							<p className="featured-cta-text">
								Browse our complete collection and find the
								perfect book to inspire your marriage,
								leadership, and personal growth journey.
							</p>
							<a
								href="https://www.amazon.com/olusola-oladeni/e/B09KMXGB6S"
								target="_blank"
								rel="noopener noreferrer"
								className="view-all-btn"
							>
								View All Books on Amazon
							</a>
						</div>
					</div>
				</Container>
			</section>

			<WhatsappChat />
			<Footer />
		</>
	);
};

export default Books;
