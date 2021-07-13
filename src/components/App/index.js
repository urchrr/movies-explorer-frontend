import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { Switch, Route, useHistory } from "react-router-dom";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import NotFound from "../NotFound";
import Profile from "../Profile";
import Login from "../Login";
import Register from "../Register";
import * as auth from "../../utils/auth";
import { useEffect, useState } from "react";
import { CurrentUserContext, UserAuthContext } from "../../contexts";
import ProtectedRoute from "../ProtectedRoute";
import * as api from "../../utils/MainApi";
import { useGlobalBeats, useGlobalFilms } from "../../contexts/globalhook";
import * as moviesApi from "../../utils/MoviesApi";
import InfoToolTip from "../InfoToolTip";
import { getLS, setLS, chkLS } from "../../utils";
import {
  usersFilmsKey,
  beatFilmsKey,
  beatFilmsResultSearchKey,
  usersFilmsResultSearchKey,
  btSearchTermKey,
  usrSearchTermKey,
} from "../../utils/constants";

const App = () => {
  const [beatFilms, beatFilmsAction] = useGlobalBeats();
  const [currentUserFilms, currentUserFilmsActions] = useGlobalFilms();
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [infoTipStatus, setInfoTipStatus] = useState("");
  const [isInfoToolTipOpen, setInfoToolTiOpen] = useState(false);
  const loginCheck = () => {
    if (chkLS("token")) {
      auth
        .getAuthData()
        .then((res) => {
          setCurrentUser(res.data);
          setLoggedIn(true);
        })
        .catch((err) => console.log(err));
    } else {
      auth
        .getAuthData()
        .then((res) => {
          setCurrentUser(res.data);
          setLoggedIn(true);
          history.push("/movies");
        })
        .catch((err) => console.log(err));
    }
  };

  function getFilms() {
    const a = (films, beatFilms) => {
      let usersFilmsObj = {};
      films.forEach((i) => (usersFilmsObj[i.movieId] = i));
      console.log("aaa", usersFilmsObj);
      let beatFilmsObj = {};
      beatFilms.forEach((i) => {
        //если фильм есть в списке от нашего
        if (usersFilmsObj[i.id]) {
          i.owner = usersFilmsObj[i.id].owner;
          i._id = usersFilmsObj[i.id]._id;
        } else {
          delete i.owner;
          delete i._id;
        }
        beatFilmsObj[i.id] = i;
      });
      return [usersFilmsObj, beatFilmsObj];
    };

    const c = (film, beatFilms) => {
      const usersFilmsObjs = film.reduce((newObj, curr) => {
        newObj[curr.movieId] = curr;
        return newObj;
      });
      const bObj = beatFilms.reduce((newObj, curr) => {
        //если фильм есть в списке от нашего
        if (usersFilmsObjs[curr.id]) {
          curr.owner = usersFilmsObjs[curr.id].owner;
          curr._id = usersFilmsObjs[curr.id]._id;
        }
        console.log();
        newObj[curr.id] = curr;
        return newObj;
      });
      return [usersFilmsObjs, bObj];
    };
    if (!chkLS(beatFilmsKey)) {
      moviesApi
        .getFilms()
        .then((beatFilms) => {
          api
            .getFilms()
            .then((films) => {
              const [uf, bf] = a(films, beatFilms);
              currentUserFilmsActions.addFilms(uf);
              currentUserFilmsActions.setSearchedFilms(uf);
              beatFilmsAction.addFilms(bf);
              setLS(beatFilmsKey, bf);
              setLS(usersFilmsKey, uf);
            })
            .catch((err) => console.log("api-getFilms", err));
        })
        .catch((err) => console.log("moviesApi-getFilms", err));
    } else {
      api
        .getFilms()
        .then((films) => {
          const [uf, bf] = a(films, Object.values(getLS(beatFilmsKey)));
          currentUserFilmsActions.addFilms(uf);
          setLS(usersFilmsKey, uf);
          setLS(beatFilmsKey, bf);
          // currentUserFilmsActions.setSearchedFilms(films);
          beatFilmsAction.addFilms(bf);
        })
        .catch((err) => console.log("api-getFilms", err));
    }
  }

  useEffect(() => {
    loginCheck();
    if (loggedIn) {
      getFilms();
    }
  }, [loggedIn]);

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((res) => {
        const { name, email } = res;
        setCurrentUser({ ...currentUser, name, email });
        setInfoTipStatus("success");
        setInfoToolTiOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setInfoToolTiOpen(true);
      });
  }

  function handleSignIn(data) {
    auth
      .authorize(data)
      .then((data) => {
        console.log("authorize data", data);
        auth
          .getAuthData()
          .then((res) => {
            console.log("login data", res);
            // setUserAuth(res.data);
            setCurrentUser(res.data);
            setLoggedIn(true);
            history.push("/movies");
            setInfoTipStatus("success");
            setInfoToolTiOpen(true);
          })
          .catch((err) => {
            console.log(err);
            setInfoToolTiOpen(true);
          });
      })
      .catch((err) => {
        console.log(err);
        setInfoToolTiOpen(true);
      });
  }

  function handleSignUp(data) {
    auth
      .signup(data)
      .then(() => {
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
        setInfoToolTiOpen(true);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    history.push("/");
    [
      "token",
      beatFilmsKey,
      beatFilmsResultSearchKey,
      usersFilmsKey,
      usersFilmsResultSearchKey,
      btSearchTermKey,
      usrSearchTermKey,
    ].forEach((i) => localStorage.removeItem(i));
  }
  function close() {
    setInfoToolTiOpen(false);
  }
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <UserAuthContext.Provider value={{ loggedIn }}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute path={"/movies"} component={Movies} />
            <ProtectedRoute path={"/saved-movies"} component={SavedMovies} />
            <ProtectedRoute
              path={"/profile"}
              component={Profile}
              onSubmit={handleUpdateUser}
              onLogout={handleLogout}
            />
            <Route path="/signin">
              <Login onSubmit={handleSignIn} />
            </Route>
            <Route path="/signup">
              <Register onSubmit={handleSignUp} />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <InfoToolTip
            status={infoTipStatus}
            isOpen={isInfoToolTipOpen}
            onClose={close}
            name={"InfoToolTip"}
          />
          <Footer />
        </UserAuthContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;
