import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/icons/logotipo-icon.svg';
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
        <img src={logoImg} alt="Creseri" />
      </div>

      <div className="header-content">
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
