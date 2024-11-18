/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import HowWeWork from './Components/HowWeWork/HowWeWork';
import Navbar from './Components/Navbar/Navbar';
import WhatsappButton from './Components/WhatsappButton/WhatsappButton';
import Services from './Components/Services/Services';
import Carousel from './Components/Portfolio/Portfolio';
import FAQ from './Components/Faq/Faq';
import Comments from './Components/Comments/Comments';
import ContactForm from './Components/Contact/ContactForm';
import Footer from './Components/Footer/Footer';


function RoutesConfig() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={
                    <>
                        <Home />
                        <Services />
                        <HowWeWork />
                        <Carousel />
                        <FAQ />
                        <Comments />
                        <ContactForm />
                    </>
                } />
            </Routes>

            <Footer />

            <WhatsappButton />
        </>
    );
}

export default RoutesConfig;
