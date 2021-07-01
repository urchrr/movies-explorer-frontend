import "./index.css";
import MoviesCard from "../MoviesCard";
import Image from "../../images/card_pic.png";
const MoviesList = () => {
  const card = {
    title: "33 слова о дизайне",
    info: "1ч 47м",
    img: Image,
  };
  const cards = () => {
    const c = [];
    for (let i = 0; i < 12; i++) {
      c.push(card);
    }
    return c;
  };

  return (
    <section className="movie-list page__section">
      <div className="movie-list__cards">
        {cards().map((i) => (
          <MoviesCard title={i.title} length={i.info} img={i.img} />
        ))}
      </div>
      <button className="movie-list__more page__font page_font_weight_bold">
        Eщё
      </button>
    </section>
  );
};

export default MoviesList;
