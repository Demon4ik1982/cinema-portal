import React from "react";
import './searchMovieList.css'
import { Movies } from "../../models/Movie";
import { MovieRating } from "../../util/MovieRating/MovieRating";
import { MovieRunTime } from "../../util/MovieRunTime/MovieRunTime";
import { Link } from "react-router-dom";

type IModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  movieList: Movies;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchMovieList = ({ active, setActive, movieList, setInputValue }: IModalProps) => {

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0')
}

  return (
    <div className={active ? "search active" : "search"}>
      <ul className="search__movie-list">
        {movieList.map((movie, id) => (
          <li className="search__movie-item" key={id}>
            <Link className="search__movie-link" to={`/movies/${movie.id}`}  replace={true} onClick={() => {setActive(false), setInputValue('') }}>
            <img className="search__movie-poster" src={`${movie.posterUrl}`} alt={`${movie.title}`} />
            <div className="search__movie-info-wrapper">
              <div className="search__movie-info">
                <span className={`search__movie-info-reiting ${MovieRating(movie.tmdbRating)}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00105 12.1734L3.29875 14.8055L4.34897 9.51997L0.392578 5.86124L5.74394 5.22675L8.00105 0.333374L10.2581 5.22675L15.6095 5.86124L11.6531 9.51997L12.7033 14.8055L8.00105 12.1734Z" fill="white" />
                  </svg>
                  {movie.tmdbRating.toFixed(1)}
                </span>
                <span className='movie-info-relize'>{movie.releaseYear}</span>
                <div className='movie-info-genres'>
                  <ul className='movie-info-list'>
                    {movie.genres?.map((genres, id) => (
                      <li className="top-movies-wrapper" key={id}>
                        {genres}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className='movie-info-run-time'>{MovieRunTime(movie.runtime).hour} h. {padTo2Digits(MovieRunTime(movie.runtime).minutes)} m.</span>
              </div>
              <p className="search__movie-title">{movie.title}</p>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchMovieList;
