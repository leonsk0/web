import { Link } from 'react-router-dom'
import logo from '../../assets/images/icons/logotipo-icon.svg'
import template from '../../assets/images/template.png'
import './styles.css';
type CardProps = {
  path: string
  name: string
  type: 'public' | 'private'
}

export function CardList({ path, name}: CardProps) {
  return (
    <Link to="/demand" className="link">
    <div className="containerCard">
  <div className="cardImage">
    <img src={template} alt={`Foto de ${name}`} />
  </div>
  <div>
    <div className="cardIcon">
      <div>
        <img src={logo} alt="" />
      </div> 
    </div>
    <p className="name">{name}</p>
  </div>
</div>
</Link>
  )
}
