import "./index.css";
import NavTab from '../NavTab'

const Promo = () => {
  return (
    <section className="promo">
      <div className='promo__wrapper'>
        <h1 className="promo__heading page__font page__font_weight_normal">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <NavTab/>
      </div>
    </section>
  );
};

export default Promo;
