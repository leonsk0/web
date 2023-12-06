import { Link } from "react-router-dom";
import successIcon from "../../assets/images/icons/success-check-icon.svg";

import styles from "./styles.module.css";

function ConfirmationStudent() {
  return (
    <div className={styles.successPage}>
      <div className={`${styles.successContainer} container`}>
        <div className={styles.successTitleContainer}>
          <img src={successIcon} alt="Ícone de check" />
          <h1>Cadastro do aluno realizado</h1>{" "}
        </div>
        <p>O aluno foi cadastrado na instituição com sucesso.</p>
        <Link to="/release" className="btn btn-dark">
          Ver pedidos de liberação
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationStudent;
