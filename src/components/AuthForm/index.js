import './index.css'
import Logo from "../Logo";
import {Link, Route, useLocation} from "react-router-dom";
import {useState} from "react";

const Form = ({onSubmit}) => {
  const location = useLocation().pathname === '/signup'
  const [data, setData] = useState({})

  function handleInputs(e) {
    const {name, value} = e.target
    setData({...data, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(data)
  }

  return (
    <section className="auth">
      <div className="auth__wrapper">
        <div className="auth__logo">
          <Logo/>
        </div>
        <h2 className="auth__title page__font page__font_weight_bold">
          {location ? 'Добро пожаловать!' : 'Рады видеть!'}
        </h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <Route path={'/signup'}>
            <label
              className="auth__label page__font page__font_weight_normal"
              htmlFor={'auth-name'}>
              Имя
            </label>
            <input className="auth__input page__font page__font_weight_normal"
                   autoComplete={`off`}
                   type={'text'}
                   name={'name'}
                   placeholder={'Имя'}
                   value={data.name}
                   required
                   noValidate
                   id={'auth-name'}
                   onChange={handleInputs}/>
            <span className="auth__error" id={`auth-name-error`}>{''}</span>
          </Route>
          <label
            className="auth__label page__font page__font_weight_normal"
            htmlFor={'auth-email'}>
            E-mail
          </label>
          <input className="auth__input page__font page__font_weight_normal"
                 autoComplete={`off`}
                 type={'text'}
                 name={'email'}
                 placeholder={'E-mail'}
                 value={data.email}
                 required
                 noValidate
                 id={'auth-email'}
                 onChange={handleInputs}/>
          <span className="auth__error" id={`auth-email-error`}>{''}</span>
          <label
            className="auth__label page__font page__font_weight_normal"
            htmlFor={'auth-pswd'}>
            Пароль
          </label>
          <input className="auth__input page__font page__font_weight_normal"
                 autoComplete={`off`}
                 type={'password'}
                 name={'password'}
                 placeholder={'Пароль'}
                 value={data.password}
                 required
                 noValidate
                 id={'auth-pswd'}
                 onChange={handleInputs}/>
          <span className="auth__error" id={`auth-pswd-error`}>{''}</span>

          <button className="auth__submit auth__submit_login page__button page__font page__font_weight_bold">
            {location ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </form>
        <p className="auth__qstn page__font page__font_weight_normal">
          {location ? 'Уже зарегистрированы? ' : 'Ещё не зарегистрированы? '}
          <Link
            className="auth__link page__font page__font_weight_normal"
            to={location ? '/signin' : '/signup'}
          >
            {location ? 'Войти' : 'Регистрация'}
          </Link>
        </p>

      </div>
    </section>
  )
}

export default Form;