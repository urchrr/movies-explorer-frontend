import "./index.css";

const FilterCheckbox = (props) => {
  return (
    <div className="filter-checkbox__switch">
      <input
        type="checkbox"
        className="filter-checkbox__input"
        id="filter-checkbox"
        checked={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <label className="filter-checkbox__slider" htmlFor="filter-checkbox">
        {""}
      </label>
      <label
        className="filter-checkbox__label page__font page__font_weight_normal"
        htmlFor="filter-checkbox"
      >
        {props.label}
      </label>
    </div>
  );
};

export default FilterCheckbox;
