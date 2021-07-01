import "./Footer.css";
import {Route} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Route exact path={["/", "/movies", "/saved-movies"]}>
        <div className="footer page__header-footer">
          <p className="footer__text page__font page__font_weight_normal">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__wrapper">
            <p className="footer__date page__font page__font_weight_normal">
              &#64; 2020
            </p>
            <ul className="footer__links page__ul">
              <li className="footer__link-li">
                <a href={`https://praktikum.yandex.ru/`} className="footer__link page__font page__font_weight_normal">
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__link-li">
                <a href={`https://github.com/`} className="footer__link page__font page__font_weight_normal">
                  Github
                < /a>
              </li>
              <li href={`https://github.com/`} className="footer__link-li">
                <a className="footer__link page__font page__font_weight_normal">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Route>
    </>
  );
};

export default Footer;
