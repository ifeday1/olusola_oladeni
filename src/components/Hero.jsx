import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import BackgroundImage from "../assets/background.png";
import HeroImage from "../assets/hero.png";

const Hero = () => {
	return (
		<section className="hero">
			{/* Background Image */}
			<div
				className="hero-background"
				style={{ backgroundImage: `url(${BackgroundImage})` }}
			/>

			{/* Gradient Overlay */}
			<div className="hero-overlay" />

			{/* Hero Content */}
			<div className="hero-content">
				{/* Text Section - Left Side */}
				<div className="hero-text-container">
					<div className="hero-slide-up" style={{ animationDelay: "0.3s" }}>
						<h1 className="hero-title">
							To influence and transform life holistically through
							strategic discipleship and equipment for a productive
							Christian life.
						</h1>
					</div>

					<div className="hero-slide-up" style={{ animationDelay: "0.5s" }}>
						<p className="hero-subtitle">
							Through strategic discipleship and equipment, we are raising
							an army of kingdom transformers to impact this generation
							with the message of God's love and power.
						</p>
					</div>

					<div className="hero-slide-up" style={{ animationDelay: "0.7s" }}>
						<div className="hero-buttons">
							<Link to="/media" className="hero-link">
								<button className="hero-btn-outline">
									Watch Messages
								</button>
							</Link>
							<Link to="/book-session" className="hero-link">
								<button className="hero-btn-primary">
									Book a Session
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Image Section - Right Side */}
				<div className="hero-image-wrapper">
					<div
						className="hero-slide-right"
						style={{ animationDelay: "0.3s" }}
					>
						<img
							src={HeroImage}
							alt="Reverend Dr. Olusola Oladeni"
							className="hero-image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
