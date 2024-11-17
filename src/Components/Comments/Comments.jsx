/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Comments.css'

const Comments = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            stars: 5,
            title: "Profesionalismo y calidad",
            content: "Verttex es una agencia digital excepcional. Su equipo de expertos en UX/UI, diseño gráfico y desarrollo web entregó un proyecto innovador y funcional que superó nuestras expectativas. Su profesionalismo y atención al detalle son incomparables. ¡Altamente recomendables!",
            author: "Chris López",
            date: "01 Agosto de 2024",
            avatar: "/api/placeholder/40/40"
        },
        {
            stars: 5,
            title: "Soluciones Innovadoras",
            content: "Verttex nos ayudó a transformar nuestra presencia digital con un diseño moderno y experiencia de usuario intuitiva. ¡Gracias por la dedicación y compromiso!",
            author: "Roberto Flores",
            date: "27 Julio de 2023",
            avatar: "/api/placeholder/40/40"
        },
        {
            stars: 5,
            title: "Servicio Integral",
            content: "Encontramos en Verttex una agencia integral que cubrió todas nuestras necesidades digitales: diseño, desarrollo y comunidad. Su equipo es amable, eficiente y siempre dispuesto ayudar. ¡Excelente elección para cualquier negocio!",
            author: "Daniel Cardenas",
            date: "12 Diciembre de 2023",
            avatar: "/api/placeholder/40/40"
        },
        {
            stars: 5,
            title: "Resultados orientados",
            content: "Verttex nos ayudó a aumentar nuestra presencia en redes sociales y mejorar nuestra conversión gracias a su estrategia de comunidad y diseño UX/UI. Sus resultados son tangibles y su compromiso admirable. ¡Los recomiendo sin dudarlo!",
            author: "Carla Orozco",
            date: "10 Mayo de 2024",
            avatar: "/api/placeholder/40/40"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="testimonialsContainer">
            <h1 className="testimonialsTitle">¿Qué opinan de nosotros?</h1>

            <div className="testimonials-wrapper">
                <button className="nav-button prev" onClick={prevSlide}>
                    ←
                </button>
                <button className="nav-button next" onClick={nextSlide}>
                    →
                </button>

                <div className="testimonialsGrid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`testimonialCard ${index === currentIndex ? 'active' : ''}`}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            <div className="stars">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <h3 className="testimonialTitle">{testimonial.title}</h3>
                            <p className="testimonialContent">{testimonial.content}</p>
                            <div className="testimonialAuthor">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="authorAvatar"
                                />
                                <div className="authorInfo">
                                    <p className="authorName">{testimonial.author}</p>
                                    <p className="testimonialDate">{testimonial.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="page-indicators">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comments;