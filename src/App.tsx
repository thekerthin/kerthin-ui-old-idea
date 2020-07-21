import React, { useContext } from "react";

import { AuthContext } from "./context/auth.context";
import Auth from "./containers/Auth";
import Root from "./containers/Root";

const App = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Root /> : <Auth />;
};

export default App;
