import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import sucessIcon from "../../assets/images/icons/success-check-icon.svg";

function ConfirmationDocuments() {
  return (
    <div className="recovery-success">
      <div className="recovery-background">
        <img src={sucessIcon} alt="Ícone de check" />
        <h1>Solicitação enviada</h1>
        <p>Enviamos a solicitação a instituição escolhida.</p>
        <p>
          Em breve ela irá retornar o contato pelo e-mail cadastrado na
          plataforma.
        </p>
        <Link to="/liberation" className="btn btn-dark">
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationDocuments;
