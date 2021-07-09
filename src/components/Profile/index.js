import "./index.css";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts";
import { useFormWithValidation } from "../../utils/hooks";

const Profile = ({ onSubmit, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({
      name: currentUser.name,
      email: currentUser.email,
    });

  const [info, setInfo] = useState({});
  const handleInput = (evt) => {
    const { name, value } = evt.target;
    setInfo({ ...info, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <section className="profile">
      <h2 className="profile__title page__font page__font_weight_bold">
        {`Привет, ${currentUser.name}!`}
      </h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__form-row">
          <label
            htmlFor={`profile-name`}
            className="profile__text page__font page__font_weight_bold"
          >
            Имя
          </label>
          <input
            onChange={handleChange}
            name="name"
            id="profile-name"
            required
            minLength={4}
            className="profile__input page__font page__font_weight_normal"
            value={values.name}
          />
        </div>
        <span className="auth__error profile__error" id={`profile-email-error`}>
          {errors.name}
        </span>
        <div className="profile__form-row">
          <label
            htmlFor={`profile-email`}
            className="profile__text page__font page__font_weight_bold"
          >
            Почта
          </label>
          <input
            onChange={handleChange}
            name="email"
            required
            minLength={4}
            id="profile-email"
            className="profile__input page__font page__font_weight_normal"
            value={values.email}
          />
        </div>
        <span className="auth__error profile__error" id={`profile-email-error`}>
          {errors.email}
        </span>
        <button
          type={"submit"}
          onClick={handleSubmit}
          disabled={!isValid}
          className="profile__submit page__button page__font page__font_weight_normal"
        >
          Редактировать
        </button>
      </form>

      <button
        onClick={onLogout}
        className="profile__link_exit page__button page__font page__font_weight_normal"
      >
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
