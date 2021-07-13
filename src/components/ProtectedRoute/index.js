import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserAuthContext } from "../../contexts";
import { chkLS } from "../../utils";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { loggedIn } = useContext(UserAuthContext);
  return (
    <Route>
      {() =>
        chkLS("token") ? <Component {...props} /> : <Redirect to={"/signin"} />
      }
    </Route>
  );
};

export default ProtectedRoute;
