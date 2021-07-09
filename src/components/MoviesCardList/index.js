import "./index.css";
import MoviesCard from "../MoviesCard";
import { useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";

const MoviesList = ({ movies, isOpen }) => {
  const { width, height } = useWindowDimensions();
  const [trailerSrc, setTrailerSrc] = useState("");
  const [trailerOpen, setTrailerOpen] = useState(false);
  function handleIframe(src) {
    console.log(src);
    const newSrc = src.replace("https://www.youtube.com/watch?v=", "");
    setTrailerSrc(newSrc);
    setTrailerOpen(true);
  }
  function handleClose() {
    setTrailerOpen(false);
  }
  return (
    <section
      className={`movie-list page__section ${
        isOpen ? "movie-list__opened" : ""
      }`}
    >
      <div className="movie-list__cards">
        {movies.map((i) => (
          <MoviesCard key={i.id} card={i} onImgClick={handleIframe} />
        ))}
      </div>

      <div
        className={`movie-list__popup ${
          trailerOpen ? "movie-list__popup_opened" : ""
        }`}
        onClick={handleClose}
      >
        {trailerOpen && (
          <iframe
            id="ytplayer"
            type="text/html"
            width={width * 0.8}
            height={height * 0.6}
            src={`https://www.youtube.com/embed/${trailerSrc}`}
            frameBorder="0"
          />
        )}
      </div>
    </section>
  );
};

export default MoviesList;
