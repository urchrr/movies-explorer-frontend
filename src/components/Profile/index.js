import "./index.css";
import {useState} from "react";

const Profile = () => {
  const [info, setInfo] = useState({
    name: 'Илья',
    email: 'pochta@yandex.ru'
  })
  const handleInput = (evt) => {
    const {name, value} = evt.target;
    setInfo({...info, [name]: value})
  }
  return (
    <section className='profile'>
      <h2 className="profile__title page__font page__font_weight_bold">
        {`Привет, ${info.name}!`}
      </h2>
      <div className="profile__form">
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
      </div>
      <button className="profile__link_edit page__button page__font page__font_weight_normal">
        Редактировать
      </button>
      <button className="profile__link_exit page__button page__font page__font_weight_normal">
        Выйти из аккаунта
      </button>
    </section>
  )
    ;
};

export default Profile;
