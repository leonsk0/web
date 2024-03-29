import { useState } from "react";
import { Link } from "react-router-dom";

import Aside from "../../components/Aside";
import FormInput from "../../components/FormInput";

import styles from "./styles.module.css";

import backIcon from "../../assets/images/icons/back.svg";

function CreateResponsible() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className={styles.page}>
      <div className={`${styles.contentContainer} container`}>
        <header className={styles.linkContainer}>
          <Link to="/">
            <img src={backIcon} alt="Ícone para voltar" />
          </Link>
        </header>

        <div className={styles.formContainer}>
          <div className={styles.titleContainer}>
            <h2>Cadastro</h2>
            <p>Preencha os dados abaixo para começar.</p>
          </div>
          <div className="inputs">
            <FormInput
              label="Nome Completo do Responsável"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              isPassword={false}
            />
            <FormInput
              label="Nome Completo do filho"
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              value={surname}
              isPassword={false}
            />
            <FormInput
              label="CEP"
              onChange={(e) => {
                setCep(e.target.value);
              }}
              value={cep}
              isPassword={false}
            />
            <FormInput
              label="Número da residência"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={number}
              isPassword={false}
            />
            <FormInput
              label="E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              isPassword={false}
            />
            <FormInput
              label="Senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              isPassword
            />
          </div>
          <div className={styles.buttonContainer}>
            <Link to="/confirmation">Concluir cadastro</Link>
          </div>
        </div>
      </div>

      <div className={styles.asideWrapper}>
        <Aside />
      </div>
    </div>
  );
}

export default CreateResponsible;
