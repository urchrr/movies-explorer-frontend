import './Main.css'
import Promo from './Promo'
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';

const Main = () => {
  return (
    <>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default Main