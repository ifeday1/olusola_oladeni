import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "aos/dist/aos.css";
import AOS from "aos";

import Logo from "../assets/logo.svg";

const Navbar = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	const ScrollToTop = () => {
		scroll.scrollToTop();
	};

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Books", path: "/books" },
		{ name: "Articles", path: "/articles" },
		{ name: "Feeds", path: "/feeds" },
		{ name: "Media", path: "/media" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<div className="header">
			<nav className="navbar">
				<Link to="/" className="logo" onClick={ScrollToTop}>
					<img src={Logo} alt="Logo" height={70} width={120} />
				</Link>

				<div className="hamburger" onClick={handleClick}>
					{click ? (
						<FaTimes size={30} style={{ color: "#333333" }} />
					) : (
						<FaBars size={30} style={{ color: "#333333" }} />
					)}
				</div>

				<ul className={click ? "nav-menu active" : "nav-menu"}>
					{navLinks.map((link, index) => (
						<li key={index} className="nav-item">
							<NavLink
								to={link.path}
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
								onClick={closeMenu}
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link"
								}
							>
								{link.name.toUpperCase()}
							</NavLink>
						</li>
					))}

					<li className="nav-item mobile-cta">
						<Link
							to="/book-session"
							className="btn-cta"
							onClick={closeMenu}
						>
							Book a Session
						</Link>
					</li>
				</ul>

				{/* Desktop CTA Button */}
				<div className="nav-cta-desktop">
					<Link to="/book-session" className="btn-cta">
						Book a Session
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
