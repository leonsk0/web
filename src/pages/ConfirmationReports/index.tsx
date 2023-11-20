import { Link } from "react-router-dom";
import successIcon from "../../assets/images/icons/success-check-icon.svg";

import styles from "./styles.module.css";

function ConfirmationReports() {
  return (
    <div className={styles.successPage}>
      <div className={styles.successContainer}>
        <div className={styles.successTitleContainer}>
          <img src={successIcon} alt="Ícone de check" />
          <h1>Relatório enviado para o e-mail</h1>
        </div>
        <p>
          O relatório dos pedidos de liberação foram enviados para o e-mail
          cadastrado.
        </p>
        <Link to="/school-list" className="btn btn-dark">
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationReports;
