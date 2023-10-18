import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import './Navbar.css'
import "aos/dist/aos.css";
import AOS from "aos";

import Logo from "../assets/long.png"

const Navbar = () => {
    //useEffect
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    const ScrollToTop = () => {
        scroll.scrollToTop();
    }


    return (
        <div>


            <div className='header'>
                <nav className='navbar'>
                    <Link to="/" spy={true} smooth={true} offset={50} duration={500} className='logo'>
                        <img onClick={ScrollToTop} src={Logo} alt="Logo" height={170} width={170} />

                    </Link>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: 'red' }} />)
                            : (<FaBars size={30} style={{ color: 'red' }} />)}

                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {/* <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li> */}
                        <li className='nav-item'>
                            <Link to="/" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>HOME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>ABOUT</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/books" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>BOOKS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/articles" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>ARTICLES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/media" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>MEDIA</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
