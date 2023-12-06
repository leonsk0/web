import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import styles from "./styles.module.css";

export default function Release() {
  return (
    <div id={styles.releasePage}>
      <PageHeader
        title="Pedidos de liberação"
        children={
          <p>
            <strong>
              Estes são os resultados dos pedidos de liberação do aluno André da
              Guerra
            </strong>
          </p>
        }
      />

      <div className={styles.releaseContainer}>
        <div className={styles.releaseCard}>
          <div className={styles.releaseCardContent}>
            <div className={styles.containerPersona}>
              <div>
                <div className={styles.divPhoto}></div>
              </div>
              <div className={styles.divText}>
                <h3>André da Guerra</h3>
                <span>Aluno do 1º do Ensino Médio</span>
              </div>
            </div>

            <div className={styles.containerTextDescription}>
              <p className={styles.textDescription}>
                O pedido foi realizado pelo responsável Cleiton da Guerra, pois
                ele precisava do garoto para viajar para outros países a fim de
                procurar o seu padastro careca.
              </p>
              <div>
                <span>Data da solicitação:</span>
                <span>08/12/2022</span>
              </div>
            </div>

            <div className={styles.daysOfWeekCardsContainer}>
              <div className={styles.dayOfWeekCard}>
                <span className={styles.dayOfWeekSpanCard}>Dia</span>
                <p className={styles.dayOfWeekParagraphCard}>Segunda</p>
                <span className={styles.dayOfWeekSpanCard}>Horário</span>
                <p className={styles.dayOfWeekParagraphCard}>-</p>
              </div>

              <div className={styles.dayOfWeekCard}>
                <span className={styles.dayOfWeekSpanCard}>Dia</span>
                <p className={styles.dayOfWeekParagraphCard}>Terça</p>
                <span className={styles.dayOfWeekSpanCard}>Horário</span>
                <p className={styles.dayOfWeekParagraphCard}>-</p>
              </div>

              <div className={styles.dayOfWeekCard}>
                <span className={styles.dayOfWeekSpanCard}>Dia</span>
                <p className={styles.dayOfWeekParagraphCard}>Quarta</p>
                <span className={styles.dayOfWeekSpanCard}>Horário</span>
                <p className={styles.dayOfWeekParagraphCard}>-</p>
              </div>

              <div id={styles.dayOfWeekCard} className={styles.dayOfWeekCard}>
                <span
                  id={styles.dayOfWeekSpanCard}
                  className={styles.dayOfWeekSpanCard}
                >
                  Dia
                </span>
                <p
                  id={styles.dayOfWeekParagraphCard}
                  className={styles.dayOfWeekParagraphCard}
                >
                  Quinta
                </p>
                <span
                  id={styles.dayOfWeekSpanCard}
                  className={styles.dayOfWeekSpanCard}
                >
                  Horário
                </span>
                <p
                  id={styles.dayOfWeekParagraphCard}
                  className={styles.dayOfWeekParagraphCard}
                >
                  8h - 18h
                </p>
              </div>

              <div className={styles.dayOfWeekCard}>
                <span className={styles.dayOfWeekSpanCard}>Dia</span>
                <p className={styles.dayOfWeekParagraphCard}>Sexta</p>
                <span className={styles.dayOfWeekSpanCard}>Horário</span>
                <p className={styles.dayOfWeekParagraphCard}>-</p>
              </div>
            </div>
          </div>
          <div className={styles.submitContainer}>
            <Link id={styles.recuse} to="">
              Recusar liberação
            </Link>
            <Link to="/liberation-reason">Aceitar liberação</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
