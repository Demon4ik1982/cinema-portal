import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { Logo, LogoMini, LogoMobile } from "../../ui/svg/svgGallery";
import { UserLogin } from "../../api/User";
import { Movies } from "../../models/Movie";
import Api from "../../api/api";
import { serchMovie } from "../../util/serchMovie/serchMovie";
import "./navigation.css";
import { icon } from "../../ui/icon/icon";
import { SearchMovieField } from "../searchMovieField/searchMovieField";

type AuthType = "login" | "registration";

type ILogin = {
  login?: UserLogin;
};

export const Navigation = ({ login }: ILogin) => {
  const [modalActive, setModalActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [movies, setMovies] = useState<Movies>([]);
  const [filtreMovies, setFiltreMovies] = useState<Movies>([]);
  const [close, setClose] = useState(false);
  const [closeMobile, setCloseMobile] = useState(false);

  const [authType, setAuthType] = useState<AuthType>("login");
  const [inputValue, setInputValue] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth > 1154)

    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 1154);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    setAuthType((prevState) =>
      prevState === "registration" ? "login" : "registration"
    );
  };
  const getMovies = async (): Promise<void> => {
    const data = await Api.getMoviesList();
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (inputValue.trim() !== "") {
        setSearchActive(true);
        const filter = serchMovie(inputValue.trim(), movies);
        setFiltreMovies(filter);
        setClose(true);
      } else {
        setSearchActive(false);
        setClose(false);
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [inputValue]);

  return (
    <header className="header">
      <div className="nav-content container">
        {!closeMobile ? <div className="nav__wrapper">
          <Link to={"/"}>
          {isMobile ? <Logo /> : <LogoMobile/>}

          </Link>
          <ul className="nav__list">
            {isMobile ? <><li className="nav__item">
              <Link
                to={"/"}
                className="nav__item-link"
                onClick={() => {
                  setSearchActive(false), setInputValue("");
                }}
              >
                Главная
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={"/genres"}
                className="nav__item-link"
                onClick={() => {
                  setSearchActive(false), setInputValue("");
                }}
              >
                Жанры
              </Link>
            </li></> : <li className="nav__item"><Link to={"/genres"}><div className='segment-switch-icon' dangerouslySetInnerHTML={{ __html: `${icon.menu}` }}></div></Link></li>}
            {isMobile ? <><li className="nav__item nav__input">
              <SearchMovieField close={close} inputValue={inputValue} searchActive={searchActive} filtreMovies={filtreMovies} setInputValue={setInputValue} setSearchActive={setSearchActive}/>
            </li></> : <li className="nav__item"> <button className="btn-reset" onClick={() => setCloseMobile(true)}>
                <div className='segment-switch-icon' dangerouslySetInnerHTML={{ __html: `${icon.search}` }}>
              </div>
              </button>
              </li> }

            <li className="nav__item">
              {login ? (
                <Link
                  to={"/user"}
                  onClick={() => {
                    setSearchActive(false), setInputValue("");
                  }}
                  className="nav__item-link"
                >
                  {isMobile ? `${login.name}` : <div className='segment-switch-icon' dangerouslySetInnerHTML={{ __html: `${icon.person}` }}></div>}
                </Link>
              ) : ( isMobile ?
                <button
                  className="authorization nav__item-link btn-reset"
                  onClick={() => {
                    setSearchActive(false),
                      setInputValue(""),
                      setModalActive(true);
                  }}
                >
                  Войти
                </button> : <button
                  className="btn-reset"
                  onClick={() => {
                    setSearchActive(false),
                      setInputValue(""),
                      setModalActive(true);
                  }}
                ><div className='segment-switch-icon' dangerouslySetInnerHTML={{ __html: `${icon.person}` }}></div></button>
              )}
            </li>
          </ul>
        </div> : <div className="search-wrapper-mobile"><SearchMovieField close={true} setCloseMobile={setCloseMobile} inputValue={inputValue} searchActive={searchActive} filtreMovies={filtreMovies} setInputValue={setInputValue} setSearchActive={setSearchActive}/></div>}

        <Modal active={modalActive} setActive={setModalActive}>
          <LogoMini />
          <div className="modal-content-warpper">
            {authType === "registration" ? (
              <span className="modal-content-descr">Регистрация</span>
            ) : (
              ""
            )}
            {authType === "registration" ? (
              <RegistrationForm setActive={setModalActive} />
            ) : (
              <LoginForm setActive={setModalActive} />
            )}
            <Button type="outline" onClick={handleClick}>
              {authType === "registration" ? "Войти" : "Создать аккаунт"}
            </Button>
          </div>
        </Modal>
      </div>
    </header>
  );
};
