import React from "react";
import globalHook from "use-global-hook";
import { chkLS, getLS, searchF } from "../utils";
import {
  beatFilmsKey,
  btSearchTermKey,
  usersFilmsKey,
  usrSearchTermKey,
} from "../utils/constants";

const beatsInitialState = {
  films: chkLS(beatFilmsKey) ? getLS(beatFilmsKey) : {},
  searchTerm: chkLS(btSearchTermKey) ? getLS(btSearchTermKey) : "",
  isShortFilm: false,
  lsKey: btSearchTermKey,
  searchedFilms:
    chkLS(beatFilmsKey) && chkLS(btSearchTermKey)
      ? searchF(Object.values(getLS(beatFilmsKey)), getLS(btSearchTermKey))
      : [],
};

//
const filmsInitialState = {
  films: chkLS(usersFilmsKey) ? getLS(usersFilmsKey) : {},
  searchTerm: chkLS(usrSearchTermKey) ? getLS(usrSearchTermKey) : "",
  isShortFilm: false,
  lsKey: usrSearchTermKey,
  searchedFilms: chkLS(usersFilmsKey)
    ? Object.values(getLS(usersFilmsKey))
    : [],
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
