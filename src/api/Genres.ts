import { Genres } from "../models/Genres";

export const getGenresList = async (): Promise<Genres> => {
  const responce = await fetch('https://cinemaguide.skillbox.cc/movie/genres');
  const movieList = await responce.json();

  return movieList;
};
