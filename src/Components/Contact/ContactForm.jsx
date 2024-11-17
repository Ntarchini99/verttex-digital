/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';

const ContactForm = () => {
    const [state, handleSubmit, reset] = useForm("mzzbgele");

    useEffect(() => {
        if (state.succeeded) {
            toast.success('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            setTimeout(() => {
                reset();
            }, 1000);  
        }
        if (state.errors && state.errors.length > 0) {
            toast.error('Hubo un error al enviar el formulario. Intenta nuevamente.');
        }
    }, [state.succeeded, state.errors, reset]);

    return (
        <div className="contact-container" id='contact'>
            <div className="form-section">
                <h1 className="title">¡Hablemos de tu <br />proyecto!</h1>
                <span className="subtitle">Contáctanos</span>
            </div>

            <div className="form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ingresa tu nombre"
                        className="form-input"
                        required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                    <input
                        type="email"
                        name="email"
                        placeholder="Ingresa email"
                        className="form-input"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <select name="service" className="form-input" defaultValue="" required>
                        <option value="" disabled>Servicio de interés</option>
                        <option value="sitio-web">Sitio Web</option>
                        <option value="diseno-ux-ui">Diseño UX/UI</option>
                        <option value="diseno-grafico">Diseño Gráfico</option>
                        <option value="community-manager">Community Manager</option>
                    </select>
                    <ValidationError prefix="Service" field="service" errors={state.errors} />

                    <textarea
                        name="message"
                        placeholder="Déjanos tu consulta"
                        className="form-textarea"
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <button type="submit" className="submit-button" disabled={state.submitting}>
                        Enviar
                    </button>
                </form>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
            />
        </div>
    );
};

export default ContactForm;
