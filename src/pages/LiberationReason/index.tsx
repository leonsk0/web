import { useState } from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import FormInput from "../../components/FormInput";

import styles from "./styles.module.css";

export default function LiberationReason() {
  const [reason, setReason] = useState("");

  return (
    <div id={styles.liberationReasonPage}>
      <PageHeader
        title="Envio de mensagem"
        children={
          <p>
            <strong>
              Descreva os próximos passos que o responsável precisará fazer a
              seguir para confirmar a liberação do aluno
            </strong>
          </p>
        }
      />

      <div className={`${styles.liberationReasonContainer} container`}>
        <div className={styles.liberationReasonCard}>
          <div className={styles.liberationReasonCardContent}>
            <div className={styles.containerPersona}>
              <div>
                <div className={styles.divPhoto}></div>
              </div>
              <div className={styles.divText}>
                <h3>André da Guerra</h3>
                <span>Responsável: Cleiton da Guerra</span>
              </div>
            </div>

            <div className={styles.inputsContainer}>
              <div className="inputs">
                <FormInput
                  label="Descreva os próximos passos ao responsável"
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                  value={reason}
                  isPassword={false}
                />
              </div>
            </div>
          </div>
          <div className={styles.submitContainer}>
            <div>
              <span>Data da solicitação:</span>
              <span>08/12/2022</span>
            </div>
            <Link to="/confirmation-reason">Concluir aprovação</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
