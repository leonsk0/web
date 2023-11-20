import { Link } from "react-router-dom";
import successIcon from "../../assets/images/icons/success-check-icon.svg";

import styles from "./styles.module.css";

function LiberationConfirmation() {
  return (
    <div className={styles.successPage}>
      <div className={`${styles.successContainer} container`}>
        <div className={styles.successTitleContainer}>
          <img src={successIcon} alt="Ícone de check" />
          <h1>Pedido de liberação enviado</h1>
        </div>
        <div className={styles.successTextContainer}>
          <p>Enviamos o pedido de liberação para a instituição escolhida.</p>
          <p>
            Em breve ela irá retornar o contato pelo e-mail cadastrado na
            plataforma.
          </p>
        </div>
        <Link to="/report" className="btn btn-dark">
          Ver pedidos
        </Link>
      </div>
    </div>
  );
}

export default LiberationConfirmation;
