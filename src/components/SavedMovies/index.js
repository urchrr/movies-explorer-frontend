import "./index.css";
import SearchForm from "../SearchForm";
import MoviesList from "../MoviesCardList";
import * as api from "../../utils/MainApi";
import { useEffect, useState } from "react";
import * as moviesApi from "../../utils/MoviesApi";
import { shortFilmCheck, sleep } from "../../utils";
import { useGlobalFilms } from "../../contexts/globalhook";

const SavedMovies = () => {
  const [usersFilms, usersFilmsActions] = useGlobalFilms();
  const { films } = usersFilms;
  const [shortFilm, setShortFilm] = useState(false);
  const [showResult, setShowResult] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  //
  useEffect(() => {
    const a = searchFilms();
    usersFilmsActions.setSearchedFilms(a);
  }, []);

  function searchFilms() {
    const { searchTerm, isShortFilm, films } = usersFilms;
    return Object.values(films).filter((val, idx) => {
      val.idx = idx;
      const qt = val.nameRU.toLowerCase().includes(searchTerm.toLowerCase());
      return searchTerm.length === 0
        ? isShortFilm
          ? shortFilmCheck(val.duration)
          : val
        : isShortFilm
        ? qt && shortFilmCheck(val.duration)
        : qt;
    });
  }
  function handleFilter() {
    setShortFilm(!shortFilm);
    usersFilmsActions.setShortFilm(!usersFilms.isShortFilm);
  }
  //

  function handleSearch() {
    setShowAlert(false);
    const a = searchFilms();
    usersFilmsActions.setSearchedFilms(a);
    if (a.length === 0) {
      //если длина массива искомых фильмов нулевая - показать не найдено
      setShowAlert(true);
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  }

  return (
    <>
      <SearchForm
        value={usersFilms.searchTerm}
        onChangeInput={usersFilmsActions.setSearchTerm}
        checkboxValue={usersFilms.isShortFilm}
        onChangeCheckbox={handleFilter}
        onSearch={handleSearch}
      />
      {showAlert && (
        <p className={"page__font"} style={{ marginTop: "50px" }}>
          Ничего не найдено{" "}
        </p>
      )}
      <MoviesList movies={searchFilms()} isOpen={showResult} />
    </>
  );
};

export default SavedMovies;
