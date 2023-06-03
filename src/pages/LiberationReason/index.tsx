import { useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";

import './styles.css';
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";

export default function LiberationReason() {

  const [motivo, setMotivo] = useState('');

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Envio de mensagem"/>
      <div className="containerContent">
        <h2>Descreva os próximos passos que o responsável precisará fazer a seguir para confirmar a liberação do aluno</h2>
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

          <div className='inputs-container'>
          <div className='inputs'>
        <FormInput
            label='Descreva os próximos passos ao responsável'
            onChange={(e) => {
              setMotivo(e.target.value);
            }}
            value={motivo}
            isPassword={false}
          />
        </div>
        </div>

          <footer>
            <div>
            <span>Data da solicitação:</span>
            <span>08/12/2022</span>
            </div>
            <Link to='/confirmation-reason'>Concluir aprovação</Link>
          </footer>
      </div>
      </div>
    </div>
    </div>
  );
}