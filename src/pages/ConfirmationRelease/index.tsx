import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import sucessIcon from '../../assets/images/icons/success-check-icon.svg';

function ConfirmationRelease() {
  return (
    <div className='recovery-success'>
      <div className='recovery-background'>
        <img src={sucessIcon} alt='Ícone de check' />
        <h1>Deseja enviar o relatório?</h1>
        <p>Será enviado um relatório contendo os dados da liberação do aluno.</p>
        <div className='div-confirm'>
          <Link to='/'>Não</Link>
          <Link to='/send-report'>Sim</Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationRelease;
