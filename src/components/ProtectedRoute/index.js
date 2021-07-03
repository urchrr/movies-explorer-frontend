import React, {useContext} from "react";
import {Route, Redirect} from 'react-router-dom';
import {UserAuthContext} from "../../contexts";

const ProtectedRoute = ({component: Component, ...props}) => {
  const {loggedIn} = useContext(UserAuthContext)
  return (
    <Route>
      {
        () => loggedIn ? <Component {...props}/> : <Redirect to={'/signin'}/>
      }
    </Route>
  )
}

export default ProtectedRoute