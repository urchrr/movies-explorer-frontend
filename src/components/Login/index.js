import "../auth.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="auth">
      <div className="auth__wrapper">
        <div className="auth__logo">
          <Logo />
        </div>
        <h2 className="auth__title page__font page__font_weight_bold">
          Рады видеть!
        </h2>
        <form className="auth__form">
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
          <span className="auth__error"></span>
          <button className="auth__submit auth__submit_login page__button page__font page__font_weight_bold">
            Войти
          </button>
        </form>
        <p className="auth__qstn page__font page__font_weight_normal">
          Ещё не зарегистрированы?{" "}
          <Link
            className="auth__link page__font page__font_weight_normal"
            to="/signup"
          >
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
