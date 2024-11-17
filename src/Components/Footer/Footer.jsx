/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="logo-container">
                        <h2 className="logo-text">Vertex Digital</h2>
                    </div>
                    <div className="contact-info">
                        <p>verttexagenciadigital@gmail.com</p>
                        <p>+543484365436</p>
                    </div>
                </div>
                <div className="responsive">
                    <div className="footer-section">
                        <h3>Enlaces rápidos</h3>
                        <ul>
                            <li><a href="#preguntas">Preguntas frecuentes</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                            <li><a href="#privacidad">Políticas de privacidad</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
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