import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Books";
import Articles from "./pages/Articles";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Basic from "./utils/Basic";
import Patience from "./utils/Patience";

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
        <Route path="/basic" element={<Basic />} />
        <Route path="/patience" element={<Patience />} />
      </Routes>
    </div>
  );
}

export default App;
