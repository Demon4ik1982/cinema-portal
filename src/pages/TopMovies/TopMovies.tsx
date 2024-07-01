import { FC, useEffect, useState } from "react";
import './TopMovies.css'
import Api from "../../api/api";
import { Movies } from "../../models/Movie";
import { Link } from "react-router-dom";

export const TopMovies: FC = () => {
	const [movies, setMovies] = useState<Movies>([]);

	const getMovies = async (): Promise<void> => {
		const data = await Api.getTopMoviesList();
		setMovies(data);
	};

  useEffect(() => {
		getMovies();
	}, []);

  return (
    <div className="top-movies__content">
      <h2 className="top-movies__title-h2">Топ 10 фильмов</h2>
      <ul className="top-movies__list">
			{movies.map((movie, id) => (
				<li className="top-movies-wrapper hvr-shadow" key={id}>
          <Link to={`/movies/${movie.id}`} replace={true}>
            <div className="top-movies-number">{id + 1}</div>
            <img src={movie.posterUrl} alt={movie.title} className="top-movies__poster"/>
          </Link>
          </li>
			))}
      </ul>
    </div>
  )

}
