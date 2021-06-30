import "./index.css";
import SearchIcon from "../../images/search_icon.svg";
import FilterCheckbox from "../FilterCheckbox";
import useWindowDimensions from "../../utils/useWindowDimensions";

const SearchForm = () => {
  const {width} = useWindowDimensions();
  return (
    <section className="search-form page__section">
      <div className="search-form__wrapper">
        {width > 520 && <img className="search-form__icon" src={SearchIcon} alt="лупа"/>}
        <input
          className="page__font page__font_weight_bold search-form__input"
          type="text"
          placeholder="Фильм"
        />
        <button
          className="seacrh-form__button page__font
        page__font_weight_bold seach-form__button page__button"
        >
          Найти
        </button>
      </div>
      <div className="search-from__checkbox">
        <FilterCheckbox label="Короткометражки"/>
      </div>
    </section>
  );
};

export default SearchForm;
