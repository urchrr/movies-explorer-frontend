import "./index.css";

const Profile = () => {
  return (
    <section className='profile'>
      <h2 className="profile__title page__font page__font_weight_bold">
        Привет, Виталий!
      </h2>
      <div className="profile__form">
        <div className="profile__form-row">
          <p className="profile__text page__font page__font_weight_bold">Имя</p>
          <p className="profile__text page__font page__font_weight_normal">
            Виталий
          </p>
        </div>
        <div className="profile__form-row">
          <p className="profile__text page__font page__font_weight_bold">
            Почта
          </p>
          <p className="profile__text page__font page__font_weight_normal">
            pochta@yandex.ru
          </p>
        </div>
      </div>
      <button className="profile__link_edit page__button page__font page__font_weight_normal">
        Редактировать
      </button>
      <button className="profile__link_exit page__button page__font page__font_weight_normal">
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
