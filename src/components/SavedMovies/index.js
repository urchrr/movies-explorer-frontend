import "./index.css";
import SearchForm from "../SearchForm";
import MoviesList from "../MoviesCardList";
import * as api from "../../utils/MainApi";
import { useCallback, useEffect, useState } from "react";
import * as moviesApi from "../../utils/MoviesApi";
import {
  chkLS,
  getLS,
  searchF,
  setLS,
  shortFilmCheck,
  sleep,
} from "../../utils";
import { useGlobalFilms } from "../../contexts/globalhook";
import {
  usersFilmsKey,
  usersFilmsResultSearchKey,
  usrSearchTermKey,
} from "../../utils/constants";
import Preloader from "../Preloader";

const SavedMovies = () => {
  const keyLS = usersFilmsResultSearchKey;
  const [usersFilms, usersFilmsActions] = useGlobalFilms();
  const { films, isShortFilm, searchedFilms, searchTerm } = usersFilms;
  const [showResult, setShowResult] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [st, set] = useState(searchedFilms);
  // const [showEmpty, setEmpty] = useState(false);
  // const [showPreloader, setShowPreloader] = useState(false);
  //

  // useEffect(() => {
  //   const films = getLS(usersFilmsKey);
  //   if (chkLS("usrword")) {
  //     const s = getLS("usrword");
  //     usersFilmsActions.setSearchedFilms(searchF(Object.values(films), s));
  //   } else {
  //     usersFilmsActions.setSearchedFilms(Object.values(films));
  //   }
  // }, []);
  //
  // useEffect(() => {
  //   function dos() {
  //     usersFilmsActions.setShortFilm();
  //     usersFilmsActions.setShortFilm();
  //   }
  //   setTimeout(dos, 100);
  // }, []);

  // useEffect(() => {
  //   const r = usersFilms.searchedFilms;
  //   const { isShortFilm } = usersFilms;
  //   if (usersFilms.searchTerm !== "") {
  //     if (isShortFilm) {
  //       // usersFilmsActions.setSearchedFilms(qt);
  //       set(r.filter((val) => shortFilmCheck(val.duraction)));
  //     } else {
  //       // usersFilmsActions.setSearchedFilms(r);
  //       set(r);
  //     }
  //   } else {
  //     set(false);
  //   }
  // }, [usersFilms.isShortFilm]);

  function handleFilter() {
    usersFilmsActions.setShortFilm();
  }
  //
  useEffect(() => {
    console.log("ufee");
    if (chkLS(usrSearchTermKey) !== "") {
      console.log("uf true");
      if (isShortFilm) {
        // usersFilmsActions.setSearchedFilms(qt);
        console.log("ufee s", searchedFilms);
        set(searchedFilms.filter((val) => shortFilmCheck(val.duration)));
        setShowResult(true);
      } else {
        // usersFilmsActions.setSearchedFilms(r);
        console.log("ufee s", searchedFilms);
        set(searchedFilms);
        setShowResult(true);
      }
    } else {
      console.log("uf false");
      setShowResult(false);
      set([]);
    }
  }, [isShortFilm, searchedFilms]);

  async function handleSearch() {
    setShowAlert(false);
    // setEmpty(false);
    setShowResult(false);
    if (usersFilms.searchTerm !== "") {
      // setShowPreloader(true);
      await showSearchResult(getLS(keyLS));
    } else {
      await showSearchResult(getLS(usersFilmsKey));
    }
  }

  async function showSearchResult(res) {
    const delay = 100;
    if (res.length === 0) {
      //если длина массива искомых фильмов нулевая - показать не найдено
      await sleep(delay);
      // setShowPreloader(false);
      setShowAlert(true);
    } else if (res.length > 0) {
      await sleep(delay);
      // setShowPreloader(false);
      setShowResult(true);
    }
  }

  const result = () => {
    if (usersFilms.searchTerm !== 0) {
      const r = usersFilms.searchedFilms;
      const { isShortFilm } = usersFilms;
      if (isShortFilm) {
        // usersFilmsActions.setSearchedFilms(qt);
        return r.filter((val) => shortFilmCheck(val.duraction));
      } else {
        // usersFilmsActions.setSearchedFilms(r);
        return r;
      }
    } else {
      return false;
    }
  };
  function onDelete(movieId) {
    console.log("on delete", movieId);
    console.log(st);
    const nn = [...st];
    const nnn = nn.filter((f) => f.movieId.toString() !== movieId.toString());
    set(nnn);
  }
  return (
    <>
      <SearchForm
        source={usersFilms}
        actions={usersFilmsActions}
        keyLS={keyLS}
        onChangeCheckbox={handleFilter}
        onSearch={handleSearch}
      />
      {showAlert && (
        <p className={"page__font"} style={{ marginTop: "50px" }}>
          Ничего не найдено{" "}
        </p>
      )}
      {/*{showEmpty && (*/}
      {/*  <p className={"page__font"} style={{ marginTop: "50px" }}>*/}
      {/*    Введите ключевое слово{" "}*/}
      {/*  </p>*/}
      {/*)}*/}
      {/*<Preloader isOpen={showPreloader} />*/}
      <MoviesList movies={st} isOpen={showResult} onDelete={onDelete} />
    </>
  );
};

export default SavedMovies;
