import { useState } from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import FormInput from "../../components/FormInput";

import styles from "./styles.module.css";

export default function LiberationRequest() {
  const [request, setRequest] = useState("");

  return (
    <div id={styles.liberationRequestPage}>
      <PageHeader
        title="Envio de mensagem"
        children={
          <p>
            <strong>
              Descreva os motivos para liberar o aluno da aula atual
            </strong>
          </p>
        }
      />

      <div className={`${styles.liberationRequestContainer} container`}>
        <div className={styles.liberationRequestCard}>
          <div className={styles.liberationRequestCardContent}>
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
                  label="Motivo"
                  onChange={(e) => {
                    setRequest(e.target.value);
                  }}
                  value={request}
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
            <Link to="/liberation-confirmation">Pedir liberação</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
