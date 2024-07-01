/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import './MovieInfo.css';
import Api from '../../api/api';
import Modal from '../modal/Modal';
import { Like, LogoMini, Unlike } from '../../ui/svg/svgGallery';
import { RegistrationForm } from '../RegistrationForm';
import { LoginForm } from '../LoginForm';
import { useEffect, useState } from 'react';
import Trailer from '../Trailer/Trailer';
import ReactPlayer from 'react-player';

type AuthType = 'login' | 'registration';

type LikeType = 'like' | 'unlike'

type MovieProps = {
  MovieId?: number,
  MovieName: string | undefined,
  MovieGenres: string[] | undefined,
  MovieRelize: number | undefined,
  MovieRunTime: number | undefined,
  MoviePlot: string | undefined,
  MovieRating: number | undefined,
  aboutMovieBtn?: string | undefined,
  MovieTrailer?: string | undefined
  Click?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0')
}

export const MovieInfo = ({ MovieName, MovieGenres, MovieRelize, MovieRunTime, MoviePlot, MovieRating, Click, aboutMovieBtn, MovieId, MovieTrailer  }: MovieProps) => {
  const [modalActive, setModalActive] = useState(false)
  const [trailerActive, setTrailerActive] = useState(false)
  const [playTrailer, setPlayTrailer] = useState(false)
  const [authType, setAuthType] = useState<AuthType>('login');
  const [like, setLike] = useState<LikeType>('unlike');



  const getMovieInfo = async (): Promise<void> => {
		const data = await Api.getFavoriteMovie();
    const checkLike = data.some((item) => item.id === MovieId)
    if (checkLike) setLike('like')
	};

  useEffect(() => {
  getMovieInfo();
}, []);

  const handleClick = () => {
    setAuthType((prevState) =>
      prevState === "registration" ? "login" : "registration",
    );
  };

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
  if (MovieId !== undefined) {
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
                  <li className="movie-info-list-genres" key={id}>
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
              <Button onClick={() => {setTrailerActive(true), setPlayTrailer(true)}}>Трейлер</Button>
              <div className='movie-info-wrapper'>
              {!aboutMovieBtn ? '' : <Link className={`Button`} to={`/movies/${MovieId}`}>О фильме</Link>}
              {like === 'unlike' ?
                <Button type='icon' onClick={() => { Api.setFavoriteMovie(MovieId.toString()).then(() => setLike('like')).catch(() => setModalActive(true)) }}>
                <div className='movie-info-icon-btn'>
                  <Unlike />
                </div>
              </Button> :
              <Button type='icon' onClick={() => { Api.deleteFavoriteMovie(MovieId.toString()).then(() => setLike('unlike')) }}>
                <div className='movie-info-icon-btn'>
                  <Like />
                </div>
              </Button>
              }
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
          <Modal active={modalActive} setActive={setModalActive}>
            <LogoMini/>
              <div className="modal-content-warpper">
                {authType === "registration" ? <span className="modal-content-descr">Регистрация</span> : ""}
                {authType === "registration" ? <RegistrationForm setActive={setModalActive} /> : <LoginForm setActive={setModalActive}/>}
                <Button type='outline' onClick={handleClick}>{authType === "registration" ? "Войти" : "Создать аккаунт"}</Button>
              </div>
          </Modal>
          <Trailer active={trailerActive} setActive={setTrailerActive} setTrailer={setPlayTrailer}>
            <ReactPlayer width={720} url={MovieTrailer} controls={false} playing={playTrailer} stopOnUnmount={true}/>
          </Trailer>
        </div>
    )
  }
}
