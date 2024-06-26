import { Movies } from "../models/Movie";

export const getTopMoviesList = async (): Promise<Movies> => {
  const responce = await fetch('https://cinemaguide.skillbox.cc/movie/top10', { credentials: "include" });
  const movieList = await responce.json();

  return movieList;
};
