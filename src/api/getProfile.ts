import { User } from "../models/User"

export const getProfile = async (): Promise<User> => {
  const responce = await fetch(`https://cinemaguide.skillbox.cc/profile`);
  const movieList = await responce.json();

  return movieList;
};
