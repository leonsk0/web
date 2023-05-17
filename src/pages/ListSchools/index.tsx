import { AsideBar } from '../../components/AsideBar'
import { Card } from '../../components/Card'

import chevron from '../../assets/images/icons/chevron-bottom-blue.svg'
import dog from '../../assets/images/school.png'

import "./styles.css"

export function ListSchool() {
  function handleFilterByPetType() {
    // TO DO
  }

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
      </div>
      <div className="div-display">
        <Card path={dog} type="dog" name="Alfredo" />
        <Card path={dog} type="cat" name="Tobia" />
        <Card path={dog} type="dog" name="Alfredo" />
      </div>
    </div>
  </div>
  
  )
}
