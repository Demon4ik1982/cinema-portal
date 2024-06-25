import { FC, ReactNode } from 'react';
import { icon } from '../../ui/icon/icon';

import './FormField.css';

export interface IFormFieldProps {
  label: string;
  children: ReactNode;
  errorMessage?: string;
  iconType?: "password" |  "person" | "email"
}

export const FormField: FC<IFormFieldProps> = ({
  label,
  children,
  errorMessage,
  iconType,
}) => {
  if (iconType !== undefined) {
    return (

      <label className="modal-input-wrapper">
        {children}
        <div className="modal-icon" dangerouslySetInnerHTML={{ __html: `${icon[iconType]}` }}>
        </div>
        {errorMessage && (<span className="form-field__error">{errorMessage}</span>)}
      </label>
    );
  }
  return (
    <></>
  )
};
