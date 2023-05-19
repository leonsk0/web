import { AsideBar } from '../../components/AsideBar'
import { Card } from '../../components/Card'

import chevron from '../../assets/images/icons/chevron-bottom-blue.svg'
import school from '../../assets/images/school.png'

import "./styles.css"

export function ListSchool() {

  return (
    <div className="div-container">
    <AsideBar />
  
    <div className="div-content">
      <div className="div-header">
        <p className ="p-inst">
          Encontre <span>3 instituições</span> na sua cidade
        </p>
        <div className="div-select-wrapper">
          <select name="size" id="size" className="header-select">
            <option value="all">Públicas e Privadas</option>
            <option value="cats">Públicas</option>
            <option value="dogs">Privadas</option>
          </select>
          <img src={chevron} alt="" />
        </div>
        <div className="div-select-wrapper">
          <select name="size" id="size" className="header-select">
            <option value="all">Santos</option>
            <option value="cats">São Vicente</option>
            <option value="dogs">Praia Grande</option>
          </select>
          <img src={chevron} alt="" />
        </div>
      </div>
      <div className="div-display">
        <Card path={school} type="public" name="EMEF Yolanda Conte" />
        <Card path={school} type="private" name="Integração" />
        <Card path={school} type="public" name="ETEC Ruth Cardoso" />
      </div>
    </div>
  </div>
  
  )
}
