import './Header.css';
import arrowLeft from '../assets/icons/small-left.png';
import arrowRight from '../assets/icons/small-right.png';


const Header = () => {
    return (
        <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={arrowLeft} alt="Seta esquerda"/>
                    </button>
                    <button className="arrow-right">
                        <img src={arrowRight} alt="Seta direita"/>
                    </button>
                </div>
                <div className="header__search">
                    <img src="./src/assets/icons/search.png" alt=""/>
                    <input type="text" id="search-input" maxlength="800" placeholder="O que você quer ouvir?"/>
                </div>

                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
                
        </nav>
    );
};

export default Header;