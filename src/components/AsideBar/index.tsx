import { Link } from 'react-router-dom';
import logo from '../../assets/images/icons/logo-icon.svg'
import logout from '../../assets/images/icons/logout-icon.svg'
import './styles.css';

export function AsideBar() {

  return (
    <aside className="asideContainer">
    <div className="asideHeader">
      <div className='asideLogo'>
        <img className='asideImage' src={logo} alt="" />
      </div>
      <div className='asideContent'>
      <h2 className="content-header">Escolha uma escola</h2>
      <p className="p-header">Ao clicar, você poderá ver mais detalhes sobre a instituição de ensino.</p>
    </div>
    <div className='asideButton'>
      <Link to="/"><img className='asideIcon' src={logout} alt="" /></Link>
    </div>
    </div>
  </aside>
  
  )
}
