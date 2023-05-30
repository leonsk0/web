import { useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";

import './styles.css';
import { Link } from "react-router-dom";

export default function LiberationRequest() {

  const [motivo, setMotivo] = useState('');

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Relatório"/>
      <div className="containerContent">
        <h2>Descreva os motivos para liberar o aluno da aula atual</h2>
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
            <span>Responsável: Cleiton da Guerra</span>
            </div>
          </div>

          <div className="containerTextDescription">
          <Input
              name="bio"
              label="Motivo"
              value={motivo}
              onChange={(e) => { setMotivo(e.target.value) }}
            />
          </div>

          <footer>
            <div>
            <span>Data da solicitação:</span>
            <span>08/12/2022</span>
            </div>
            <Link to='/confirmation'>Pedir liberação</Link>
          </footer>
      </div>
      </div>
    </div>
    </div>
  );
}