/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Faq.css';
import profileImage from '../../assets/img/faq-image.png';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className="faq-question">
                <span>{question}</span>
                <span className="arrow">{isOpen ? '▼' : '▶'}</span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "¿Qué servicios ofreces?",
            answer: "Ofrecemos servicios de desarrollo web, diseño gráfico, diseño UX UI y gestión de redes sociales adaptados a cada negocio o empresa."
        },
        {
            question: "¿Cuánto tiempo lleva un proyecto web típico?",
            answer: "Los plazos de los proyectos varían segun la complejidad del mismo. Un sitio web simple puede llevar de 2 a 4 semanas, mientras que los mas complejos pueden demorar de 2 a 3 meses."
        },
        {
            question: "¿Ofrecen servicios de mantenimiento?",
            answer: "Sí, ofrecemos paquetes de mantenimiento continuo para  mantener tu sitio web seguro, actualizado y funcionando de manera óptima."
        },
        {
            question: "¿Cuál es su proceso de diseño?",
            answer: "Nuestro proceso incluye una fase de investigación, creación de wireframes, conceptos de diseño, pruebas de usabilidad, e implementación final con retroalimentación del cliente en cada etapa"
        }
    ];

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container" id='faq'>
            <div className="faq-profile">
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
            </div>
            <div className="faq-content">
                <h1>Preguntas Frecuentes</h1>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
