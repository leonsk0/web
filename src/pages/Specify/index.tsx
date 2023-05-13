import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import sucessIcon from '../../assets/images/icons/success-check-icon.svg';

function Specify() {
  return (
    <div className='recovery-success'>
      <div className='recovery-background'>
        <img src={sucessIcon} alt='Ícone de check' />
        <h1>Página em andamento</h1>
        <p>Volte mais tarde</p>
        <Link to='/'>Ir para o login</Link>
      </div>
    </div>
  );
}

export default Specify;
