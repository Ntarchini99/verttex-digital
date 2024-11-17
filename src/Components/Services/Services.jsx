import './Services.css';
import numero01 from '../../assets/img/uno.png';
import numero02 from '../../assets/img/dos.png';
import numero03 from '../../assets/img/tres.png';
import numero04 from '../../assets/img/cuatro.png';
import img01 from '../../assets/img/uxui.png';
import img02 from '../../assets/img/cm.png';
import img03 from '../../assets/img/web.png';
import img04 from '../../assets/img/grafic.png';

const Services = () => {
    const sections = [
        {
            title: "Diseño UX UI",
            description: "Experiencias digitales que impulsan tu negocio. Nuestro enfoque en el diseño centrado en el usuario te garantiza que tu sitio web no solo se vea bien, sino que también sea altamente efectivo. Con un diseño responsivo, navegación sencilla y contenido personalizado, haremos que tu marca destaque en línea.",
            imgSrc: img01,
            numberImg: numero01,
            startText: "Comenzar"
        },
        {
            title: "Community Manager",
            description: "Creamos sitios web optimizados para el rendimiento y la accesibilidad, asegurando que tu marca esté al alcance de todos los usuarios en cualquier dispositivo.",
            imgSrc: img02,
            numberImg: numero02,
            startText: "Comenzar Desarrollo Web"
        },
        {
            title: "Desarrollo Web",
            description: "Estrategias digitales personalizadas que aumentan la visibilidad y el alcance de tu negocio en línea, logrando una conexión auténtica con tus clientes.",
            imgSrc: img03,
            numberImg: numero03,
            startText: "Comenzar Marketing Digital"
        },
        {
            title: "Diseño gráfico",
            description: "Construimos una identidad de marca sólida y coherente, destacando tus valores y conectando emocionalmente con tu audiencia.",
            imgSrc: img04,
            numberImg: numero04,
            startText: "Comenzar Branding"
        }
    ];

    return (
        <div className="uxui-container" id='services'>
            {sections.map((section, index) => (
                <section
                    key={index}
                    className={`uxui-design ${index % 2 !== 0 ? 'reverse' : ''}`}
                >
                    <div className="uxui-text">
                        <div className="uxui-header">
                            <img src={section.numberImg} alt={`Número ${index + 1}`} className="uxui-number-img" />
                            <h3>{section.startText}</h3>
                        </div>
                        <h1>{section.title}</h1>
                        <p>{section.description}</p>
                        <a href="#" className="uxui-more-info">Más info</a>
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
