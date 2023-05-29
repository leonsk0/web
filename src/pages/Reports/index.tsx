import PageHeader from "../../components/PageHeader";

import './styles.css';
import { Link } from "react-router-dom";

export default function Report() {

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Relatório"/>

      <div className="form">
      <div className="mainDetails">
        <div className="containerDetails">

          <div className="containerPersona">
            <div>
              <div className="divPhoto"></div>
            </div>
            <div className="divText">
            <h3>André da Guerra</h3>
            <span>Aluno do 1º do Ensino Médio</span>
            </div>
          </div>

          <div className="containerTextDescription">
            <p>O pedido foi realizado pelo responsável Cleiton da Guerra, pois o garoto quer assistir o neymar ganhar o hexa.</p>
          </div>

          <div className="containerListCart">
            <div className="containerCart">
              <span>Dia</span>
              <p>Segunda</p>
              <span>Horário</span>
              <p>-</p>
            </div>

            <div className="containerCart">
              <span>Dia</span>
              <p>Segunda</p>
              <span>Horário</span>
              <p>-</p>
            </div>

          </div>

      </div>
      </div>
    </div>
    </div>
  );
}