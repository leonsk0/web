/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { InputHTMLAttributes, useState } from 'react';

import './styles.css';

import ClosedEyeIcon from '../../assets/images/icons/closedEye.svg';
import EyeIcon from '../../assets/images/icons/eye.svg';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isPassword: boolean;
}

function FormInput({ label, isPassword, ...rest }: FormInputProps) {
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <div className='label-float'>
      {isPassword ? (
        <input
          placeholder=' '
          {...rest}
          type={passwordShow ? 'text' : 'password'}
        />
      ) : (
        <input placeholder=' ' {...rest} type='text' />
      )}

      <label>{label}</label>
      {isPassword ? (
        <button
          onClick={() => {
            if (passwordShow) {
              setPasswordShow(false);
            } else {
              setPasswordShow(true);
            }
          }}
          type='button'
        >
          {passwordShow ? (
            <img
              src={ClosedEyeIcon}
              alt='Ocultar senha'
              className='inputIcon'
            />
          ) : (
            <img
              src={EyeIcon}
              alt='Ocultar senha'
              className='inputIcon'
            />
          )}
        </button>
      ) : null}
    </div>
  );
}

export default FormInput;
