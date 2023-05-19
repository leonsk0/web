import { Link } from 'react-router-dom'
import logo from '../../assets/images/icons/logotipo-icon.svg'
import './styles.css';
type CardProps = {
  path: string
  name: string
  type: 'public' | 'private'
}

export function Card({ path, name}: CardProps) {
  return (
    <div className="containerCard">
  <div className="cardImage">
    <img src={path} alt={`Foto de ${name}`} />
  </div>
  <div>
    <div className="cardIcon">
      <div>
        <img src={logo} alt="" />
      </div> 
    </div>
    <p className="name"><Link to='/specify' className="link">{name}</Link></p>
  </div>
</div>

  )
}
