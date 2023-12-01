import React, { useContext, useRef, useState } from "react";
import logo from "../../img/ilogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";
import Spinner from "../../components/Spinner";
import { Visibility, VisibilityOffOutlined } from "@mui/icons-material";

const LogIn = () => {
  const logRef = useRef();
  const passwordRef = useRef();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { user, dispatch, isLoading, error, errorMessage } =
    useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/imedia-auth/login",
        {
          log: logRef.current.value,
          password: passwordRef.current.value,
        }
      );

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          userDetails: response.data,
          token: response.headers["x-auth-token"],
        },
      });

      // <Navigate to="/imedia-admin/dashboard" />;
      if (response.data.isAdmin) {
        navigate("/imedia-admin/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      if (error.message && error.response) {
        return dispatch({
          type: "LOGIN_FAILURE",
          payload: error.response.data,
        });
      }
      if (error.response) {
        return dispatch({
          type: "LOGIN_FAILURE",
          payload: error.response.data,
        });
      }
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.message,
      });
    }
  };

  // console.log(user);

  const handlePassword = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

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
          // action="http://localhost:5000/api/imedia-auth/login"
          // method="POST"
          className="form"
          onSubmit={handleLogin}
        >
          <div className="input_container">
            <label htmlFor="log">Username or Email</label>
            <input className="input" type="text" name="log" ref={logRef} />
          </div>
          <div className="password input_container">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type={open ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="on"
              ref={passwordRef}
            />
            <div onClick={handlePassword}>
              {open ? (
                <VisibilityOffOutlined
                  className="password_visibility"
                  fontSize="small"
                />
              ) : (
                <Visibility className="password_visibility" fontSize="small" />
              )}
            </div>
          </div>
          <p className="input_container check_cont">
            <input name="forever_log" type="checkbox" className="checkbox" />
            <label htmlFor="forever_log">Keep me signed in</label>
          </p>
          <button className="btn" type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Sign In"}
          </button>
          {error && <small style={{ marginTop: "10px" }}>{errorMessage}</small>}
        </form>
        <p className="existing">
          Don't have an account?
          <span>
            <Link to="/imedia-admin/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
