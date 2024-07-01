export const MovieRating = (raiting: number): string => {
  let colorRating = ''
  if (raiting !== undefined) {
    if (raiting >= 6) colorRating = 'movie-info-grey';
    if (raiting >= 7) colorRating = 'movie-info-green';
    if (raiting >= 8) colorRating = 'movie-info-gold';
  }
  return colorRating
}
