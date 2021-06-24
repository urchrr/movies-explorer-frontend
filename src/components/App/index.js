import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import NotFound from "../NotFound";
import Profile from "../Profile";
import Login from "../Login";
import Register from "../Register";
import useWindowDimensions from "../../utils/useWindowDimensions";

const App = () => {
  return (
    // <div className="App">
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
