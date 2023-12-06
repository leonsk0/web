import { Card } from "../../components/Card";
import Aside from "../../components/Aside";

import template from "../../assets/images/template.png";

import styles from "./styles.module.css";

export function Dashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.asideWrapper}>
        <Aside />
      </div>
      <div className={`${styles.dashboardContainer} container`}>
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardHeader}>
            <p>Escolha o que deseja fazer:</p>
          </div>
          <div className={styles.cardListContainer}>
            <Card
              link="/demand"
              path={template}
              type="public"
              name="Ver pedidos de cadastro"
            />
            <Card
              link="/demand"
              path={template}
              type="private"
              name="Ver pedidos de liberação"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
