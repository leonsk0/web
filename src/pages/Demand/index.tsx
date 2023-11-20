import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import fileIcon from "../../assets/images/icons/file-icon.svg";

import styles from "./styles.module.css";

export default function Demand() {
  return (
    <div id={styles.demandPage}>
      <PageHeader
        title="Análise de documentos"
        children={
          <p>
            <strong>
              Estes são os resultados dos pedidos de cadastro na instituição
            </strong>
          </p>
        }
      />

      <div className={`${styles.demandContainer} container`}>
        <div className={styles.demandCard}>
          <div className={styles.demandCardContent}>
            <div className={styles.containerPersona}>
              <div>
                <div className={styles.divPhoto}></div>
              </div>
              <div className={styles.divText}>
                <h3>André da Guerra</h3>
                <span>Escolaridade: Fundamental Completo</span>
                <span>Responsável: Cleiton da Guerra</span>
              </div>
            </div>
            <div className={styles.containerTextDescription}>
              <p className={styles.textDescription}>
                Envie os documentos necessários para a matrícula na instituição
                a seguir:
              </p>
            </div>
            <div className={styles.containerPhoto}>
              <div className={styles.containerSendImagem}>
                <div className={styles.imageSendWrapper}>
                  <img src={fileIcon} alt="Ícone de documento" />
                  <span className={styles.imageSendName}>rg.png</span>
                </div>
              </div>
            </div>
            <div className={styles.containerPhoto}>
              <div className={styles.containerSendImagem}>
                <div className={styles.imageSendWrapper}>
                  <img src={fileIcon} alt="Ícone de documento" />
                  <span className={styles.imageSendName}>cpf.png</span>
                </div>
              </div>
            </div>
            <div className={styles.containerPhoto}>
              <div className={styles.containerSendImagem}>
                <div className={styles.imageSendWrapper}>
                  <img src={fileIcon} alt="Ícone de documento" />
                  <span className={styles.imageSendName}>
                    comprovante_de_residencia.png
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.submitContainer}>
            <Link className={styles.recuseRegister} to="">
              Recusar cadastro
            </Link>
            <Link to="/confirmation-register">Aceitar cadastro</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
