import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const submitClick = (e) => {
    e.preventDefault();
    e.target[0].value = "";
    e.target[1].value = "";
    console.log(e.target[0].value);
    navigate("/home")
  };
  return (
    <form className="loginContainer" onSubmit={submitClick}>
      <input type="text" placeholder="USERNAME" required autoFocus />
      <input type="password" placeholder="PASSWORD" required />
        <button className="btn" type="submit">
          LOGIN
        </button>
        
    </form>
  );
}

export default Login;
