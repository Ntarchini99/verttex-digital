import './WhatsappButton.css';
import logowhatsapp from '../../assets/icons/wsp.png';

const WhatsappButton = () => {
    return (
        <div className="whatsapp-container">
            <a
                href="https://api.whatsapp.com/send?phone=3484365436"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat por WhatsApp"
            >
                <img src={logowhatsapp} alt="WhatsApp" />
                <span className="whatsapp-hover-text">¡Escríbenos directo por aquí!</span>
            </a>
        </div>
    );
};

export default WhatsappButton;
