import PageHeader from "../../components/PageHeader";

import './styles.css';
import { Link } from "react-router-dom";

export default function Report() {

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Relatório"/>
      <div className="containerContent">
        <h2>Estes são os resultados dos pedidos de liberação do aluno André da Guerra</h2>
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
            <span>Aluno do 1º do Ensino Médio</span>
            </div>
          </div>

          <div className="containerTextDescription">
            <p className="containerTextP">O pedido foi realizado pelo responsável Cleiton da Guerra, pois o garoto quer assistir o neymar ganhar o hexa.</p>
          </div>

          <div className="containerListCart">
            <div className="containerCart">
              <span className="spanCart">Dia</span>
              <p className="pCart">Segunda</p>
              <span className="spanCart">Horário</span>
              <p className="pCart">-</p>
            </div>

            <div className="containerCart">
              <span className="spanCart">Dia</span>
              <p className="pCart">Terça</p>
              <span className="spanCart">Horário</span>
              <p className="pCart">-</p>
            </div>

            <div className="containerCart">
              <span className="spanCart">Dia</span>
              <p className="pCart">Quarta</p>
              <span className="spanCart">Horário</span>
              <p className="pCart">-</p>
            </div>

            <div id="containerCart" className="containerCart">
              <span id="spanCart" className="spanCart">Dia</span>
              <p id="pCart" className="pCart">Quinta</p>
              <span id="spanCart" className="spanCart">Horário</span>
              <p id="pCart" className="pCart">8h - 18h</p>
            </div>

            <div className="containerCart">
              <span className="spanCart">Dia</span>
              <p className="pCart">Sexta</p>
              <span className="spanCart">Horário</span>
              <p className="pCart">-</p>
            </div>
          </div>

          <footer>
            <div>
            <span>Data da solicitação:</span>
            <span>08/12/2022</span>
            </div>
            <Link to='/confirmation-report'>Baixar relatório</Link>
          </footer>
      </div>
      </div>
    </div>
    </div>
  );
}