import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import school from "../../assets/images/school.png";

import styles from "./styles.module.css";

export default function RequestLiberation() {
  return (
    <div id={styles.detailsSchoolPage}>
      <PageHeader title="Visualizar escola" />

      <div className={`${styles.detailsSchoolContainer} container`}>
        <div className={styles.detailsSchoolCard}>
          <div className={styles.detailsSchoolCardContent}>
            <img className={styles.imageSchoolDetails} src={school} alt="" />

            <div className={styles.containerDescription}>
              <div className={styles.containerTitle}>
                <h2 className={styles.schoolTitle}>EMEF. Alfredo</h2>
                <p className={styles.detailsDescription}>
                  Presta inscrições para o Ensino Fundamental I, II e Ensino
                  Médio, nos períodos de entre Janeiro e Fevereiro. Vagas
                  Remanescentes não estão disponíveis.
                </p>
              </div>

              <div className="containerAdditionalInfo">
                <h2 className={styles.additionalInfoTitle}>
                  Instruções para inscrição
                </h2>
                <p className={styles.detailsDescription}>
                  Dados para a inscrição nessa instituição: RG, CPF, Comprovante
                  de Residência, Histórico Escolar e Comprovante de Vacinação.
                </p>
              </div>
              <div className="containerAdditionalInfo">
                <h2 className={styles.additionalInfoTitle}>
                  Endereço e contato
                </h2>
                <span className={styles.detailsDescription}>
                  Endereço: Rua. Marechal Deodoro, 154
                </span>
                <p className={styles.detailsDescription}>
                  Telefone: (13) 99293-1142
                </p>
              </div>
              <div className="containerAdditionalInfo">
                <h2 className={styles.additionalInfoTitle}>
                  Horário de atendimento
                </h2>
                <p className={styles.detailsDescription}>
                  Segunda a Sexta: Das 12:00 ás 18:00
                </p>
              </div>
              <div className="containerAdditionalInfo">
                <h2 className={styles.additionalInfoTitle}>
                  Liberação de aluno
                </h2>
                <p className={styles.detailsDescription}>
                  Gostaria de fazer uma solicitação para liberar seu filho?
                </p>
                <Link className={styles.requestLiberation} to="/report">
                  + Ver pedidos de liberação anteriores
                </Link>
              </div>

              <div className={styles.detailsButtonContainer}>
                <Link className={styles.linkButton} to="/liberation-request">
                  Solicitar Cadastro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
