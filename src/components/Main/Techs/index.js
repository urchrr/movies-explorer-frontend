import "./index.css";

const Techs = () => {
  return (
    <div style={{ backgroundColor: "#272727", width: '100%', display: 'flex', justifyContent: 'center' }}>
      <section id="techs" className="techs page__section">
        <h2 className="page__section_heading page__font page__font_weight_normal">
          Технологии
        </h2>
        <div className="techs__info_wrapper">
          <p className="techs__title page__font page__font_weight_normal">
            7 технологий
          </p>
          <p className="techs__info page__font page__font_weight_normal">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <div className="techs__list-wrapper">
          <ul className="techs__list page__ul">
            <li className="techs__list-item">
              <a className="techs__list-text page__font page__font_weight_normal">
                HTML
              </a>
            </li>
            <li className="techs__list-item">
              <a className="techs__list-text page__font page__font_weight_normal">
                CSS
              </a>
            </li>
            <li className="techs__list-item">
              <a className="techs__list-text page__font page__font_weight_normal">
                JS
              </a>
            </li>
            <li className="techs__list-item">
              <a className="techs__list-text page__font page__font_weight_normal">
                React
              </a>
            </li>
            <li className="techs__list-item">
              <a className="techs__list-text page__font page__font_weight_normal">
                Git
              </a>
            </li>
            <li className="techs__list-item">
              <a className="techs__list-text page__font page__font_weight_normal">
                Express.js
              </a>
            </li>
            <li className="techs__list-item">
              <a className="techs__list-text page__font page__font_weight_normal">
                mongoDB
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Techs;
