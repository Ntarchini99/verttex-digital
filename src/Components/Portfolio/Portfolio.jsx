import { useEffect } from 'react'
import './Portfolio.css'

const CardSlider = () => {
    const cards = [
        { 
            id: 1, 
            img: 'https://i.postimg.cc/yY178Vc9/1.png', 
            title: 'Fourth Seed', 
            subtitle: 'Ver web',
            link: 'http://www.4thseed.us' 
        },
        { 
            id: 2, 
            img: 'https://i.postimg.cc/QM2X81Jx/2.png', 
            title: 'CloudHaven', 
            subtitle: 'Ver web',
            link: 'https://cloudhavenn.netlify.app/' 
        },
        { 
            id: 3, 
            img: 'https://i.postimg.cc/9Mycr0LP/3.png', 
            title: 'BlackLab Strategies', 
            subtitle: 'Ver web',
            link: 'https://blacklabstrategies.netlify.app/home' 
        },
        { 
            id: 4, 
            img: 'https://i.postimg.cc/nVYHxsjp/4.png', 
            title: 'SaborArte', 
            subtitle: 'Ver web',
            link: 'https://saborarrte.netlify.app/' 
        },
        { 
            id: 5, 
            img: 'https://i.postimg.cc/8cDNWGY2/5.png', 
            title: 'Cryptos', 
            subtitle: 'Ver web',
            link: 'https://cryptossoftware.netlify.app/' 
        },
        { 
            id: 6, 
            img: 'https://i.postimg.cc/1tQbs7G9/herreria.png', 
            title: 'Herrería Galván', 
            subtitle: 'Ver sitio web',
            link: 'https://galvanherreria.netlify.app/' 
        },
        { 
            id: 7, 
            img: 'https://i.postimg.cc/44wjR5mg/Screenshot-1.png', 
            title: 'Aidforcoders', 
            subtitle: 'Ver sitio web',
            link: 'https://aidforcoders.tech/' 
        },
    ];

    const duplicatedCards = [...cards, ...cards];

    const handleSubtitleClick = (link) => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    useEffect(() => {
        const cardContainer = document.querySelector('.card-container');
        const cards = document.querySelectorAll('.card');

        const resetScroll = () => {
            if (cardContainer) {
                const firstCardWidth = cardContainer.firstChild.offsetWidth;
                const scrollPosition = cardContainer.scrollLeft;
                const containerWidth = cardContainer.scrollWidth / 2;

                if (scrollPosition >= containerWidth) {
                    cardContainer.scrollLeft = 0;
                }
            }
        };

        const handleMouseMove = (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };

        cardContainer?.addEventListener('scroll', resetScroll);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            cardContainer?.removeEventListener('scroll', resetScroll);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="card-slider" id='portfolio'>
            <div className="card-container">
                {duplicatedCards.map((card, index) => (
                    <div key={`${card.id}-${index}`} className="card">
                        <img src={card.img} alt={card.title} />
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            {card.link ? (
                                <p onClick={() => handleSubtitleClick(card.link)}>
                                    {card.subtitle}
                                </p>
                            ) : (
                                <p>{card.subtitle}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSlider;