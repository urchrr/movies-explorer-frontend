import "./index.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="not-found">
      <h2 className="not-found__title page__font page__font_weight_normal">404</h2>
      <p className="not-found__text page__font page__font_weight_normal">Страница не найдена</p>
      <Link to="/movies" className="not-found__link page__font page__font_weight_normal">
        Назад
      </Link>
    </section>
  );
};

export default NotFound;
