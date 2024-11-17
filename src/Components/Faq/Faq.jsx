/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './FAQ.css';
import profileImage from '../../assets/img/faq-image.png';

const FAQItem = ({ question, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className="faq-question">
                <span>{question}</span>
                <span className="arrow">{isOpen ? '▼' : '▼'}</span>
            </div>
            <div className="faq-answer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        "¿Qué servicios ofreces?",
        "¿Cuánto tiempo lleva un proyecto web típico?",
        "¿Ofrecen servicios de mantenimiento?",
        "¿Cuál es su proceso de diseño?"
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
                    {questions.map((question, index) => (
                        <FAQItem
                            key={index}
                            question={question}
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