import "./index.css";
import { Route } from "react-router-dom";
import { useState } from "react";
import * as api from "../../utils/MainApi";
import beatFilmsUrl from "../../utils/beatFilmsUrl";
import { useGlobalBeats, useGlobalFilms } from "../../contexts/globalhook";
import { setLS, shortFilmCheck } from "../../utils";
import {
  beatFilmsKey,
  beatFilmsResultSearchKey,
  usersFilmsKey,
  usersFilmsResultSearchKey,
} from "../../utils/constants";

const MoviesCard = (props) => {
  const [usersFilms, usersFilmsActions] = useGlobalFilms();
  const [beatFilms, beatFilmsAction] = useGlobalBeats();
  const { card, onImgClick } = props;
  // const [fav, setFav] = useState(!!card.owner);
  const [state, setState] = useState({
    country: card.country === null ? "null" : card.country,
    director: card.director === null ? "null" : card.director,
    duration: card.duration,
    year: card.year,
    description: card.description,
    image:
      typeof card.image === "string"
        ? card.image
        : beatFilmsUrl + card.image.url,
    trailer: card.trailer
      ? card.trailer
      : card.trailerLink === null
      ? "null"
      : card.trailerLink,
    nameRU: card.nameRU === null ? "null" : card.nameRU,
    nameEN:
      card.nameEN === null
        ? "null"
        : card.nameEN === ""
        ? (card.nameEN = "name")
        : card.nameEN,
    thumbnail: card.thumbnail
      ? card.thumbnail
      : beatFilmsUrl + card.image.formats.thumbnail.url,
    movieId: card.id,
    owner: card.owner ? card.owner : null,
    _id: card._id ? card._id : null,
  });
  function searchFilms() {
    const { searchTerm, films } = beatFilms;
    return Object.values(films).filter((val) => {
      return val.nameRU.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  function handleLikeButton() {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      nameRU,
      nameEN,
      thumbnail,
      movieId,
    } = state;

    if (state.owner) {
      handleDeleteButton();
      console.log("удаляем");
    } else {
      console.log("сохраняем");
      api
        .saveFilm({
          country,
          director,
          duration,
          year,
          description,
          image,
          trailer,
          nameRU,
          nameEN,
          thumbnail,
          movieId,
        })
        .then((data) => {
          const { owner, _id, movieId } = data;
          const newCard = { ...state, owner, _id };
          //добавим информации о карте с сервера
          setState(newCard);
          // setFav(true);
          //обновить стейт сохраненок
          usersFilmsActions.addFilm(movieId, newCard);
          const n = [...usersFilms.searchedFilms];
          n.push(newCard);
          usersFilmsActions.setSearchedFilms(n);
          //обновить стейт с битфильмсом!
          const nb = { ...beatFilms.films };
          nb[movieId].owner = owner;
          nb[movieId]._id = _id;
          beatFilmsAction.addFilms(nb);
          setLS(beatFilmsKey, nb);
          const nn = [...beatFilms.searchedFilms];
          nn.forEach((c) => {
            if (c.id === newCard.movieId) {
              c.owner = owner;
              c._id = _id;
            }
          });
          beatFilmsAction.setSearchedFilms(nn);
          setLS(beatFilmsResultSearchKey, nn);
        })
        .catch((err) => console.log(err));
    }
  }

  function handleDeleteButton() {
    console.log("delete", card);
    api
      .unsaveFilm(state._id)
      .then((res) => {
        const { movieId } = res;
        const nb = { ...beatFilms.films };
        delete nb[movieId].owner;
        delete nb[movieId]._id;
        beatFilmsAction.addFilms(nb);
        setLS(beatFilmsKey, nb);
        const nt = [...beatFilms.searchedFilms];
        nt.forEach((f) => {
          if (f.id === movieId) {
            delete f.owner;
            delete f._id;
          }
        });
        beatFilmsAction.setSearchedFilms(nt);
        setLS(beatFilmsResultSearchKey, nt);
        //
        const newCard = { ...state };
        delete newCard.owner;
        delete newCard._id;
        setState(newCard);
        //

        const newObj = { ...usersFilms.films };
        delete newObj[movieId];
        usersFilmsActions.addFilms(newObj);
        setLS(usersFilmsKey, newObj);
        const nn = [...usersFilms.searchedFilms];
        const nnn = nn.filter((f) => f.movieId !== movieId);
        usersFilmsActions.setSearchedFilms(nnn);
        setLS(usersFilmsResultSearchKey, nnn);
        props.onDelete(movieId);
      })
      .catch((err) => console.log(err));
  }
  function handleImgClick() {
    onImgClick(state.trailer);
  }
  const Help = () => {
    return (
      <>
        {" "}
        <button
          onClick={() => {
            console.log("!!!!!", beatFilms.searchedFilms);
          }}
        >
          click
        </button>
        <button
          onClick={() => {
            console.log("!!!!!", state);
          }}
        >
          click с
        </button>
        <button
          onClick={() => {
            console.log("!!!!!", beatFilms.films);
          }}
        >
          click or
        </button>
        <button
          onClick={() => {
            console.log("!!!!!", usersFilms.films);
          }}
        >
          click users
        </button>
      </>
    );
  };
  return (
    <article className="movie-card">
      {/*<Help />*/}
      <div className="movie-card__info">
        <h3 className="movie-card__title page__font page__font_weight_bold">
          {state.nameRU}
        </h3>
        <p className="movie-card__length page__font page__font_weight_normal">
          {state.duration > 60
            ? `${Math.trunc(state.duration / 60)}ч ${state.duration % 60}м`
            : `${state.duration}м`}
        </p>
        <Route path="/movies">
          <button
            className={`movie-card__button movie-card__button_save ${
              state.owner ? "movie-card__button_save_active" : ""
            }`}
            onClick={handleLikeButton}
          >
            {""}
          </button>
        </Route>
        <Route path="/saved-movies">
          <button
            className="movie-card__button movie-card__button_delete"
            onClick={handleDeleteButton}
          >
            {""}
          </button>
        </Route>
      </div>
      <img
        className="movie-card__img"
        src={state.image}
        alt={state.nameRU}
        onClick={handleImgClick}
      />
    </article>
  );
};

export default MoviesCard;
