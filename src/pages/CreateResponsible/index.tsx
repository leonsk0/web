import { useState } from 'react';
import { Link } from 'react-router-dom';

import Aside from '../../components/Aside';
import FormInput from '../../components/FormInput';

import './styles.css';

import backIcon from '../../assets/images/icons/back.svg';

function CreateResponsible() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <div className='sign-page'>
      <div className='sign-form'>
        <Link to='/'>
          <img src={backIcon} alt='Ícone para voltar' />
        </Link>

        <div className='title-container'>
          <h2>Cadastro</h2>
          <p>Preencha os dados abaixo para começar.</p>
        </div>

        <div className='inputs'>
          <FormInput
            label='Nome'
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            isPassword={false}
          />
          <FormInput
            label='Sobrenome'
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            value={surname}
            isPassword={false}
          />
          <FormInput
            label='E-mail'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            isPassword={false}
          />
          <FormInput
            label='Senha'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            isPassword
          />
        </div>
        <div className='button-container'>
        <Link to='/confirmation'>Concluir cadastro</Link>
        </div>
      </div>
      <div className='aside-wrapper'>
        <Aside />
      </div>
    </div>
  );
}

export default CreateResponsible;
