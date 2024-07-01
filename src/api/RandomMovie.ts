import { RandomMovie } from "../models/RandomMovie";

export const getRandomMovie = async (): Promise<RandomMovie> => {
  const responce = await fetch('https://cinemaguide.skillbox.cc/movie/random', { credentials: "include" });
  const movieList = await responce.json();

  return movieList;
};

