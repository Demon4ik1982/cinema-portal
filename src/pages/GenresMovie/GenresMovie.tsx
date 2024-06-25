import { FC, useEffect, useState } from "react";
import { Genres } from "../../models/Genres";
import Api from "../../api/api";
import "./GenresMovie.css"
import { Link } from "react-router-dom";


export const GenresMovie: FC = () => {
    const [genres, setGenres] = useState<Genres>();

	const getGenres = async (): Promise<void> => {
		const data = await Api.getGenresList();
		setGenres(data);
	};

  useEffect(() => {
		getGenres();
	}, []);

  if (genres !== undefined) {
    const genresMovies = Object.values(genres)

    return (
      <>
      <section className="genres container">
      <h2 className="genres__title-h2">Жанры фильмов</h2>
      <ul className="genres__list">
      {genresMovies.map((item, id) => (
				<li className="genres-item hvr-shadow" key={id}>
          <Link className="genres-item-link" to={`/genres/${id}`}>
          <img className="genres-img" src={`/genres/${item}.jpg`} alt="" />
          <div className="genres-name" key={id}>{item.charAt(0).toUpperCase() + item.slice(1)}</div>
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
