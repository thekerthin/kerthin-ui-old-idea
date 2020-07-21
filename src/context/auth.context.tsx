import React, { useState, useCallback } from "react";

import * as localStorage from "../utils/localstorage";

export const AuthContext = React.createContext({
  isAuth: false,
  signIn: () => {},
  signOut: () => {},
});

// TODO: add typing and research why is this rendering twice
export const AuthContextProvider = (props: any) => {
  const [isAuthenticated, setAuthenticated] = useState(
    !!localStorage.get("IS_AUTH")
  );

  const signIn = useCallback(() => {
    setAuthenticated(true);
    localStorage.set("IS_AUTH", true);
  }, []);
  const signOut = useCallback(() => {
    setAuthenticated(false);
    localStorage.remove("IS_AUTH");
  }, []);

  const context = {
    signIn,
    signOut,
    isAuth: isAuthenticated,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
