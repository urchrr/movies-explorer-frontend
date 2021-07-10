import "./index.css";
import SearchForm from "../SearchForm";
import MoviesList from "../MoviesCardList";
import Preloader from "../Preloader";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { shortFilmCheck, sleep } from "../../utils";

import { useGlobalBeats } from "../../contexts/globalhook";

const Movies = () => {
  const [beatFilms, beatFilmsAction] = useGlobalBeats();
  const { width } = useWindowDimensions();
  const [shortFilmTrigger, setShortFilm] = useState(beatFilms.isShortFilm);
  //
  const [showEmpty, setEmpty] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [showResult, setShowResult] = useState(false);
  //
  let initialCardsNumber = width >= 1280 ? 12 : width >= 768 ? 8 : 5;
  let numberMore = width > 1200 ? 3 : 2;
  const [howMuch, setHowMuch] = useState(initialCardsNumber);

  useEffect(() => {
    const a = searchFilms();
    beatFilmsAction.setSearchedFilms(a);
    if (beatFilms.searchedFilms.length > 0) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, []);

  function handleMore() {
    setHowMuch(howMuch + numberMore);
    // const len = searchFilms().length;
    // if (len - howMuch < numberMore) {
    //   setHowMuch(len);
    // } else {
    //   setHowMuch(howMuch + numberMore);
    // }
  }
  function handleFilter() {
    setShortFilm(!shortFilmTrigger);
    beatFilmsAction.setShortFilm();
  }

  async function handleSearch() {
    setShowAlert(false);
    setEmpty(false);
    setShowResult(false);
    if (beatFilms.searchTerm !== "") {
      //сбрасываем кнопку ещё
      setHowMuch(initialCardsNumber);
      //сбрасываем отображение инфо модулей
      setShowPreloader(true);
      //делаем поиск по фильмам
      const a = searchFilms();
      beatFilmsAction.setSearchedFilms(a);
      await showSearchResult(a);
    } else {
      setEmpty(true);
    }
  }

  function searchFilms() {
    const { searchTerm, isShortFilm, films } = beatFilms;
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
  async function showSearchResult(res) {
    const delay = 1000;
    if (res.length === 0) {
      //если длина массива искомых фильмов нулевая - показать не найдено
      await sleep(delay);
      setShowPreloader(false);
      setShowAlert(true);
    } else if (res.length > 0) {
      await sleep(delay);
      setShowPreloader(false);
      setShowResult(true);
    }
  }

  return (
    <>
      <SearchForm
        value={beatFilms.searchTerm}
        onChangeInput={beatFilmsAction.setSearchTerm}
        checkboxValue={beatFilms.isShortFilm}
        onChangeCheckbox={handleFilter}
        onSearch={handleSearch}
      />
      {showAlert && (
        <p className={"page__font"} style={{ marginTop: "50px" }}>
          Ничего не найдено{" "}
        </p>
      )}
      {showEmpty && (
        <p className={"page__font"} style={{ marginTop: "50px" }}>
          Введите ключевое слово{" "}
        </p>
      )}
      <Preloader isOpen={showPreloader} />

      <MoviesList
        movies={beatFilms.searchedFilms.slice(0, howMuch)}
        isOpen={showResult}
      />

      {!(howMuch >= beatFilms.searchedFilms.length) && (
        <button
          onClick={handleMore}
          className="movie-list__more page__font page_font_weight_bold page__section"
        >
          Eщё
        </button>
      )}
    </>
  );
};

export default Movies;
