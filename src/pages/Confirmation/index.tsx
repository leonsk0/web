import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import sucessIcon from '../../assets/images/icons/success-check-icon.svg';

function Confirmation() {
  return (
    <div className='recovery-success'>
      <div className='recovery-background'>
        <img src={sucessIcon} alt='Ícone de check' />
        <h1>Cadastro concluído</h1>
        <p>Agora você faz parte da plataforma da Creseri.</p>
        <p>Tenha uma ótima experiência.</p>
        <Link to='/'>Ir para o login</Link>
      </div>
    </div>
  );
}

export default Confirmation;
