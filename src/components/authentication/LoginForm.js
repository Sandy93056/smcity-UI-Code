import React from "react";
import { useState } from "react";
// import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const navigate = useNavigate();

  const [cred, setcred] = useState({
    username: "",
    password: "",
  });

  // let schema = yup.object().shape({
  //   username: yup.string().required(),
  //   password:yup.string().required()
  // });
  
  async function validateUserDetails(e) {
    e.preventDefault();
    // schema.isValid(cred).then(function (valid) {
    // console.log(valid)
    // });
    console.log(e);
    const data = {
      username: cred.username,
      password: cred.password,
    };
    console.log(cred);
    const response = await fetch("http://127.0.0.1:8000/customer/gettoken/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const authToken = await response.json();
    console.log(authToken.token);
    if (response.ok) {
      const r = await fetch("http://127.0.0.1:8000/customer/userprofile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Accept: "application/json",
          Authorization: `Token ${authToken.token}`,
        },
      });
      // console.log(await r.json());
      let userProfile = await r.json();
      try {
        localStorage.setItem("token", `${authToken.token}`);
        localStorage.setItem("u_type", userProfile.user_type);
      } catch (error) {
        console.log(error);
        props.showAlert(error, "danger");
        navigate("/");
      }
      if (userProfile.user_type === "Agent") {
        navigate("/");
        props.showAlert(
          "you have successfully logged in  as a agent ",
          "success"
        );
      } else if (userProfile.user_type === "Supervisor") {
        navigate("/");
        props.showAlert(
          "you have successfully logged in  as a supervisor ",
          "success"
        );
      } else {
        navigate("/");
        props.showAlert(
          "you have successfully logged in  as a Organization ",
          "success"
        );
      }
    } else {
      console.log("You have an error in request.");
      props.showAlert("Invalid Credentials. Entered", "danger");
    }
  }

  const setUsername = (event) => {
    setcred({ username: event.target.value, password: cred.password });
    console.log(cred);
  };
  const setPass = (event) => {
    setcred({ username: cred.username, password: event.target.value });
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="auth-bg">
          <span className="r" />
          <span className="r s" />
          <span className="r s" />
          <span className="r" />
        </div>
        <div className="card">
          <div className="card-body text-center">
            <div className="mb-4">
              <i className="feather icon-unlock auth-icon" />
            </div>
            <h3 className="mb-4">Login</h3>
            <span className="mb-0 text-muted">Add your credentials</span>
            <br />
            <br />
            <form role="form" onSubmit={validateUserDetails} method="post">
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                defaultValue="XEwt45xW0mUSwPQmBIN0oyfrr06rJ4ReHam3lAGYNcnNKkZHkdrtgQdNQUBcc4c2"
              />
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="username"
                  value={cred.username}
                  placeholder="Username"
                  className="form-control"
                  onChange={setUsername}
                  required=""
                  id="id_username"
                />
              </div>
              <div className="input-group mb-4">
                <input
                  type="password"
                  name="password"
                  onChange={setPass}
                  value={cred.password}
                  placeholder="Password"
                  className="form-control"
                  required=""
                  id="id_password"
                />
              </div>
              <div className="form-group text-left">
                <div className="checkbox checkbox-fill d-inline">
                  <input
                    type="checkbox"
                    name="checkbox-fill-1"
                    id="checkbox-fill-a1"
                    defaultChecked=""
                  />
                  <label htmlFor="checkbox-fill-a1" className="cr">
                    {" "}
                    Save Details
                  </label>
                </div>
              </div>
              <button
                type="submit"
                name="login"
                className="btn btn-primary shadow-2 mb-4"
              >
                Login
              </button>
            </form>
            <p className="mb-0 text-muted">
              Don’t have an account? <Link to="/register/">Sign UP</Link>
            </p>
            <br />
            <p className="mb-2 text-muted">
              ©{" "}
              <Link target="_blank" to="https:tube-mate.herokuapp.com">
                Aftab Coder
              </Link>
              -{" "}
              <Link target="_blank" to="https:tube-mate.herokuapp.com">
                tube mate
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
