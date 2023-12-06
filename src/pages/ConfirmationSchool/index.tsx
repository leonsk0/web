import { Link } from "react-router-dom";
import successIcon from "../../assets/images/icons/success-check-icon.svg";

import styles from "./styles.module.css";

function ConfirmationSchool() {
  return (
    <div className={styles.successPage}>
      <div className={`${styles.successContainer} container`}>
        <div className={styles.successTitleContainer}>
          <img src={successIcon} alt="Ícone de check" />
          <h1>Cadastro concluído</h1>
        </div>
        <div className={styles.successTextContainer}>
          <p>Agora você faz parte da plataforma da Creseri.</p>
          <p>Veja a seguir os pedidos de inscrição para a sua instituição.</p>
        </div>
        <Link to="/demand" className="btn btn-dark">
          Ver pedidos
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationSchool;
