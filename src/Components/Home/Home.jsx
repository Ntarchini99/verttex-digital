/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css';
import arrowIcon from '../../assets/icons/arrow.png';
import instagramIcon from '../../assets/icons/instagram.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import facebookIcon from '../../assets/icons/facebook.png';

function Home() {
    return (
        <section className="home">
            <div className="home-content">
                <h1 className="home-title">Eleva tu presencia digital</h1>
                <p className="home-subtitle">¿Estás listo para que tu negocio destaque en el mundo digital? Creamos experiencias digitales excepcionales a través
                    de desarrollo web innovador, diseño cuativador y gestión estratégica de redes sociales  que  capturen la atención de   tus visitantes  impulsando tus ventas. </p>
                <button className="home-button">Escribenos</button>
            </div>
            <div className="home-arrow">
                <a href="#how"><img src={arrowIcon} alt="Flecha" className="arrow-icon" /></a>
            </div>
            <div className="social-sidebar">
                <a href="https://www.instagram.com/verttexdigital/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/company/verttexagenciadigital" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://www.facebook.com/verttexagenciademarketingdigital" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="social-icon" />
                </a>
            </div>
        </section>
    );
}

export default Home;
