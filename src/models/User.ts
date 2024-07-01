import { Movies } from "./Movie";

export interface IUser {
  email: string,
  favorites: Movies[],
  name: string,
  surname: string
}

export type User = IUser;
