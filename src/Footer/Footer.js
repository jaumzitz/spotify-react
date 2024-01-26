import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="footer-premium__content">
                <span className="text title">Testar o premium de graça</span>
                <span className="text subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</span>
            </div>
            <button className="footer-premium__button">
                <span>Inscreva-se grátis</span>
            </button>
        </footer>
    );
};

export default Footer;