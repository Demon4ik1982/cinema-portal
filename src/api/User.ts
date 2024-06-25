import { z } from "zod";
import { validateResponse } from "./validateResponse";

export const UserSchema = z.object ({
  email: z.string(),
  password: z.string(),
  name: z.string(),
  surname: z.string()
})

export const UserSchemaLogin = z.object ({
  email: z.string(),
  favorites: z.string(),
  name: z.string(),
  surname: z.string()
})

export type User = z.infer<typeof UserSchema>;
export type UserLogin = z.infer<typeof UserSchemaLogin>;


export function registerUser(
  email: string,
  password: string,
  name: string,
  surname: string
): Promise<void> {
  return fetch('https://cinemaguide.skillbox.cc/user', {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, surname }),
  }).then(() => undefined);
}

export function login(
  email: string,
  password: string
): Promise<void> {
  return fetch('https://cinemaguide.skillbox.cc/auth/login', {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  .then(validateResponse)
  .then(() => undefined);
}

export function fetchMe(): Promise<UserLogin> {
  return fetch('https://cinemaguide.skillbox.cc/profile', { credentials: "include" })
  .then(validateResponse)
  .then((response) => response.json())
  .then((data) => UserSchemaLogin.parse(data));
}
