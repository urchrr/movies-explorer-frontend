import "./index.css";

const AboutProject = () => {
  return (
    <section id='about' className="about-project page__section">
      <h2 className="page__section_heading page__font page__font_weight_normal">
        О проекте
      </h2>
      <div className="about-project__wrapper">
        <article>
          <h3 className="about-project__article_heading page__font page__font_weight_normal">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__article_text page__font page__font_weight_normal">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article>
          <h3 className="about-project__article_heading page__font page__font_weight_normal">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__article_text page__font page__font_weight_normal">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-cell">
          <p className="about-project__cell-text about-project__text_color_black page__font page__font_weight_normal">
            1 неделя
          </p>
        </div>
        <div className="about-project__timeline-cell">
          <p className="about-project__text_color_white about-project__cell-text page__font page__font_weight_normal">
            4 недели
          </p>
        </div>
        <div className="about-project__timeline-cell">
          <p className="about-project__cell-text page__font page__font_weight_normal">
            Back-end
          </p>
        </div>
        <div className="about-project__timeline-cell">
          <p className="about-project__cell-text page__font page__font_weight_normal">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
