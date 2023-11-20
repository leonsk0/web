import { Link } from "react-router-dom";
import successIcon from "../../assets/images/icons/success-check-icon.svg";

import styles from "./styles.module.css";

function ConfirmationReport() {
  return (
    <div className={styles.successPage}>
      <div className={`${styles.successContainer} container`}>
        <div className={styles.successTitleContainer}>
          <img src={successIcon} alt="Ícone de check" />
          <h1>Relatório enviado</h1>
        </div>
        <p>Foi enviado o relatório ao responsável</p>
        <Link to="/dashboard" className="btn btn-dark">
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationReport;
