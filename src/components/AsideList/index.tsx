import { SelectList }  from '../../components/SelectList'

import logo from '../../assets/images/icons/logo-icon.svg'
import search from '../../assets/images/icons/search.svg'

// const ageOptions = [
//   {
//     label: 'Filhote',
//     value: 'cub',
//   },
//   {
//     label: 'Adolescente',
//     value: 'adolescent',
//   },
//   {
//     label: 'Idoso',
//     value: 'elderly',
//   },
// ]
// const energyOptions = [
//   {
//     label: 'Muito baixa',
//     value: 1,
//   },
//   {
//     label: 'Baixa',
//     value: 2,
//   },
//   {
//     label: 'Média',
//     value: 3,
//   },
//   {
//     label: 'Alta',
//     value: 4,
//   },
//   {
//     label: 'Muito alta',
//     value: 5,
//   },
// ]
// const sizeOptions = [
//   {
//     label: 'Pequenino',
//     value: 'small',
//   },
//   {
//     label: 'Médio',
//     value: 'medium',
//   },
//   {
//     label: 'Grande',
//     value: 'big',
//   },
// ]
// const independencyOptions = [
//   {
//     label: 'Baixo',
//     value: 'low',
//   },
//   {
//     label: 'Médio',
//     value: 'medium',
//   },
//   {
//     label: 'Alto',
//     value: 'high',
//   },
// ]

export function AsideList() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeSearchFilters() {
    // TO DO
  }

  return (
    <aside className="aside-container">
    <div className="aside-header">
      <div>
        <img src={logo} alt="" />
        {/* <div className="header-input">
          <input type="text" placeholder="Insira uma cidade" />
          <button>
            <img src={search} alt="ícone de lupa" />
          </button>
        </div> */}
      </div>
    </div>
    <h1 className="content-header">Escolha uma escola</h1>
    <p>Ao clicar, você poderá ver mais detalhes sobre a instituição de ensino.</p>
    {/* <div className="aside-content">
      <h1 className="content-header">Filtros</h1>
      <div className="content-filters">
        <SelectList name="age" label="Idade" options={ageOptions} />
  
        <SelectList
          name="energy"
          label="Nível de energia"
          options={energyOptions}
        />
  
        <SelectList name="size" label="Porte do animal" options={sizeOptions} />
  
        <SelectList
          name="independency"
          label="Nível de independência"
          options={independencyOptions}
        />
      </div>
    </div> */}
  </aside>
  
  )
}
