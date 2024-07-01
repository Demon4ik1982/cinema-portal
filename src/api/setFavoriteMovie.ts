import { validateResponse } from "./validateResponse";

export function setFavoriteMovie(id: string): Promise<void> {
  return fetch(`https://cinemaguide.skillbox.cc/favorites?id=${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ id }),
  })
  .then(validateResponse)
  .then(() => undefined);
}
