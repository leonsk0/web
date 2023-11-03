import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import sucessIcon from "../../assets/images/icons/success-check-icon.svg";

function ConfirmationReport() {
  return (
    <div className="recovery-success">
      <div className="recovery-background">
        <img src={sucessIcon} alt="Ícone de check" />
        <h1>Relatório enviado</h1>
        <p>Foi enviado o relatório ao responsável</p>
        <Link to="/dashboard" className="btn btn-dark">
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationReport;
