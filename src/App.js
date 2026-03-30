import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Books";
import Articles from "./pages/Articles";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Feeds from "./pages/Feeds";
import ArticleDetail from "./components/ArticleDetail";
import Basic from "./utils/Basic";
import Patience from "./utils/Patience";
import Purpose from "./utils/Purpose";
import Presence from "./utils/Presence";
import Triple from "./utils/Triple";
import Worth from "./utils/Worth";
import Danger from "./utils/Danger";
import Leader from "./utils/Leader";
import Blessed from "./utils/Blessed";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div>
      <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Book />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feeds" element={<Feeds />} />

        <Route path="/basic" element={<Basic />} />
        <Route path="/patience" element={<Patience />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/presence" element={<Presence />} />
        <Route path="/triple" element={<Triple />} />
        <Route path="/worth" element={<Worth />} />
        <Route path="/danger" element={<Danger />} />

        <Route path="/leader" element={<Leader />} />
        <Route path="/blessed" element={<Blessed />} />
        {/* Article Detail Pages - Using new ArticleDetail component */}
        <Route path="/winning" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
