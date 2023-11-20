import { useState } from "react";

import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import FormInput from "../../components/FormInput";

import styles from "./styles.module.css";

export default function RegisterStudent() {
  const [escolaridade, setEscolaridade] = useState("");
  const [local, setLocal] = useState("");
  const [sala, setSala] = useState("");
  return (
    <div id={styles.registerStudentPage}>
      <PageHeader
        title="Aprovação de cadastro"
        children={
          <p>
            <strong>
              Estes são os resultados dos pedidos de cadastro na instituição
            </strong>
          </p>
        }
      />

      <div className={`${styles.registerStudentContainer} container`}>
        <div className={styles.registerStudentCard}>
          <div className={styles.registerStudentCardContent}>
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

            <div className="containerTextDescription">
              <p className="textDescription">
                Escolha o nível escolar, local da instituição e sala para
                ingressar o aluno.
              </p>
            </div>

            <div className={styles.inputsContainer}>
              <div className="inputs">
                <FormInput
                  label="Escolaridade"
                  onChange={(e) => {
                    setEscolaridade(e.target.value);
                  }}
                  value={escolaridade}
                  isPassword={false}
                />
                <FormInput
                  label="Local da instituição"
                  onChange={(e) => {
                    setLocal(e.target.value);
                  }}
                  value={local}
                  isPassword={false}
                />
                <FormInput
                  label="Sala"
                  onChange={(e) => {
                    setSala(e.target.value);
                  }}
                  value={sala}
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
            <Link to="/confirmation-student">Aceitar cadastro</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
