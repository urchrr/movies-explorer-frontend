import "./index.css";
import SearchForm from "../SearchForm";
import MoviesList from "../MoviesCardList";
import Preloader from "../Preloader";
import { useEffect, useState } from "react";
import { searchF, shortFilmCheck, sleep } from "../../utils";
import { getLS, setLS, chkLS } from "../../utils";
import { useGlobalBeats } from "../../contexts/globalhook";
import { useMoreNumbers } from "../../utils/hooks";
import {
  beatFilmsKey,
  beatFilmsResultSearchKey,
  usersFilmsKey,
} from "../../utils/constants";

const Movies = () => {
  const keyLS = beatFilmsResultSearchKey;
  const [beatFilms, beatFilmsAction] = useGlobalBeats();
  const { films, isShortFilm, searchedFilms, searchTerm } = beatFilms;
  // const [shortFilmTrigger, setShortFilm] = useState(beatFilms.isShortFilm);
  //

  const [showEmpty, setEmpty] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [st, set] = useState(searchedFilms);
  //
  const { initialCardsNumber, numberMore } = useMoreNumbers();
  const [howMuch, setHowMuch] = useState(initialCardsNumber);

  // useEffect(() => {
  //   if (chkLS(keyLS)) {
  //     setShowResult(true);
  //   } else {
  //     setShowResult(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   const films = getLS(beatFilmsKey);
  //   if (chkLS("btword")) {
  //     const s = getLS("btword");
  //     const f = searchF(Object.values(films), s);
  //     beatFilmsAction.setSearchedFilms(f);
  //   }
  // }, []);

  // useEffect(() => {
  //   function dos() {
  //     beatFilmsAction.setShortFilm();
  //     beatFilmsAction.setShortFilm();
  //   }
  //   setTimeout(dos, 100);
  // }, []);

  useEffect(() => {
    if (chkLS("btword") !== "") {
      console.log("uf true");
      if (isShortFilm) {
        // usersFilmsActions.setSearchedFilms(qt);
        set(
          searchedFilms
            .filter((val) => shortFilmCheck(val.duration))
            .slice(0, howMuch)
        );
        setShowResult(true);
      } else {
        // usersFilmsActions.setSearchedFilms(r);
        set(searchedFilms.slice(0, howMuch));
        setShowResult(true);
      }
    } else {
      console.log("uf false");
      setShowResult(false);
      set([]);
    }
  }, [isShortFilm, howMuch, searchedFilms]);

  function handleMore() {
    setHowMuch(howMuch + numberMore);
  }
  function handleFilter() {
    // setShortFilm(!shortFilmTrigger);
    beatFilmsAction.setShortFilm();
  }

  async function handleSearch() {
    //сбрасываем отображение инфо модулей
    setShowAlert(false);
    setEmpty(false);
    setShowResult(false);
    //если поисковая строка не пустая
    if (getLS("btword") !== "") {
      //сбрасываем кнопку ещё
      setHowMuch(initialCardsNumber);
      setShowPreloader(true);
      await showSearchResult(getLS(keyLS));
    } else {
      setEmpty(true);
    }
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

  function result() {
    if (chkLS(keyLS)) {
      const r = getLS(keyLS);
      if (isShortFilm) {
        return r
          .filter((val) => shortFilmCheck(val.duraction))
          .slice(0, howMuch);
      } else {
        return r.slice(0, howMuch);
      }
    } else {
      return null;
    }
  }
  function showMoreButton() {
    if (chkLS(keyLS)) {
      return !(howMuch >= st.length);
    } else return false;
  }
  return (
    <>
      <SearchForm
        source={beatFilms}
        actions={beatFilmsAction}
        keyLS={keyLS}
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

      <MoviesList movies={st} isOpen={showResult} />

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
