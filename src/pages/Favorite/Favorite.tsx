import { FC, useEffect, useState } from "react"
import './Favorite.css'
import { Movies } from "../../models/Movie";
import Api from "../../api/api";
import { Link } from "react-router-dom";



export const Favorite: FC = () => {

	const [movies, setMovies] = useState<Movies>();

  const getMovieInfo = async (): Promise<void> => {
		const data = await Api.getFavoriteMovie();
		setMovies(data);
	};

  useEffect(() => {
  getMovieInfo();
}, []);


if (movies !== undefined) {
  return  <>
      <ul className="top-movies__list">
      {movies.map((movie) => (
				<li className="top-movies-wrapper hvr-shadow" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.posterUrl} alt={movie.title} className="top-movies__poster"/>
          </Link>
          </li>
			))}
      </ul>
    </>
}


}
