import { FC, Suspense } from "react";
import { RandomMovies } from "../RandomMovies/RandomMovies";
import { TopMovies } from "../TopMovies/TopMovies";
import { Loader } from "../../components/Loader";


export const MainPage: FC = () => {
  return (
    <>
    <section className="main container">

    <Suspense fallback={<Loader/>}>
      <RandomMovies/>
    </Suspense>
    <Suspense fallback={<Loader/>}>
      <TopMovies />
    </Suspense>


    </section>
    </>
  )

}
