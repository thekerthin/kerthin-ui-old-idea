import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth.context";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  return (
    <div>
      <button onClick={signIn}>sing in</button>
      <p>
        <NavLink to="/sing-up">sign up</NavLink>
      </p>
    </div>
  );
};

export default SignIn;
