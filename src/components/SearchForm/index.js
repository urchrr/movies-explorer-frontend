import "./index.css";
import SearchIcon from "../../images/search_icon.svg";
import FilterCheckbox from "./FilterCheckbox";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { setLS, searchF } from "../../utils";
import { useState } from "react";

const SearchForm = (props) => {
  const { source, actions, keyLS } = props;
  const { width } = useWindowDimensions();
  const [values, setValues] = useState("");
  function handleInput(e) {
    setValues(e.target.value);
    console.log(e.target.value);
  }
  function searchFilms() {
    //возвращает поисковый массив
    const { searchTerm, films } = source;
    console.log("ssss", searchTerm);
    return searchF(Object.values(films), searchTerm);
  }
  function handleSearch() {
    actions.setSearchTerm(values);
    actions.setSearchedFilms(searchFilms());
    setLS(keyLS, searchFilms());
    props.onSearch();
    setLS(source.lsKey, values);
  }
  return (
    <section className="search-form page__section">
      <div className="search-form__wrapper">
        {width > 520 && (
          <label htmlFor={"search-input"}>
            <img className="search-form__icon" src={SearchIcon} alt="лупа" />
          </label>
        )}
        <input
          id={"search-input"}
          className="page__font page__font_weight_bold search-form__input"
          type="text"
          placeholder="Фильм"
          value={values}
          onChange={handleInput}
        />
        <button
          className="search-form__button page__font
        page__font_weight_bold page__button"
          onClick={handleSearch}
          disabled={values === ""}
        >
          Найти
        </button>
      </div>
      <div className="search-from__checkbox">
        <FilterCheckbox
          label="Короткометражки"
          onChange={props.onChangeCheckbox}
          value={source.isShortFilm}
        />
      </div>
    </section>
  );
};

export default SearchForm;
