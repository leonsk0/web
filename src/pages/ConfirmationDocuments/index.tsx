import { Link } from "react-router-dom";
import successIcon from "../../assets/images/icons/success-check-icon.svg";

import styles from "./styles.module.css";

function ConfirmationDocuments() {
  return (
    <div className={styles.successPage}>
      <div className={`${styles.successContainer} container`}>
        <div className={styles.successTitleContainer}>
          <img src={successIcon} alt="Ícone de check" />
          <h1>Solicitação enviada</h1>
        </div>
        <div className={styles.successTextContainer}>
          <p>Enviamos a solicitação a instituição escolhida.</p>
          <p>
            Em breve ela irá retornar o contato pelo e-mail cadastrado na
            plataforma.
          </p>
        </div>

        <Link to="/liberation" className="btn btn-dark">
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationDocuments;
