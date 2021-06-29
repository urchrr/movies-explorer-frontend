import "./index.css";
import {Link, useLocation, Route} from "react-router-dom";
import useWindowDimensions from "../../utils/useWindowDimensions";
import {useState} from "react";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation();
  const { width} = useWindowDimensions();
  const handleMenu = () => {
    setShowMenu(!showMenu);
  }
  const Menu = () => {
    return (
      <>
        <ul className="navigation">
          {width < 960 &&
          <li className="navigation__li">
            <Link
              style={{
                fontWeight: location.pathname === "/" ? "500" : "400",
              }}
              className="navigation__link page__font"
              to="/"
            >
              Главная
            </Link>
          </li>}
          <li className="navigation__li">
            <Link
              style={{
                fontWeight: location.pathname === "/movies" ? "500" : "400",
              }}
              className="navigation__link page__font"
              to="/movies"
            >
              Фильм
            </Link>
          </li>
          <li
            className="navigation__li"
            id={'saved-movies-but'}
          >
            <Link
              style={{
                fontWeight:
                  location.pathname === "/saved-movies" ? "500" : "400",
              }}
              className="navigation__link page__font"
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </li>
        </ul>

        <Link
          className="navigation__profile-link"
          to="/profile"
          style={{display: "flex", alignItems: "center"}}
        >
          <p
            style={{
              fontWeight:
                location.pathname === "/profile" ? "500" : "400",
            }}
            className="navigation__link page__font"
          >
            Аккаунт
          </p>
          <button className="navigation__profile-btn page__button">{""}</button>
        </Link>

      </>
    )
  }
  return (
    <div>
      {/*<p className='page__font'>{`${width} ${height}`}</p>*/}
      <Route exact path="/">
        <ul className="navigation__auth">
          <li
            className="navigation__li navigation__signup"
            style={{marginRight: "30px"}}
          >
            <Link
              className="navigation__link page__font page__font_weight_bold"
              to="/signup"
            >
              Регистрация
            </Link>
          </li>
          <li className="navigation__li navigation__signin">
            <Link
              className="navigation__link page__font page__font_weight_bold"
              to="/signin"
            >
              Войти
            </Link>
          </li>
        </ul>
      </Route>
      <Route path={["/movies", "/saved-movies", "/profile"]}>
        {width >= 960 && (
          <div className={`navigation__menu-wrapper`}>
            <Menu/>
          </div>
        )}
        {
          width < 960 && (
            <>
              <button className={`navigation__menu-button`} onClick={handleMenu}>
                {""}
              </button>
              <div className={`navigation__menu-popup ${showMenu ? 'navigation__menu-popup_visible' : ''}`}>
                <div className={`navigation__menu-wrapper`}>
                  <button className={`navigation__menu-exit`} onClick={handleMenu}>
                    {""}</button>
                  <Menu/>
                </div>
              </div>
            </>
          )
        }
      </Route>
    </div>
  );
}

export default Navigation;