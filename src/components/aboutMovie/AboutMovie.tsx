import './AboutMovie.css';

type MovieProps = {
  MovieLanguage: string | undefined,
  MovieBudget: string | undefined,
  MovieRevenue: string | undefined,
  MovieDirector: string | undefined,
  MovieProduction: string | undefined,
  MovieAwards: string | undefined,
}


export const AboutMovie = ({ MovieLanguage, MovieBudget, MovieRevenue, MovieDirector, MovieProduction, MovieAwards }: MovieProps) => {
    const dot = '.................................................................................'
    return (
        <div className='about-movie'>
        <h2 className="about-movie__title-h2 title-h2">О фильме</h2>
        <ul className='about-movie-list'>
          {!MovieLanguage ? '' : <li className='about-movie-item'>
            <span className='about-movie-info'>{`Язык оригинала ${dot}`}</span>
            <span className='about-movie-info-text'>
              {MovieLanguage}
            </span>
            </li> }
          {!MovieBudget ? '' : <li className='about-movie-item'>
            <span className='about-movie-info'>{`Бюджет ${dot}`}</span>
            <span className='about-movie-info-text'>
              {MovieBudget}
            </span>
            </li> }
          {!MovieRevenue ? '' : <li className='about-movie-item'>
            <span className='about-movie-info'>{`Выручка ${dot}`}</span>
            <span className='about-movie-info-text'>
              {MovieRevenue}
            </span>
            </li> }
          {!MovieDirector ? '' : <li className='about-movie-item'>
            <span className='about-movie-info'>{`Режиссёр ${dot}`}</span>
            <span className='about-movie-info-text'>
              {MovieDirector}
            </span>
            </li> }
          {!MovieProduction ? '' : <li className='about-movie-item'>
            <span className='about-movie-info'>{`Продакшен ${dot}`}</span>
            <span className='about-movie-info-text'>
              {MovieProduction}
            </span>
            </li> }
          {!MovieAwards ? '' : <li className='about-movie-item'>
            <span className='about-movie-info'>{`Награды ${dot}`}</span>
            <span className='about-movie-info-text'>
              {MovieAwards}
            </span>
            </li> }
        </ul>
        </div>
    )
}
