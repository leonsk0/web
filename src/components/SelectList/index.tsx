import chevron from '../../assets/images/icons/chevron-bottom.svg'
import { SelectHTMLAttributes } from 'react'
import './styles.css';
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: {
    value: string | number
    label: string
  }[]
}

export function SelectList({ label, name, options }: SelectProps) {
  return (
    <div className="Filter">
    <label className="FilterLabel" htmlFor={name}>{label}</label>
    <div className="FilterWrapper">
      <select name={name} id={name} className="FilterInput">
        <option className="FilterInputOption" value="" disabled selected>
          Selecione
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value} className="FilterInputOption">
              {option.label}
            </option>
          )
        })}
      </select>
      <img src={chevron} alt="" />
    </div>
  </div>
  
  )
}
