import React from "react";
import globalHook from "use-global-hook";

const beatsInitialState = {
  films: {},
  searchTerm: "",
  isShortFilm: false,
  searchedFilms: [],
};

//
const filmsInitialState = {
  films: {},
  searchTerm: "",
  isShortFilm: false,
};

const actions = {
  addFilm: (store, key, item) => {
    //разложили все фильмы
    const films = { ...store.state.films };
    //добавили обновили фильм по id
    films[key] = item;
    //записали в стейт
    store.setState({ ...store.state, films });
  },
  addFilms: (store, films) => {
    store.setState({ ...store.state, films });
  },
  setSearchTerm: (store, value) => {
    store.setState({ ...store.state, searchTerm: value });
  },
  setShortFilm: (store) => {
    const val = store.state.isShortFilm;
    store.setState({ ...store.state, isShortFilm: !val });
  },
  setSearchedFilms: (store, value) => {
    store.setState({ ...store.state, searchedFilms: value });
  },
};

export const useGlobalBeats = globalHook(React, beatsInitialState, actions);
export const useGlobalFilms = globalHook(React, filmsInitialState, actions);
