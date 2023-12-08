import PageHeader from "../../components/PageHeader";
import './styles.css';
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { useState } from "react";

export default function RegisterStudent() {
  const [escolaridade, setEscolaridade] = useState('');
  const [local, setLocal] = useState('');
  const [sala, setSala] = useState('');
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
            <p className="containerTextP">Escolha o nível escolar, local da instituição e sala para ingressar o aluno.</p>
          </div>

          <div className='inputs-container'>
          <div className='inputs'>
        <FormInput
            label='Escolaridade'
            onChange={(e) => {
              setEscolaridade(e.target.value);
            }}
            value={escolaridade}
            isPassword={false}
          />
          <FormInput
            label='Local da instituição'
            onChange={(e) => {
              setLocal(e.target.value);
            }}
            value={local}
            isPassword={false}
          />
          <FormInput
            label='Sala'
            onChange={(e) => {
              setSala(e.target.value);
            }}
            value={sala}
            isPassword={false}
          />
        </div>
        </div>

          <footer>
          <div>
            <span>Data da solicitação:</span>
            <span>09/12/2023</span>
            </div>
            <Link to='/confirmation-student'>Aceitar cadastro</Link>
          </footer>
      </div>
      </div>
    </div>
    </div>
  );
}