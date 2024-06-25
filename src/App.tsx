import './App.css';
import { Navigation } from './components/Navigation/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { GenresMovie } from './pages/GenresMovie/GenresMovie';
import { GenresMovieList } from './pages/GenresMovieList/GenresMovieList';
import { MoviePage } from './pages/MoviePage/MoviePage';
import { Footer } from './components/footer/footer';
import { useQuery } from '@tanstack/react-query';
import { fetchMe } from './api/User';
import { queryClient } from './api/queryClients';
import { AnimatePresence } from 'framer-motion';
// import Api from './api/api';
// import { useEffect } from 'react';


function App() {

  const meQuery = useQuery({
  queryFn: () => fetchMe(),
  retry: 0,
  queryKey: ["users", "me"],
  }, queryClient);


  return (
    <>
      <BrowserRouter>
        <Navigation login=''/>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/genres" element={<GenresMovie />} />
            <Route path="/genres/:genresId" element={<GenresMovieList />} />
            <Route path="/movies/:movieId" element={<MoviePage />} />
        </Routes>
        </AnimatePresence>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
