import React from "react";
import { AsideBar } from "../../components/AsideBar";
import { Card } from "../../components/Card";

import chevron from "../../assets/images/icons/chevron-bottom-blue.svg";
import school from "../../assets/images/school.png";

import styles from "./styles.module.css";

export function ListSchool() {
  return (
    <div className={styles.page}>
      <div className={styles.asideWrapper}>
        <AsideBar />
      </div>
      <div className={`${styles.listSchoolContainer} container`}>
        <div className={styles.listSchoolContent}>
          <div className={styles.listSchoolHeader}>
            <p>
              Encontre <span>3 instituições</span> na sua cidade
            </p>
            <div className={styles.selectsContainer}>
              <div className={styles.selectWrapper}>
                <select name="size" id="size" className={styles.filterSelect}>
                  <option value="all">Públicas e Privadas</option>
                  <option value="cats">Públicas</option>
                  <option value="dogs">Privadas</option>
                </select>
                <img src={chevron} alt="" />
              </div>
              <div className={styles.selectWrapper}>
                <select name="size" id="size" className={styles.filterSelect}>
                  <option value="all">Santos</option>
                  <option value="cats">São Vicente</option>
                  <option value="dogs">Praia Grande</option>
                </select>
                <img src={chevron} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.cardListContainer}>
            <Card
              link="/details"
              path={school}
              type="public"
              name="EMEF Yolanda Conte"
            />
            <Card link="/details" path={school} type="private" name="Alfredo" />
            <Card
              link="/details"
              path={school}
              type="public"
              name="ETEC Ruth Cardoso"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
