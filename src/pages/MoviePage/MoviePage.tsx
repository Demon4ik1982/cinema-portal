import { FC, useEffect, useState } from "react";
import Api from "../../api/api";
import { useParams } from "react-router-dom";
import { Movie } from "../../models/MoviePage";
import { MovieInfo } from "../../components/movieInfo/MovieInfo";
import { AboutMovie } from "../../components/aboutMovie/AboutMovie";
import { MovieBackground } from "../../components/movieBackground/MovieBackground";
import "./MoviePage.css"

export const MoviePage: FC = () => {
	const [movie, setMovie] = useState<Movie>();
  const { movieId } = useParams();

  const getMovieInfo = async (): Promise<void> => {
		const data = await Api.getMovie(Number(movieId));
		setMovie(data);
	};

  useEffect(() => {
    getMovieInfo();
  }, [movieId]);


  if (movie !== undefined) {

    return (
    <>

      <section className="movie-page container">
      <MovieBackground MovieURL={movie.backdropUrl}/>

      <div className="movie-page-bg">
        <div className="movie-page-wrapper">
        <MovieInfo
          MovieId={movie?.id}
          MovieName={movie?.title}
          MovieGenres={movie?.genres}
          MoviePlot={movie?.plot}
          MovieRelize={movie?.releaseYear}
          MovieRunTime={movie?.runtime}
          MovieRating={movie?.tmdbRating}
          MovieTrailer={movie.trailerUrl}
        />
        <AboutMovie
          MovieLanguage={movie.language}
          MovieBudget={movie.budget}
          MovieDirector={movie.director}
          MovieAwards={movie.awardsSummary}
          MovieProduction={movie.production}
          MovieRevenue={movie.revenue}
        />
        </div>


      </div>

      </section>
    </>
    )
  }
  return (
    <></>
  )

}
