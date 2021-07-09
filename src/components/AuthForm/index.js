import "./index.css";
import Logo from "../Logo";
import { Link, Route, useLocation } from "react-router-dom";
import { useFormWithValidation } from "../../utils/hooks";

const Form = ({ onSubmit }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});
  const location = useLocation().pathname === "/signup";

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <section className="auth">
      <div className="auth__wrapper">
        <div className="auth__logo">
          <Logo />
        </div>
        <h2 className="auth__title page__font page__font_weight_bold">
          {location ? "Добро пожаловать!" : "Рады видеть!"}
        </h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <Route path={"/signup"}>
            <label
              className="auth__label page__font page__font_weight_normal"
              htmlFor={"auth-name"}
            >
              Имя
            </label>
            <input
              className="auth__input page__font page__font_weight_normal"
              autoComplete={`off`}
              type={"text"}
              name={"name"}
              placeholder={"Имя"}
              value={values.name}
              minLength={4}
              required
              noValidate
              id={"auth-name"}
              onChange={handleChange}
            />
            <span className="auth__error" id={`auth-name-error`}>
              {errors.name}
            </span>
          </Route>
          <label
            className="auth__label page__font page__font_weight_normal"
            htmlFor={"auth-email"}
          >
            E-mail
          </label>
          <input
            className="auth__input page__font page__font_weight_normal"
            autoComplete={`off`}
            type={"text"}
            name={"email"}
            placeholder={"E-mail"}
            value={values.email}
            required
            noValidate
            minLength={4}
            id={"auth-email"}
            onChange={handleChange}
          />
          <span className="auth__error" id={`auth-email-error`}>
            {errors.email}
          </span>
          <label
            className="auth__label page__font page__font_weight_normal"
            htmlFor={"auth-pswd"}
          >
            Пароль
          </label>
          <input
            className="auth__input page__font page__font_weight_normal"
            autoComplete={`off`}
            type={"password"}
            name={"password"}
            placeholder={"Пароль"}
            value={values.password}
            required
            noValidate
            minLength={4}
            id={"auth-pswd"}
            onChange={handleChange}
          />
          <span className="auth__error" id={`auth-pswd-error`}>
            {errors.password}
          </span>

          <button
            disabled={!isValid}
            type="submit"
            className="auth__submit auth__submit_login page__button page__font page__font_weight_bold"
          >
            {location ? "Зарегистрироваться" : "Войти"}
          </button>
        </form>
        <p className="auth__qstn page__font page__font_weight_normal">
          {location ? "Уже зарегистрированы? " : "Ещё не зарегистрированы? "}
          <Link
            className="auth__link page__font page__font_weight_normal"
            to={location ? "/signin" : "/signup"}
          >
            {location ? "Войти" : "Регистрация"}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Form;
