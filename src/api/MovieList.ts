import { Movies } from "../models/Movie";

export const getMoviesList = async (): Promise<Movies> => {
  const responce = await fetch('https://cinemaguide.skillbox.cc/movie/');
  const movieList = await responce.json();

  return movieList;
};
