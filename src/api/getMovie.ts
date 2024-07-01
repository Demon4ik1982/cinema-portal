import { Movie } from "../models/MoviePage";


export const getMovie = async (id: number): Promise<Movie> => {
  const responce = await fetch(`https://cinemaguide.skillbox.cc/movie/${id}`, { credentials: "include" });
  const movieList = await responce.json();

  return movieList;
};
