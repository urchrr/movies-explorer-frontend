import "./index.css";

const NavTab = () => {
  return (
    <section className="nav-tab">
      <div className="nav-tab__wrapper">
        <ul className="nav-tab__ul page__ul">
          <li className="nav-tab__li">
            <a
              href="#about"
              className="nav-tab__link page__font page__font_weight_bold"
            >
              О проекте
            </a>
          </li>
          <li className="nav-tab__li">
            <a
              href="#techs"
              className="nav-tab__link page__font page__font_weight_bold"
            >
              Технологии
            </a>
          </li>
          <li className="nav-tab__li">
            <a
              href="#student"
              className="nav-tab__link page__font page__font_weight_bold"
            >
              Студент
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavTab;
