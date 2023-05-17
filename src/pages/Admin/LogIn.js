import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../../img/ilogo.png";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="login">
      <div className="log_logo">
        <Link to="/">
          <img src={logo} alt="Infinity Media" />
        </Link>
      </div>
      <div className="container">
        <form
          id="login_form"
          action="http://localhost:3000/api/imedia-login"
          method="POST"
          className="form"
        >
          <div className="input_container">
            <label htmlFor="log">Username or Email Address</label>
            <input className="input" type="text" name="log" />
          </div>
          <div className="password input_container">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              autoComplete="on"
            />
            <VisibilityIcon className="password_visibility" fontSize="small" />
          </div>
          <p className="input_container check_cont">
            <input name="forever_log" type="checkbox" className="checkbox" />
            <label htmlFor="forever_log">Keep me signed in</label>
          </p>
          <button className="btn">Sign In</button>
        </form>
        <p className="existing">Don't have an account? <span><Link to="/imedia-signup">Sign Up</Link></span></p>
      </div>
    </div>
  );
};

export default LogIn;
