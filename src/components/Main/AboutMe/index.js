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
          <p className="about-me__name page__font page__font_weight_normal">Илья</p>
          <p className="about-me__whois page__font page__font_weight_bold">
            Фронтенд-разработчик, 28 лет
          </p>
          <p className="about-me__biography page__font page__font_weight_normal">
            Я родился в Днепре, живу в подмосковном Королёве. Практика кодинга была еще со школы, когда писали на
            бейсике, затем С++ в универе и Python для рабочих проектов. Воспользовавших необходимостью написания
            веб-приложения влился в веб-кодинг, чему очень рад!
          </p>
          <ul className="page__ul about-me__list">
            <li className="about-me__list-item">
              <a className="about-me__link page__font page__font_weight_bold">
                Facebook</a>
            </li>
            <li className="about-me__list-item">
              <a className="about-me__link page__font page__font_weight_bold">
                Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__photo' src={Avatar} alt="Портрет"/>
      </div>


    </section>
  );
};

export default AboutMe;
