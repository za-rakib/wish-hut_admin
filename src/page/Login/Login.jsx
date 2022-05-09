import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Login.module.css";
import { login } from "../../redux/apiCalls";

const Login = ({ setLoginCh, loginCh }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
 //   console.log(userName, password);
    login(dispatch, { userName, password });
    setLoginCh(!loginCh);
  };
  return (
    <div className={classes.login}>
      <div className={classes.loginForm}>
        <input
          type="text"
          placeholder="user name"
          onChange={(e) => setUserName(e.target.value)}
          className={classes.loginInput}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className={classes.loginInput}
        />
        <button className={classes.loginButton} onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
