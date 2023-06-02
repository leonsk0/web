import PageHeader from "../../components/PageHeader";
import fileIcon from '../../assets/images/icons/file-icon.svg';
import './styles.css';
import { Link } from "react-router-dom";

export default function Demand() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Análise de documentos"/>
      <div className="containerContent">
        <h2>Estes são os resultados dos pedidos de cadastro na instituição</h2>
      </div>

      <div className="form">
      <div className="mainDetails">
        <div className="containerDetails">

          <div className="containerPersona">
            <div>
              <div className="divPhoto"></div>
            </div>
            <div className="divText">
            <h3>André da Guerra</h3>
            <span>Escolaridade: Fundamental Completo</span>
            <span>Responsável: Cleiton da Guerra</span>
            </div>
          </div>

          <div className="containerTextDescription">
            <p className="containerTextP">Envie os documentos necessários para a matrícula na instituição a seguir:</p>
          </div>

          <div className="containerPhoto">
            <div className="containerSendImagem">
            <div className="imageSendWrapper">
              <img className="iconSendPhoto" src={fileIcon} alt='Ícone de documento' />
              <span className="imageSendName">rg.png</span>
            </div>
          </div>
          </div>

          <div className="containerPhoto">
            <div className="containerSendImagem">
            <div className="imageSendWrapper">
              <img className="iconSendPhoto" src={fileIcon} alt='Ícone de documento' />
              <span className="imageSendName">cpf.png</span>
            </div>
          </div>
          </div>

          <div className="containerPhoto">
            <div className="containerSendImagem">
            <div className="imageSendWrapper">
              <img className="iconSendPhoto" src={fileIcon} alt='Ícone de documento' />
              <span className="imageSendName">comprovante_de_residencia.png</span>
            </div>
          </div>
          </div>

          <footer>
            <Link id="recuse" to=''>Recusar cadastro</Link>
            <Link to='/confirmation-register'>Aceitar cadastro</Link>
          </footer>
      </div>
      </div>
    </div>
    </div>
  );
}