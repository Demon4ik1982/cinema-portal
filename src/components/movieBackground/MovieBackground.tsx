
import './MovieBackground.css';

type MovieProps = {
  MovieURL: string,
}

export const MovieBackground = ({ MovieURL }: MovieProps) => {

    return (
        <>
        <div className="movie-page-img-position">
          <div className="movie-page-img-wrapper">
            <div className="gardient"></div>
            <img className="movie-page-img" src={`${MovieURL}`} alt="" />
          </div>
        </div>
        </>
    )
}
