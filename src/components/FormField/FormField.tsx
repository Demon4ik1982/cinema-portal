import { FC, ReactNode } from 'react';
import { icon } from '../../ui/icon/icon';

import './FormField.css';

export interface IFormFieldProps {
  label: string;
  className: string;
  children: ReactNode;
  errorMessage?: string;
  iconType?: "password" |  "person" | "email" | "search";
  close?: boolean
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
  setCloseMobile?: React.Dispatch<React.SetStateAction<boolean>>
}

export const FormField: FC<IFormFieldProps> = ({
  label,
  children,
  errorMessage,
  iconType,
  className,
  close,
  setInputValue,
  setActive,
  setCloseMobile,
}) => {
  if (iconType !== undefined) {
    return (
      <label className="modal-input-wrapper" aria-label={`${label}`}>
        {children}
        <div className={`${className}`} dangerouslySetInnerHTML={{ __html: `${icon[iconType]}` }}>
        </div>
        {close && setActive && setInputValue && setCloseMobile? (<div className="search-close-icon" onClick={() => {setActive(false), setInputValue(''), setCloseMobile(false) }}  dangerouslySetInnerHTML={{ __html: `${icon.close}` }}>
      </div>) : <></>}
        {errorMessage && (<span className="form-field__error">{errorMessage}</span>)}
      </label>
    );
  }
  return (
    <></>
  )
};

// onClick={() => {setActive(false), setInputValue('') }}
