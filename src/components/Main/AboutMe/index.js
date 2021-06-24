import "./index.css";
import Avatar from "../../../images/profile_avatar.png";

const AboutMe = () => {
  return (
    <section id='student' className="about-me page__section">
      <h2 className="page__section_heading page__font page__font_weight_normal">
        Студент
      </h2>
      <div className="about-me__wrapper">
        <div className="about-me__info">
          <p className="about-me__name page__font page__font_weight_normal">Виталий</p>
          <p className="about-me__whois page__font page__font_weight_bold">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__biography page__font page__font_weight_normal">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб&#8209;разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="page__ul about-me__list">
            <li className="about-me__list-item">
              <a className="page__font page__font_weight_bold">Facebook</a>
            </li>
            <li className="about-me__list-item">
              <a className="page__font page__font_weight_bold">Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__photo' src={Avatar} alt="Портрет" />
      </div>


    </section>
  );
};

export default AboutMe;
