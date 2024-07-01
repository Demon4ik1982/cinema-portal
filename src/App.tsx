import './App.css';
import { Navigation } from './components/Navigation/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { GenresMovie } from './pages/GenresMovie/GenresMovie';
import { GenresMovieList } from './pages/GenresMovieList/GenresMovieList';
import { MoviePage } from './pages/MoviePage/MoviePage';
import { Footer } from './components/footer/footer';
import { UserLogin } from './api/User';
import { UserPage } from './pages/UserPage/UserPage';
import ScrollTop from './components/ScrollTop/ScrollTop';

type ILogin = {
  login?: UserLogin
}

function App({login}: ILogin ) {



  return <>
        <BrowserRouter>
        <Navigation  login={login}/>
        <ScrollTop/>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/genres" element={<GenresMovie />} />
              <Route path="/genres/:genresId" element={<GenresMovieList />} />
              <Route path="/movies/:movieId" element={<MoviePage />} />
              <Route path="/user/" element={<UserPage />} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </>

}

export default App;
