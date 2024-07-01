import React from "react";
import './Trailer.css'

type ITrailerProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  setTrailer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Trailer = ({ active, setActive, children, setTrailer }: ITrailerProps) => {
  return (
    <div className={active ? "trailer active" : "trailer"}>

      <div className="trailer__content" onClick={e => e.stopPropagation()}>
        {children}
        <div className="trailer-btn" onClick={() => {setActive(false), setTrailer(false)}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" fill="black" />
        </svg>
      </div>
      </div>
    </div>
  )
}

export default Trailer;
