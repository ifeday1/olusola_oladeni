import "./App.css";
import "./global-responsive.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Books";
import Articles from "./pages/Articles";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Feeds from "./pages/Feeds";
import ArticleDetail from "./components/ArticleDetail";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/books" element={<Book />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/media" element={<Media />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/feeds" element={<Feeds />} />

				{/* Article Detail Pages - Using new ArticleDetail component */}
				<Route path="/patience" element={<ArticleDetail />} />
				<Route path="/presence" element={<ArticleDetail />} />
				<Route path="/purpose" element={<ArticleDetail />} />
				<Route path="/triple" element={<ArticleDetail />} />
				<Route path="/worth" element={<ArticleDetail />} />
				<Route path="/danger" element={<ArticleDetail />} />
				<Route path="/winning" element={<ArticleDetail />} />
				<Route path="/leader" element={<ArticleDetail />} />
				<Route path="/blessed" element={<ArticleDetail />} />
			</Routes>
		</div>
	);
}

export default App;
