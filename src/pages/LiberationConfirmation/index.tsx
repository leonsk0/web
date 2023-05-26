import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import sucessIcon from '../../assets/images/icons/success-check-icon.svg';

function LiberationConfirmation() {
  return (
    <div className='recovery-success'>
      <div className='recovery-background'>
        <img src={sucessIcon} alt='Ícone de check' />
        <h1>Pedido de liberação enviado</h1>
        <p>Enviamos o pedido de liberação para a instituição escolhida.</p>
        <p>Em breve ela irá retornar o contato pelo e-mail cadastrado na plataforma.</p>
        <Link to='/'>Ver pedidos</Link>
      </div>
    </div>
  );
}

export default LiberationConfirmation;
