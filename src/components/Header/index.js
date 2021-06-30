import "./Header.css";
import Logo from "../Logo";
import Navigation from "../Navigation";
import { Route } from "react-router-dom";

function Header() {
  return (
    <>
        <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
          <div className="header page__header-footer">
            <Logo />
            <Navigation />
          </div>
        </Route>
    </>
  );
}

export default Header;
