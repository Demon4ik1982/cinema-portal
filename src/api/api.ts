import { getGenresList } from "./Genres";
import { getMoviesList } from "./MovieList";
import { getRandomMovie } from "./RandomMovie";
import { getTopMoviesList } from "./TopMovieApi";
import { getMovie } from "./getMovie";
import { getProfile } from "./getProfile";


const Api = {
  getTopMoviesList,
  getRandomMovie,
  getGenresList,
  getMoviesList,
  getMovie,
  getProfile,
};

export default Api;
