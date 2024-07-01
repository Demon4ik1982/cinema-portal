import { Movies } from '../../models/Movie';
import { FormField } from '../FormField';
import SearchMovieList from '../searchMovieList/searchMovieList';
import './searchMovieField.css'

type IProps = {
  close: boolean;
  inputValue: string;
  searchActive: boolean;
  filtreMovies: Movies;
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>
  setCloseMobile?: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchMovieField = ({close, inputValue, searchActive, filtreMovies, setInputValue, setSearchActive, setCloseMobile}: IProps) => {

  return <>
          <FormField
          label="text"
          iconType="search"
          className="search-icon"
          close={close}
          setInputValue={setInputValue}
          setActive={setSearchActive}
          setCloseMobile={setCloseMobile}
        >
          <input
            type="text"
            name="email"
            className="header__search"
            placeholder="Поиск"
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />
        </FormField>
        <SearchMovieList
          active={searchActive}
          setActive={setSearchActive}
          movieList={filtreMovies}
          setInputValue={setInputValue}
        />
      </>
}
