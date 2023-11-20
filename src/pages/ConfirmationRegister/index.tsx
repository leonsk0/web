import { Link } from "react-router-dom";
import successIcon from "../../assets/images/icons/success-check-icon.svg";

import styles from "./styles.module.css";

function ConfirmationRegister() {
  return (
    <div className={styles.successPage}>
      <div className={`${styles.successContainer} container`}>
        <div className={styles.successTitleContainer}>
          <img src={successIcon} alt="Ícone de check" />
          <h1>Solicitação de inscrição aprovada</h1>
        </div>
        <div className={styles.successTextContainer}>
          <p>Foi encaminhado uma mensagem ao responsável.</p>
          <p>Termine o cadastro do aluno.</p>
        </div>

        <Link to="/register-student" className="btn btn-dark">
          Continuar
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationRegister;
