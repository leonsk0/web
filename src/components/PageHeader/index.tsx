import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import perfil from '../../assets/images/icons/perfil.svg'
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  children?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }: PageHeaderProps) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <strong>{title}</strong>
        <Link to="/dashboard" ><img src={perfil} alt="Creseri" /></Link>
      </div>

      <div className="header-content">
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
