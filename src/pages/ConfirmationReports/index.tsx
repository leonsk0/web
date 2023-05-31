import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import sucessIcon from '../../assets/images/icons/success-check-icon.svg';

function ConfirmationReports() {
  return (
    <div className='recovery-success'>
      <div className='recovery-background'>
        <img src={sucessIcon} alt='Ícone de check' />
        <h1>Relatório enviado para o e-mail</h1>
        <p>O relatório dos pedidos de liberação foram enviados para o e-mail cadastrado.</p>
        <Link to='/school-list'>Voltar</Link>
      </div>
    </div>
  );
}

export default ConfirmationReports;
