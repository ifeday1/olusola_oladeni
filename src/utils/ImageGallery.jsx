import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Text, IconButton, useBreakpointValue } from "@chakra-ui/react";

// Image imports
import Pre1 from "../assets/p1.webp";
import Pre2 from "../assets/p2.webp";
import Pre3 from "../assets/p3.webp";
import Pre4 from "../assets/p4.webp";
import Feb1 from "../assets/feb1.jpg";
import Feb3 from "../assets/feb3.jpg";
import Feb4 from "../assets/feb4.jpg";

const galleryImages = [
  { src: Pre1, alt: "Premarital Preparation 1" },
  { src: Pre2, alt: "Premarital Preparation 2" },
  { src: Pre3, alt: "Premarital Preparation 3" },
  { src: Pre4, alt: "Premarital Preparation 4" },
  { src: Feb1, alt: "Marriage Event 1" },
  { src: Feb3, alt: "Marriage Event 2" },
  { src: Feb4, alt: "Marriage Event 3" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageCardVariants = {
  rest: { scale: 1, brightness: 1 },
  hover: { 
    scale: 1.02, 
    brightness: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

// Parallax Header Component
const ParallaxHeader = () => {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden bg-gradient-to-r from-green-800 to-purple-800">
      {/* Parallax Background Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${Feb1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ y: 0 }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-purple-900/60 to-green-900/80" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            fontStyle="italic"
            color="white"
            textAlign="center"
            className="drop-shadow-lg"
          >
            Premarital and Marital Matters
          </Text>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="whiteAlpha.800"
            textAlign="center"
          >
            Building strong relationships through faith and wisdom
          </Text>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

// Image Card Component
const ImageCard = ({ image, index, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.div variants={imageCardVariants} className="w-full h-64">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </motion.div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Text color="white" fontSize="sm" fontWeight="medium">
            {image.alt}
          </Text>
        </div>
      </div>
      
      {/* Click Indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

// Lightbox Modal Component
const LightboxModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Reset loading state when image changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Close Button */}
        <IconButton
          aria-label="Close lightbox"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
          position="absolute"
          top={4}
          right={4}
          variant="ghost"
          color="white"
          size="lg"
          onClick={onClose}
          zIndex={60}
          _hover={{ bg: "whiteAlpha.200" }}
        />

        {/* Navigation - Previous */}
        <IconButton
          aria-label="Previous image"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          }
          position="absolute"
          left={4}
          variant="ghost"
          color="white"
          size="lg"
          onClick={onPrev}
          zIndex={60}
          display={{ base: "none", md: "flex" }}
          _hover={{ bg: "whiteAlpha.200" }}
        />

        {/* Navigation - Next */}
        <IconButton
          aria-label="Next image"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          }
          position="absolute"
          right={4}
          variant="ghost"
          color="white"
          size="lg"
          onClick={onNext}
          zIndex={60}
          display={{ base: "none", md: "flex" }}
          _hover={{ bg: "whiteAlpha.200" }}
        />

        {/* Image Container */}
        <motion.div
          className="relative z-10 max-w-5xl max-h-[85vh] px-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className={`max-w-full max-h-[85vh] object-contain rounded-lg transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setIsLoading(false)}
          />
        </motion.div>

        {/* Image Counter and Caption */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <Text color="white" fontSize="sm" fontWeight="medium">
            {currentIndex + 1} / {images.length}
          </Text>
          <Text color="whiteAlpha.800" fontSize="xs" mt={1}>
            {currentImage.alt}
          </Text>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="absolute bottom-4 right-4 z-20 md:hidden">
          <Text color="whiteAlpha.600" fontSize="xs">
            Swipe to navigate
          </Text>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Masonry Grid Component
const MasonryGrid = ({ images, onImageClick }) => {
  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 }) || 2;

  return (
    <div
      className="w-full max-w-7xl mx-auto px-4 py-8"
      style={{
        columnCount: columns,
        columnGap: "16px",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            breakInside: "avoid",
            marginBottom: "16px",
          }}
        >
          <ImageCard
            image={image}
            index={index}
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

// Main Gallery Component
const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = useCallback((index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  }, []);

  const navigateNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const navigatePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  // Handle swipe on mobile
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        navigateNext();
      } else {
        navigatePrev();
      }
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Parallax Header */}
      <ParallaxHeader />

      {/* Masonry Gallery */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <MasonryGrid 
          images={galleryImages} 
          onImageClick={openLightbox} 
        />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <LightboxModal
            images={galleryImages}
            currentIndex={selectedIndex}
            onClose={closeLightbox}
            onNext={navigateNext}
            onPrev={navigatePrev}
          />
        )}
      </AnimatePresence>

      {/* Footer Note */}
      <div className="pb-8 text-center">
        <Text color="gray.500" fontSize="sm">
          Click on any image to view in full screen
        </Text>
      </div>
    </div>
  );
};

export default ImageGallery;
