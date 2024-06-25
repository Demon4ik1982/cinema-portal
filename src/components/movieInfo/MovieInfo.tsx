/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import './MovieInfo.css';

type MovieProps = {
  MovieId?: number,
  MovieName: string | undefined,
  MovieGenres: string[] | undefined,
  MovieRelize: number | undefined,
  MovieRunTime: number | undefined,
  MoviePlot: string | undefined,
  MovieRating: number | undefined,
  aboutMovieBtn?: string | undefined,
  Click?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0')
}

export const MovieInfo = ({ MovieName, MovieGenres, MovieRelize, MovieRunTime, MoviePlot, MovieRating, Click, aboutMovieBtn, MovieId  }: MovieProps) => {
  let hour = 0;
  let minutes = 0;
  let colorRating = ''
  if (MovieRating !== undefined) {
    if (MovieRating >= 6) colorRating = 'movie-info-grey';
    if (MovieRating >= 7) colorRating = 'movie-info-green';
    if (MovieRating >= 8) colorRating = 'movie-info-gold';
  }

  if (MovieRunTime !== undefined) {
  hour = Math.floor(MovieRunTime / 60);
  minutes = MovieRunTime % 60;
  }
    return (
        <div className='movie-info-bg'>
          <div className='movie-info-container'>
            <div className='movie-info-content'>
            <span className={`movie-info-reiting ${colorRating}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00105 12.1734L3.29875 14.8055L4.34897 9.51997L0.392578 5.86124L5.74394 5.22675L8.00105 0.333374L10.2581 5.22675L15.6095 5.86124L11.6531 9.51997L12.7033 14.8055L8.00105 12.1734Z" fill="white" />
              </svg>
              {MovieRating?.toFixed(1)}</span>
            <span className='movie-info-relize'>{MovieRelize}</span>
            <div className='movie-info-genres'>
              <ul className='movie-info-list'>
                {MovieGenres?.map((genres, id) => (
                  <li className="top-movies-wrapper" key={id}>
                    {genres}
                  </li>
                ))}
              </ul>

              </div>
            <span className='movie-info-run-time'>{hour} h. {padTo2Digits(minutes)} m.</span>
            </div>
            <p className='movie-info-name'>
              {MovieName}
            </p>
            <span className='movie-info-description'>
              {MoviePlot}
            </span>
            <div className='movie-info-btn-wrapper'>
              <Button>Трейлер</Button>
              {!aboutMovieBtn ? '' : <Link className={`Button`} to={`/movies/${MovieId}`}>О фильме</Link>}

              <Button type='icon'>
                <div className='movie-info-icon-btn'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" fill="white" />
                </svg>
                </div>
                </Button>
              {!Click ? '' : <Button type='icon' onClick={Click}>
                <div className='movie-info-icon-btn'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z" fill="white" />
                </svg>
                </div>
              </Button>}

            </div>
          </div>

        </div>
    )
}
