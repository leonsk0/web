import PageHeader from "../../components/PageHeader";
import school from '../../assets/images/school.png'

import './styles.css';
import { Link } from "react-router-dom";

export default function RequestLiberation() {

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Visualizar escola"/>

      <div className="form">
      <div className="mainDetails">
        <div className="containerDetails">
        <img className="imageSchoolDetails" src={school} alt="" />

        <div className="containerDescription">
          
        <div id="containerTitle" className="detailsTitle">
            <h2 id="title" className="details-title">EMEF. Pedro Simões</h2>
            <p id="description" className="details-description">Presta incrições para o Ensino Fundamental I, II e Ensino Médio, nos períodos de entre Janeiro e Fevereiro. Vagas Remanescentes não estão disponíveis.</p>
        </div>

          <div className="detailsDescription">       
            <h2 className="details-title">Instruções para inscrição</h2>
            <p className="details-description">Dados para a inscrição nessa instituição: RG, CPF, Comprovante de Residência, Histórico Escolar e Comprovante de Vacinação.</p>
          </div>
          <div className="detailsDescription">       
            <h2 className="details-title">Endereço e contato</h2>
            <span id="address" className="details-description">Endereço: Rua. Marechal Deodoro, 154</span>
            <p className="details-description">Telefone: (13) 99293-1142</p>
          </div>
          <div className="detailsDescription">       
            <h2 className="details-title">Horário de atendimento</h2>
            <p className="details-description">Segunda a Sexta: Das 12:00 ás 18:00</p>
          </div>

          <div className="detailsButton">
            <Link className="linkButton" to='/liberation-confirmation'>Entrar em contato</Link>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}