/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './Portfolio.css';

const CardSlider = () => {
    const cards = [
        { id: 1, img: 'https://i.postimg.cc/yY178Vc9/1.png', title: 'Fourth Seed', subtitle: 'Subtitle 1' },
        { id: 2, img: 'https://i.postimg.cc/QM2X81Jx/2.png', title: 'CloudHave', subtitle: 'Ver web' },
        { id: 3, img: 'https://i.postimg.cc/9Mycr0LP/3.png', title: 'BlackLab Strategies', subtitle: 'Ver web' },
        { id: 4, img: 'https://i.postimg.cc/nVYHxsjp/4.png', title: 'SaborArte', subtitle: 'Ver web' },
        { id: 5, img: 'https://i.postimg.cc/8cDNWGY2/5.png', title: 'Cryptos', subtitle: 'Ver web' },
        { id: 6, img: 'https://i.postimg.cc/VvR1WTQd/6.png', title: 'Verttex', subtitle: 'Ver web' },
    ];

    const duplicatedCards = [...cards, ...cards];

    useEffect(() => {
        const cardContainer = document.querySelector('.card-container');

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

        cardContainer?.addEventListener('scroll', resetScroll);

        return () => {
            cardContainer?.removeEventListener('scroll', resetScroll);
        };
    }, []);

    return (
        <div className="card-slider" id='portfolio'>
            <div className="card-container">
                {duplicatedCards.map((card, index) => (
                    <div key={`${card.id}-${index}`} className="card">
                        <img src={card.img} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSlider;