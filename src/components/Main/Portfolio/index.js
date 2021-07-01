import "./index.css";
import LinkArrow from "../../../images/link__arrow.svg";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <section className="portfolio page__section">
      <h2 className="portfolio__heading page__font page__font_weight_normal">
        Портфолио
      </h2>
      <ul className="page__ul">
        <li className='portfolio__links-list_item'>
          <a
            href="#about"
            className="portfolio__link page__font page__font_weight_normal"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <img src={LinkArrow} alt="стрелка ссылки" />
          </a>
        </li>
        <li className='portfolio__links-list_item'>
          <a
            href="#techs"
            className="portfolio__link page__font page__font_weight_normal"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img src={LinkArrow} alt="стрелка ссылки" />
          </a>
        </li>
        <li className='portfolio__links-list_item'>
          <Link
            to='/movies'
            className="portfolio__link page__font page__font_weight_normal"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img src={LinkArrow} alt="стрелка ссылки" />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
