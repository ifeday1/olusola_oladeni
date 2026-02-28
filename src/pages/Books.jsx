import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import cardData from "../utils/CardData";
import WhatsappChat from "../components/Whatsapp/Index";
import {
	Container,
	SimpleGrid,
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
			<section className="relative bg-gradient-to-r from-green-800 to-purple-800 py-20 px-4">
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
					<div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
					<div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
				</div>
				<div className="max-w-4xl mx-auto text-center relative z-10">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
						My <span className="text-green-300">Books</span>
					</h1>
					<p className="text-xl text-white/90 max-w-2xl mx-auto">
						Discover transformative books that will inspire your
						marriage, leadership, and personal growth journey.
					</p>
				</div>
			</section>

			{/* Search and Filter Section */}
			<section className="py-8 px-4 bg-gray-50">
				<Container maxW="1400px">
					<div className="bg-white rounded-xl shadow-md p-6">
						<div className="mb-6">
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
									className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
								/>
							</InputGroup>
						</div>

						<HStack
							spacing={2}
							className="flex flex-wrap"
							wrap="wrap"
						>
							{categories.map((category) => (
								<button
									key={category.name}
									className={`px-4 py-2 rounded-full font-medium transition-colors ${
										activeCategory === category.name
											? "bg-green-600 text-white"
											: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}
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
			<section className="py-12 px-4">
				<Container maxW="1400px">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-800">
							{activeCategory === "All"
								? "All Books"
								: `${activeCategory} Books`}
						</h2>
						<Text className="text-gray-600">
							{filteredBooks.length}{" "}
							{filteredBooks.length === 1 ? "book" : "books"}{" "}
							available
						</Text>
					</div>

					{filteredBooks.length > 0 ? (
						<SimpleGrid
							columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
							spacing={8}
						>
							{filteredBooks.map((item, index) => (
								<div
									key={item.id}
									className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
								>
									<div className="relative">
										<img
											src={item.image}
											alt={item.description}
											className="w-full h-64 object-cover"
										/>
										<div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												className="bg-green-600 text-white px-6 py-2 rounded-lg"
											>
												Buy Now
											</a>
										</div>
										<Badge className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded">
											{getCategory(item)}
										</Badge>
									</div>

									<div className="p-4">
										<h3 className="text-gray-800 font-semibold mb-2 line-clamp-2">
											{item.description}
										</h3>
										<p className="text-green-600 font-bold text-lg mb-4">
											{item.price}
										</p>

										<div className="flex flex-col sm:flex-row gap-2">
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded transition-colors"
											>
												{item.buttonLabel}
											</a>
											{item.previewLink && (
												<a
													href={item.previewLink}
													className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 text-center py-2 px-4 rounded transition-colors text-sm"
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
						<div className="text-center py-16 bg-gray-50 rounded-xl">
							<Icon
								as={FaBook}
								className="text-6xl text-gray-300 mb-4 mx-auto"
							/>
							<h3 className="text-xl font-semibold text-gray-700 mb-2">No books found</h3>
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

			{/* Featured Book CTA */}
			<section className="py-12 px-4 bg-gray-50">
				<Container maxW="1000px">
					<div className="bg-gradient-to-r from-green-800 to-purple-800 rounded-2xl p-8 text-center text-white">
						<Badge className="mb-4 bg-yellow text-white px-3 py-500-1 rounded text-sm font-semibold">
							Best Seller
						</Badge>
						<h3 className="text-2xl md:text-3xl font-bold mb-4">
							Start Your Transformation Today
						</h3>
						<p className="text-white/90 mb-6 max-w-xl mx-auto">
							Browse our complete collection and find the
							perfect book to inspire your marriage,
							leadership, and personal growth journey.
						</p>
						<a
							href="https://www.amazon.com/olusola-oladeni/e/B09KMXGB6S"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
						>
							View All Books on Amazon
						</a>
					</div>
				</Container>
			</section>

			<WhatsappChat />
			<Footer />
		</>
	);
};

export default Books;
