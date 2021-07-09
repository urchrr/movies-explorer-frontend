import "./index.css";
import { Link, useLocation } from "react-router-dom";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { useContext, useState } from "react";
import { UserAuthContext } from "../../contexts";

function Navigation() {
  const { loggedIn } = useContext(UserAuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const { width } = useWindowDimensions();
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const Menu = () => {
    return (
      <>
        <ul className="navigation">
          {width < 960 && (
            <li className="navigation__li">
              <Link
                className={`navigation__link page__font
              ${location.pathname === "/" ? "navigation__link_active" : ""}`}
                to="/"
              >
                Главная
              </Link>
            </li>
          )}
          <li className="navigation__li">
            <Link
              className={`navigation__link page__font
              ${
                location.pathname === "/movies" ? "navigation__link_active" : ""
              }`}
              to="/movies"
            >
              Фильм
            </Link>
          </li>
          <li className="navigation__li" id={"saved-movies-but"}>
            <Link
              className={`navigation__link page__font
              ${
                location.pathname === "/saved-movies"
                  ? "navigation__link_active"
                  : ""
              }`}
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </li>
        </ul>

        <Link
          className="navigation__profile-link"
          to="/profile"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p
            className={`navigation__link page__font
              ${
                location.pathname === "/profile"
                  ? "navigation__link_active"
                  : ""
              }`}
          >
            Аккаунт
          </p>
          <button className="navigation__profile-btn page__button">{""}</button>
        </Link>
      </>
    );
  };
  return (
    <div>
      {/*<p className='page__font'>{`${width} ${height}`}</p>*/}
      {!loggedIn ? (
        <>
          <div className="navigation__auth">
            <Link
              className="navigation__sign-up page__font page__font_weight_bold"
              to="/signup"
            >
              Регистрация
            </Link>
            <Link
              className="navigation__sign-in page__font page__font_weight_bold"
              to="/signin"
            >
              Войти
            </Link>
          </div>
        </>
      ) : (
        <>
          {width >= 960 && (
            <div className={`navigation__menu-wrapper`}>
              <Menu />
            </div>
          )}
          {width < 960 && (
            <>
              <button
                className={`navigation__menu-button`}
                onClick={handleMenu}
              >
                {""}
              </button>
              <div
                className={`navigation__menu-popup ${
                  showMenu ? "navigation__menu-popup_visible" : ""
                }`}
              >
                <div className={`navigation__menu-wrapper`}>
                  <button
                    className={`navigation__menu-exit`}
                    onClick={handleMenu}
                  >
                    {""}
                  </button>
                  <Menu />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Navigation;
