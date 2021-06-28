import "./index.css";
import { Link, useLocation, Route } from "react-router-dom";
import useWindowDimensions from "../../utils/useWindowDimensions";

function Navigation() {
  const location = useLocation();
  const { width } = useWindowDimensions();
  return (
    <div>
            <p className='page__font'>{width}</p>
      <Route exact path="/">
        <ul className="navigation">
          <li
            className="navigation__li navigation__signup"
            style={{ marginRight: "30px" }}
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
        {width > 960 && (
          <ul className="navigation">
            <li className="navigation__li">
              <Link
                style={{
                  lineHeight: "18px",
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
              style={{ marginRight: "50px", lineHeight: "18px" }}
            >
              <Link
                style={{
                  lineHeight: "18px",
                  fontWeight:
                    location.pathname === "/saved-movies" ? "500" : "400",
                }}
                className="navigation__link page__font"
                to="/saved-movies"
              >
                Сохраненные фильмы
              </Link>
            </li>
            <li className="navigation__li">
              <Link
                className="navigation__link"
                to="/profile"
                style={{ display: "flex", alignItems: "center" }}
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
            </li>
          </ul>
        )}
        {/* {
          width < 960 && (

          )
        } */}
      </Route>
    </div>
  );
}
export default Navigation;