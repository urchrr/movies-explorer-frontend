import "./index.css";
import { Route } from "react-router-dom";
import { useState } from "react";

const MoviesCard = ({ title, length, img }) => {
  const [fav, setFav] = useState(false);
  const handleFav = () => {
    setFav(!fav);
  };
  return (
    <article className="movie-card">
      <div className="movie-card__info">
        <h3 className="movie-card__title page__font page__font_weight_bold">
          {title}
        </h3>
        <p className="movie-card__length page__font page__font_weight_normal">
          {length}
        </p>
        <Route path="/movies">
          <button
            className={`movie-card__button movie-card__button_save ${
              fav ? "movie-card__button_save_active" : ""
            }`}
            onClick={handleFav}
          >{""}</button>
        </Route>
        <Route path="/saved-movies">
          <button className="movie-card__button movie-card__button_delete">{""}</button>
        </Route>
      </div>
      <img className="movie-card__img" src={img} alt={title} />
    </article>
  );
};

export default MoviesCard;
