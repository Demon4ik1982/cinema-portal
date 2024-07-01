import { Movies } from "../models/Movie";


export const getFavoriteMovie = async (): Promise<Movies> => {
    const responce = await fetch('https://cinemaguide.skillbox.cc/favorites/', { credentials: "include" });
    const movieList = await responce.json();

    return movieList;
  };
