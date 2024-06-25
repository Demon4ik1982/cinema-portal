import { useState } from "react";
import './navigation.css'
import Modal from "../modal/Modal";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { Logo, LogoMini } from "../../ui/svg/svgGallery";


type AuthType = 'login' | 'registration';

type ILogin = {
  login: string
}

export const Navigation = ({ login }: ILogin) =>  {
  const [modalActive, setModalActive] = useState(false)
  const [authType, setAuthType] = useState<AuthType>('login');
  login
  const handleClick = () => {
    setAuthType((prevState) =>
      prevState === "registration" ? "login" : "registration",
    );
  };

  return (
    <header className="header">
      <div className="nav-content container">
        <div className="nav__wrapper">
          <Link to={"/"}>
            <Logo/>
          </Link>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to={"/"} className="nav__item-link">
                Главная
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/genres"} className="nav__item-link">
                Жанры
              </Link>
            </li>
              <input type="text" className="header__search" placeholder="Поиск" />
          </ul>
          <button className="authorization btn-reset" onClick={() => setModalActive(true)}>
            Войти
          </button>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <LogoMini/>
              <div className="modal-content-warpper">
                {authType === "registration" ? <span className="modal-content-descr">Регистрация</span> : ""}
                {authType === "registration" ? <RegistrationForm setActive={setModalActive} /> : <LoginForm setActive={setModalActive}/>}
                <Button type='outline' onClick={handleClick}>{authType === "registration" ? "Войти" : "Создать аккаунт"}</Button>
              </div>
        </Modal>
      </div>

    </header>
  );
}
