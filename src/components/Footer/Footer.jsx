import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
	return (
		<section className="footer-section">
			<div className="footer-container">
				{/* About & logo */}
				<div className="footer-about">
					<div className="footer-brand">
						<div className="footer-logo">
							<Link to="/home">
								<img src={Logo} alt="Logo" />
							</Link>
						</div>

						<p className="footer-tagline">
							To influence, build, and transform the total person. To
							facilitate life-changing programmes through teaching,
							training and counselling.
						</p>
					</div>
				</div>

				{/* Useful Links */}
				<div className="footer-links">
					<h4 className="footer-heading">Useful Links</h4>
					<ul className="footer-list">
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/books">Books</Link>
						</li>
						<li>
							<Link to="/media">Media</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				{/* Support */}
				<div className="footer-support">
					<h4 className="footer-heading">Support</h4>
					<ul className="footer-list">
						<li>
							<Link to="/privacy">Privacy Policy</Link>
						</li>
						<li>
							<Link to="/terms">Terms and Conditions</Link>
						</li>
					</ul>
				</div>

				{/* Contact info */}
				<div className="footer-contact">
					<h4 className="footer-heading">Get in touch</h4>
					<ul className="footer-list">
						<li>
							<a href="mailto:oladeni2008@yahoo.com">
								<FaEnvelope className="footer-icon" />
								oladeni2008@yahoo.com
							</a>
						</li>
						<li>
							<a href="tel:+23408034498307">
								<FaPhone className="footer-icon" />
								+234 803 4498 307
							</a>
						</li>
						<li>
							<span>
								<FaMap className="footer-icon" />
								5, Adebayo Adekoya Street New Garage Bariga,
								Lagos
							</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				<p>
					Designed & Developed by{" "}
					<a
						href="https://web-portfilo-git-master-ifeday1.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ifeday Concepts
					</a>
				</p>
			</div>
		</section>
	);
};

export default Footer;
