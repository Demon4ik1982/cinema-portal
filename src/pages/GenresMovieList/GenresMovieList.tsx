import { FC, useEffect, useState } from "react";
import './GenresMovieList.css'
import Api from "../../api/api";
import { Movies } from "../../models/Movie";
import { Link, useParams } from "react-router-dom";
import { Genres } from "../../models/Genres";


export const GenresMovieList: FC = () => {
	const [movies, setMovies] = useState<Movies>([]);
  const [genres, setGenres] = useState<Genres>();


	const getGenres = async (): Promise<void> => {
		const data = await Api.getGenresList();
		setGenres(data);
	};

  useEffect(() => {
		getGenres();
	}, []);

	const getMovies = async (): Promise<void> => {
		const data = await Api.getMoviesList();
		setMovies(data);
	};

  useEffect(() => {
		getMovies();
	}, []);
  const { genresId } = useParams();

  if (genres !== undefined) {
    const genresMovies = Object.values(genres)
    const genresName = genresMovies[Number(genresId)];

    return (

      <>
      <section className="top-movies container">
        <Link to={'/genres'} className="top-movies-link-wrapper">
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.04701 11.0012L13.2967 19.2507L10.9397 21.6077L0.333008 11.0012L10.9397 0.394531L13.2967 2.75155L5.04701 11.0012Z" fill="white" />
          </svg>
          <h2 className="top-movies__title-h2">{`${genresName.charAt(0).toUpperCase()}${genresName.slice(1)}`}</h2>
          </Link>
        <ul className="top-movies__list">
          {movies.filter((item) => item.genres.includes(genresName)).map((element, id) => (
          <li className="top-movies-wrapper" key={id}>
            <Link to={`/movies/${element.id}`}>
            <div className="top-movies-number">{id + 1}</div>
            <img src={element.posterUrl} alt={element.title} className="top-movies__poster"/>
            </Link>
          </li>
          ))}
        </ul>
      </section>
          </>
    )
  }
  return (
    <></>
  )


}
