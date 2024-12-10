import './Services.css';
import numero01 from '../../assets/img/uno.png';
import numero02 from '../../assets/img/dos.png';
import numero03 from '../../assets/img/tres.png';
import numero04 from '../../assets/img/cuatro.png';
import img01 from '../../assets/img/uxui.png';
import img02 from '../../assets/img/cm.png';
import img03 from '../../assets/img/web.png';
import img04 from '../../assets/img/grafic.png';
import { useEffect } from 'react';

const Services = () => {
    const sections = [
        {
            title: "Diseño UX UI",
            description: "Experiencias digitales que impulsan tu negocio...",
            imgSrc: img01,
            numberImg: numero01,
            startText: "IMPULSA TU NEGOCIO"
        },
        {
            title: "Community Manager",
            description: "Gestión estratégica de redes sociales...",
            imgSrc: img02,
            numberImg: numero02,
            startText: "DOMINA LAS REDES SOCIALES"
        },
        {
            title: "Desarrollo Web",
            description: "Sitios web y aplicaciones personalizadas...",
            imgSrc: img03,
            numberImg: numero03,
            startText: "CODIFICAMOS TUS SUEÑOS"
        },
        {
            title: "Diseño gráfico",
            description: "Creación de soluciones visuales atractivas...",
            imgSrc: img04,
            numberImg: numero04,
            startText: "ILUSTRAMOS TUS PENSAMIENTOS"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        const sections = document.querySelectorAll('.uxui-design');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="uxui-container" id="services">
            {sections.map((section, index) => (
                <section
                    key={index}
                    className={`uxui-design hidden ${index % 2 !== 0 ? 'reverse' : ''}`}
                >
                    <div className="uxui-text">
                        <div className="uxui-header">
                            <img src={section.numberImg} alt={`Número ${index + 1}`} className="uxui-number-img" />
                            <h3>{section.startText}</h3>
                        </div>
                        <h1>{section.title}</h1>
                        <p>{section.description}</p>
                        <a href="#contact" className="uxui-more-info">Más info</a>
                    </div>
                    <div className="uxui-image">
                        <img src={section.imgSrc} alt={section.title} />
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Services;
