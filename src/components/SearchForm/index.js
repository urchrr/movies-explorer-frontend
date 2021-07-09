import "./index.css";
import SearchIcon from "../../images/search_icon.svg";
import FilterCheckbox from "./FilterCheckbox";
import useWindowDimensions from "../../utils/useWindowDimensions";

const SearchForm = (props) => {
  const { width } = useWindowDimensions();
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
          value={props.value}
          onChange={(e) => {
            props.onChangeInput(e.target.value);
          }}
        />
        <button
          className="search-form__button page__font
        page__font_weight_bold page__button"
          onClick={props.onSearch}
        >
          Найти
        </button>
      </div>
      <div className="search-from__checkbox">
        <FilterCheckbox
          label="Короткометражки"
          onChange={props.onChangeCheckbox}
          value={props.checkboxValue}
        />
      </div>
    </section>
  );
};

export default SearchForm;
