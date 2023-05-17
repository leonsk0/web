import logo from '../../assets/images/icons/logo-icon.svg'

export function AsideBar() {

  return (
    <aside className="aside-container">
    <div className="aside-header">
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
    <h1 className="content-header">Escolha uma escola</h1>
    <p className="p-header">Ao clicar, você poderá ver mais detalhes sobre a instituição de ensino.</p>
  </aside>
  
  )
}
