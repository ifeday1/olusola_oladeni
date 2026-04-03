import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Scroll from "./components/Scroll";

// Lazy load all pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Book = React.lazy(() => import("./pages/Books"));
const Articles = React.lazy(() => import("./pages/Articles"));
const Media = React.lazy(() => import("./pages/Media"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Feeds = React.lazy(() => import("./pages/Feeds"));
const ArticleDetail = React.lazy(() => import("./components/ArticleDetail"));
const Basic = React.lazy(() => import("./utils/Basic"));
const Patience = React.lazy(() => import("./utils/Patience"));
const Purpose = React.lazy(() => import("./utils/Purpose"));
const Presence = React.lazy(() => import("./utils/Presence"));
const Triple = React.lazy(() => import("./utils/Triple"));
const Worth = React.lazy(() => import("./utils/Worth"));
const Danger = React.lazy(() => import("./utils/Danger"));
const Leader = React.lazy(() => import("./utils/Leader"));
const Blessed = React.lazy(() => import("./utils/Blessed"));
const AdminLogin = React.lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard"));
const AdminArticles = React.lazy(() => import("./pages/AdminArticles"));
const AdminBooks = React.lazy(() => import("./pages/AdminBooks"));
const AdminMedia = React.lazy(() => import("./pages/AdminMedia"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <div>
        <Scroll/>
        <Suspense fallback={<LoadingFallback />}>
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
            {/* Admin Pages */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/articles" element={<AdminArticles />} />
            <Route path="/admin/books" element={<AdminBooks />} />
            <Route path="/admin/media" element={<AdminMedia />} />
            {/* Article Detail Pages - Using new ArticleDetail component */}
            <Route path="/winning" element={<ArticleDetail />} />
          </Routes>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;
