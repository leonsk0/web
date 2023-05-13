import "./styles.css"
import logo from '../../assets/images/icons/logo-icon.svg'
import arrowButton from '../../assets//images/icons/arrow-button.svg';
import landingImg from '../../assets/images/hero-image.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
   <div id="page-landing">
    <div id="page-landing-content" className="container">

      <div className="title">
        <div className="logoContainer">
        <img src={logo} alt="Logo Creseri" className="logo" />
        </div>
        <h1>A plataforma amiga dos pais.</h1>
        <span>Matricule seu filho sem precisar sair do conforto de sua casa.</span>
        <div className="buttons">
          <Link to="/responsible" className="subscribe">Inscreva-se</Link>
          <Link to="/school" className="school">Instituições <img src={arrowButton} alt="Ícone de flecha" /></Link>
        </div>
      </div>

      <div className='image'>
        <img src={landingImg} alt="Imagem da página principal" className="hero-image" />
      </div>
      
    </div>
   </div>
  );
}

export default Landing;