import { FC, useEffect, useState } from "react"
import Api from "../../api/api";
import { RandomMovie } from "../../models/RandomMovie";
import { MovieInfo } from "../../components/movieInfo/MovieInfo";
import "./RandomMovies.css"
import { MovieBackground } from "../../components/movieBackground/MovieBackground";



export const RandomMovies: FC = () => {
  const [movies, setMovies] = useState<RandomMovie>();


	const getMovies = async (): Promise<void> => {
		const data = await Api.getRandomMovie();
		setMovies(data);
	};

  	useEffect(() => {
		getMovies();
	}, []);

  if (movies !== undefined) {
    return(
      <div className="random-movies-content">
        <MovieBackground MovieURL={movies.backdropUrl}/>
        <MovieInfo
          MovieId={movies.id}
          MovieName={movies?.title}
          MovieGenres={movies?.genres}
          MoviePlot={movies?.plot}
          MovieRelize={movies?.releaseYear}
          MovieRunTime={movies?.runtime}
          MovieRating={movies?.tmdbRating}
          aboutMovieBtn="О фильме"
          Click={getMovies}
        />
      </div>
    )
  }
  return (
    <></>
  )
}
