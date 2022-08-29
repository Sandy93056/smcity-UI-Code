import logo from "./logo.svg";
import "./App.css";
// import { Link, Routes, Route } from "react-router-dom";
import LoginForm from "./components/authentication/LoginForm";
import RegisterForm from "./components/authentication/RegisterForm";
import AgentForm from "./components/authentication/AgentRegistration";

import Alerts from "./components/404/Alerts";
import E404rror from "./components/404/error";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigationType,
  useNavigate,
} from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import Organization from "./components/organization/Organization";
import Agent from "./components/agent/Agent";
import Supervisor from "./components/supervisor/Supervisor";
import Home from "./components/home/Home";

function App() {
  const [isAuth, setisAuth] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 20000);
  };

  const ProtectedComponent = () => {
    const authToken = localStorage.getItem("token");
    const user_type = localStorage.getItem("user_type");
    // console.log(typeof(authToken) === "undefined")
    if (typeof authToken === "undefined") {
      return <Navigate to="/login" />;
    } else {
      if (user_type === "Supervisor") {
        return <Supervisor />;
      } else if (user_type === "Organization") {
        return <Organization />;
      } else if (user_type === "Agent") {
        return <Agent />;      
      } else {
        return <Agent/>;
      }
    }
  };

  function checkAuthentication() {
    if (!isAuth) {
      setisAuth(true);
    } else {
      setisAuth(false);
    }
  }
  return (
    <>
      <Alerts Alert={alert} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <ProtectedComponent />
              </>
            }
          />

          <Route path="register">
            <Route index element={<RegisterForm showAlert={showAlert} />} />
            <Route
              exact
              path="agent"
              element={<AgentForm showAlert={showAlert} />}
            />
            <Route path="*" element={<E404rror />} />
          </Route>

          <Route path="/Login" element={<LoginForm showAlert={showAlert} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
