import school from '../../assets/images/school.png'

import "./styles.css"
import { CardList } from '../../components/CardList'

export function Dashboard() {

  return (
    <div className="div-container">
  
    <div className="div-content">
      <div className="div-header">
        <p className ="p-inst">
          Escolha o que deseja fazer:
        </p>

      </div>
      <div className="div-display">
        <CardList path={school} type="public" name="Ver pedidos de cadastro" />
        <CardList path={school} type="private" name="Ver pedidos de liberação" />
      </div>
    </div>
  </div>
  
  )
}
