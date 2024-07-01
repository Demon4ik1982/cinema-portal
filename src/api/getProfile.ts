import { User } from "../models/User"

export const getProfile = async (): Promise<User> => {
  const responce = await fetch(`https://cinemaguide.skillbox.cc/profile`, { credentials: "include" });
  const movieList = await responce.json();
  return movieList;
};
