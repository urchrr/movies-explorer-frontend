import "../auth.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const auth = () => {
  return (
    <section className="auth">
      <div className="auth__wrapper">
        <div className="auth__logo">
          <Logo />
        </div>
        <h2 className="auth__title page__font page__font_weight_bold">
          Добро пожаловать!
        </h2>
        <form className="auth__form">
          <label
            className="auth__label page__font page__font_weight_normal"
            htmlFor="auth-name"
          >
            Имя
          </label>
          <input
            className="auth__input page__font page__font_weight_normal"
            type="text"
            id="auth-name"
          />
          <span className="auth__error"></span>
          <label
            className="auth__label page__font page__font_weight_normal"
            htmlFor="auth-email"
          >
            E-mail
          </label>
          <input
            className="auth__input page__font page__font_weight_normal"
            id="auth-email"
            type="text"
          />
          <span className="auth__error"></span>
          <label
            className="auth__label page__font page__font_weight_normal"
            htmlFor="auth-pswd"
          >
            Пароль
          </label>
          <input
            className="auth__input page__font page__font_weight_normal"
            id="auth-pswd"
            type="password"
          />
          <span className="auth__error">Что-то пошло не так...</span>
          <button className="auth__submit auth__submit_register page__button page__font page__font_weight_bold">
            Зарегистрироваться
          </button>
        </form>
        <p className="auth__qstn page__font page__font_weight_normal">
          Уже зарегистрированы?{" "}
          <Link
            className="auth__link page__font page__font_weight_normal"
            to="/signin"
          >
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
};

export default auth;
