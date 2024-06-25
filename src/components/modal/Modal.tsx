import React from "react";
import './Modal.css'

type IModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode
}

const Modal = ({ active, setActive, children }: IModalProps) => {
  return (
    <div className={active ? "modal active" : "modal"}>

      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {children}
        <div className="modal-btn" onClick={() => setActive(false)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" fill="black" />
        </svg>
      </div>
      </div>
    </div>
  )
}

export default Modal;
