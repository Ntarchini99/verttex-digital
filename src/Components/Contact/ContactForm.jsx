/* eslint-disable no-unused-vars */
import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="contact-container" id='contact'>
            <div className="form-section">
                <h1 className="title">¡Hablemos de tu <br />proyecto!</h1>
                <span className="subtitle">Contáctanos</span>
            </div>

            <div className="form-wrapper">
                <form className="contact-form">
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="form-input"
                    />

                    <input
                        type="email"
                        placeholder="Ingresa email"
                        className="form-input"
                    />

                    <select className="form-input" defaultValue="">
                        <option value="" disabled>Servicio de interés</option>
                        <option value="service1">Servicio 1</option>
                        <option value="service2">Servicio 2</option>
                        <option value="service3">Servicio 3</option>
                    </select>

                    <textarea
                        placeholder="Déjanos tu consulta"
                        className="form-textarea"
                    />

                    <button type="submit" className="submit-button">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;