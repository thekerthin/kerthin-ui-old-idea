import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  return (
    <Switch>
      <Route path="/sing-in" exact component={SignIn} />
      <Route path="/sing-up" component={SignUp} />
      <Redirect to="/sing-in" />
    </Switch>
  );
};

export default Auth;
