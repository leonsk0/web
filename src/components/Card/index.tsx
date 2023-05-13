import logo from '../../assets/images/icons/logotipo-icon.svg'

type CardProps = {
  path: string
  name: string
  type: 'dog' | 'cat'
}

export function Card({ path, name, type }: CardProps) {
  return (
    <div className="container">
  <div className="pet-image">
    <img src={path} alt={`Foto de ${name}`} />
  </div>
  <div>
    <div className="type-icon">
      <div style={{ backgroundColor: type === 'cat' ? '#F4D35E' : '#F15156' }}>
        <img src={logo} alt="" />
      </div>
    </div>
    <p className="name">{name}</p>
  </div>
</div>

  )
}
