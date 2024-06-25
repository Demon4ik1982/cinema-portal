import { Movies } from "../models/Movie";

export const getTopMoviesList = async (): Promise<Movies> => {
  const responce = await fetch('https://cinemaguide.skillbox.cc/movie/top10');
  const movieList = await responce.json();

  return movieList;
};
