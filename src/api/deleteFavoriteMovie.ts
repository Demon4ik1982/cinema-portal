import { validateResponse } from "./validateResponse";

export function deleteFavoriteMovie(id: string): Promise<void> {
  return fetch(`https://cinemaguide.skillbox.cc/favorites/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
  .then(validateResponse)
  .then(() => undefined);
}
