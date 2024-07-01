import { Movies } from "../../models/Movie";


export const serchMovie = (searchParam: string, movies: Movies): Movies => {

  const filterMovie = movies.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase())
  )
  return filterMovie
}
