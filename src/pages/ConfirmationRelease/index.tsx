import { Link } from "react-router-dom";
import successIcon from "../../assets/images/icons/success-check-icon.svg";

import styles from "./styles.module.css";

function ConfirmationRelease() {
  return (
    <div className={styles.successPage}>
      <div className={`${styles.successContainer} container`}>
        <div className={styles.successTitleContainer}>
          <img src={successIcon} alt="Ícone de check" />
          <h1>Deseja enviar o relatório?</h1>
        </div>
        <p>
          Será enviado um relatório contendo os dados da liberação do aluno.
        </p>
        <div className={styles.confirmContainer}>
          <Link className="btn btn-dark" to="/demand">
            Não
          </Link>
          <Link className="btn btn-dark" to="/send-report">
            Sim
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationRelease;
