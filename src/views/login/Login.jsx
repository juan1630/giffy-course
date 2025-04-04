import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useUserGifs } from "../../hooks/useUserGifs";
import "./index.css";

export const Login = () => {
  const [handleUserName, setHandleUserName] = useState("josejuanpatron1630@gmail.com");
  const [handlePassword, setHandlePassword] = useState("123456");
  const [, navigate] = useLocation();
  const { login, isLogged, isLoading, hasError } = useUserGifs();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: handleUserName, password: handlePassword });
  };

  const handlePass = (e) => {
    setHandlePassword(e.target.value);
  };
  const handleUser = (e) => {
    setHandleUserName(e.target.value);
  };

  return (
    <>
      {hasError ? <h2> Error... </h2> : null}
      {isLoading ? (
        <strong> Loading.... </strong>
      ) : (
        <form onSubmit={handleSubmit} className="form-login">
          <h1> Login </h1>
          <input
            type="text"
            placeholder="username"
            value={handleUserName}
            onChange={handleUser}
          />
          <input
            type="password"
            placeholder="password"
            value={handlePassword}
            onChange={handlePass}
          />
          <button>Login</button>
        </form>
      )}
    </>
  );
};
