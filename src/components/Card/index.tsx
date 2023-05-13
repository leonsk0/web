import logo from '../../assets/images/icons/logotipo-icon.svg'

type CardProps = {
  path: string
  name: string
  type: 'dog' | 'cat'
}

export function Card({ path, name, type }: CardProps) {
  return (
    <div className="container card-list">
  <div className="pet-image">
    <img src={path} alt={`Foto de ${name}`} />
  </div>
  <div>
    <div className="type-icon">
      <div>
        <img src={logo} alt="" />
        <p className="name">{name}</p>

      </div> 
    </div>
   
  </div>
</div>

  )
}
