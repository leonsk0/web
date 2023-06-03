import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import sucessIcon from '../../assets/images/icons/success-check-icon.svg';

function ConfirmationStudent() {
  return (
    <div className='recovery-success'>
      <div className='recovery-background'>
        <img src={sucessIcon} alt='Ícone de check' />
        <h1>Cadastro do aluno realizado</h1>
        <p>O aluno foi cadastrado na instituição com sucesso.</p>
        <Link to='/release'>Ver pedidos de liberação</Link>
      </div>
    </div>
  );
}

export default ConfirmationStudent;
