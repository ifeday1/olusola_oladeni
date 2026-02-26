import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Text, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import "./ImageSlider.css";

import Image from "../assets/1.webp";
import Image1 from "../assets/2.webp";
import Image2 from "../assets/3.webp";
import Image3 from "../assets/4.webp";
import Image5 from "../assets/5.webp";

const HeroButtons = () => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 1, delay: 0.5 }}
		className="hero-buttons"
	>
		<Link
			as={RouterLink}
			to="/book-session"
			_hover={{ textDecoration: "none" }}
		>
			<Button className="btn-book">Book a Session</Button>
		</Link>
		<Link as={RouterLink} to="/media" _hover={{ textDecoration: "none" }}>
			<Button className="btn-watch" variant="outline" size="lg">
				Watch Messages
			</Button>
		</Link>
	</motion.div>
);

const SlideText = () => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 3 }}
	>
		<Text className="hero-text">
			To influence and transform life holistically
			<br></br>through strategic discipleship and equipment
			<br></br>for a productive Christian life.
		</Text>
		<HeroButtons />
	</motion.div>
);

const SlideContent = ({ image, duration = 1 }) => (
	<div className="each-slide-effect">
		<div
			className="slide-image"
			style={{ backgroundImage: `url(${image})` }}
		>
			<span>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: duration }}
				>
					<SlideText />
				</motion.div>
			</span>
		</div>
	</div>
);

const Example = () => {
	return (
		<div className="hero-slider">
			<Zoom scale={1.4}>
				<SlideContent image={Image} duration={3} />
				<SlideContent image={Image5} />
				<SlideContent image={Image1} />
				<SlideContent image={Image2} />
				<SlideContent image={Image3} />
			</Zoom>
		</div>
	);
};

export default Example;
