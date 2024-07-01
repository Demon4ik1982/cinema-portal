import { getGenresList } from "./Genres";
import { getMoviesList } from "./MovieList";
import { getRandomMovie } from "./RandomMovie";
import { getTopMoviesList } from "./TopMovieApi";
import { getMovie } from "./getMovie";
import { getProfile } from "./getProfile";
import { setFavoriteMovie } from "./setFavoriteMovie";
import { getFavoriteMovie } from "./getFavoriteMovie";
import { deleteFavoriteMovie } from "./deleteFavoriteMovie";


const Api = {
  getTopMoviesList,
  getRandomMovie,
  getGenresList,
  getMoviesList,
  getMovie,
  getProfile,
  setFavoriteMovie,
  getFavoriteMovie,
  deleteFavoriteMovie,
};

export default Api;
