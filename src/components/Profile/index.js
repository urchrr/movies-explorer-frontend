import "./index.css";
import {useState, useContext} from "react";
import {CurrentUserContext} from "../../contexts";

const Profile = ({onSubmit, onLogout}) => {
  const currentUser = useContext(CurrentUserContext);
  const [info, setInfo] = useState({
    name: currentUser.name,
    email: currentUser.email
  })
  const handleInput = (evt) => {
    const {name, value} = evt.target;
    setInfo({...info, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(info)
  }

  return (
    <section className='profile'>
      <h2 className="profile__title page__font page__font_weight_bold">
        {`Привет, ${currentUser.name}!`}
      </h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__form-row">
          <label htmlFor={`profile-name`} className="profile__text page__font page__font_weight_bold">
            Имя</label>
          <input onChange={handleInput} name='name' id='profile-name'
                 className="profile__input page__font page__font_weight_normal"
                 value={info.name}/>
        </div>
        <div className="profile__form-row">
          <label htmlFor={`profile-email`} className="profile__text page__font page__font_weight_bold">
            Почта
          </label>
          <input onChange={handleInput} name='email' id='profile-email'
                 className="profile__input page__font page__font_weight_normal"
                 value={info.email}/>
        </div>
      </form>
      <button onClick={handleSubmit} className="profile__link_edit page__button page__font page__font_weight_normal">
        Редактировать
      </button>
      <button onClick={onLogout}
              className="profile__link_exit page__button page__font page__font_weight_normal">
        Выйти из аккаунта
      </button>
    </section>
  )
    ;
};

export default Profile;
