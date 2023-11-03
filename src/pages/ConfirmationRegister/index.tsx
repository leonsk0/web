import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import sucessIcon from "../../assets/images/icons/success-check-icon.svg";

function ConfirmationRegister() {
  return (
    <div className="recovery-success">
      <div className="recovery-background">
        <img src={sucessIcon} alt="Ícone de check" />
        <h1>Solicitação de inscrição aprovada</h1>
        <p>Foi encaminhado uma mensagem ao responsável.</p>
        <p>Termine o cadastro do aluno.</p>
        <Link to="/register-student" className="btn btn-dark">
          Continuar
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationRegister;
