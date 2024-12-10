/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/icons/logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">
                    <img src={logo} alt="Logo" className="logo-image" />
                </a>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </button>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="/" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
                <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
                <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>Faq</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;