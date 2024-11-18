/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/icons/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo-section">
                    <div className="logo-container">
                        <a href="/">
                            <img src={logo} alt="Logo" className="logo-image" />
                        </a>
                        <h2 className="logo-text">Vertex Digital</h2>
                    </div>
                    <div className="contact-info">
                        <p>+543484365436</p>
                        <p>verttexagenciadigital@gmail.com</p>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h3>Enlaces rápidos</h3>
                        <ul>
                            <li><a href="#preguntas">Preguntas frecuentes</a></li>
                            <li><a href="#privacidad">Políticas de privacidad</a></li>
                        </ul>
                    </div>
                    <div className="footer-section hide-on-small">
                        <h3>Más sobre Vertex</h3>
                        <ul>
                            <li><a href="#portfolio">Portafolio</a></li>
                            <li><a href="#trabajemos">Trabajemos juntos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
