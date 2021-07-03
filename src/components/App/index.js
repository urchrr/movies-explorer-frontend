import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import {Switch, Route, useHistory} from "react-router-dom";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import NotFound from "../NotFound";
import Profile from "../Profile";
import Login from "../Login";
import Register from "../Register";
import * as auth from '../../utils/auth';
import {useEffect, useState} from "react";
import {CurrentUserContext, UserAuthContext} from "../../contexts";
import ProtectedRoute from "../ProtectedRoute";

const App = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const getAuthData = () => {
    auth.getAuthData()
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getAuthData();
    if (loggedIn) {
      //  получить фильмы
      console.log('Грузим фильмы')
    }
  }, [])

  function handleSignIn(data) {
    auth
      .authorize(data)
      .then((data) => {
        console.log('authorize data', data);
        auth
          .getAuthData()
          .then((res) => {
            console.log('login', res);
            // setUserAuth(res.data);
            setCurrentUser(res.data);
            setLoggedIn(true);
            history.push('/');
            // setInfoTipStatus('success');
            // setInfoToolTiOpen(true);
          })
          .catch((err) => {
            // setInfoToolTiOpen(true);
          });
      })
      .catch((err) => {
        // setInfoToolTiOpen(true);
      });
  }

  function handleSignUp(data) {
    auth
      .signup(data)
      .then(() => {
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
        // setInfoToolTiOpen(true);
      });
  }

  return (
    // <div className="App">
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <UserAuthContext.Provider value={{loggedIn}}>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <ProtectedRoute
              path="/movies"
              component={Movies}
              loggedIn={loggedIn}/>
            <ProtectedRoute
              path={'/saved-movies'}
              component={SavedMovies}
              loggedIn={loggedIn}/>
            <ProtectedRoute
              path={'/profile'}
              component={Profile}
              loggedIn={loggedIn}/>
            <Route path="/signin">
              <Login onSubmit={handleSignIn}/>
            </Route>
            <Route path="/signup">
              <Register onSubmit={handleSignUp}/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </UserAuthContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;
