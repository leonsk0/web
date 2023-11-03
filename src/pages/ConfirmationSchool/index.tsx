import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import sucessIcon from "../../assets/images/icons/success-check-icon.svg";

function ConfirmationSchool() {
  return (
    <div className="recovery-success">
      <div className="recovery-background">
        <img src={sucessIcon} alt="Ícone de check" />
        <h1>Cadastro concluído</h1>
        <p>Agora você faz parte da plataforma da Creseri.</p>
        <p>Veja a seguir os pedidos de inscrição para a sua instituição.</p>
        <Link to="/demand" className="btn btn-dark">
          Ver pedidos
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationSchool;
