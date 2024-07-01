export function MovieRunTime(movieTime: number){
  let hour = 0;
  let minutes = 0;
  if (movieTime !== undefined) {
    hour = Math.floor(movieTime / 60);
    minutes = movieTime % 60;
    }
    return {  hour, minutes }
}
