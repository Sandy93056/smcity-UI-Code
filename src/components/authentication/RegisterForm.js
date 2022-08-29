// import { data, event } from "jquery";
import React, { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
// import { useState } from "react";

export default function Register(props) {
  const redirect = useNavigate();
  const [userDetails, setuserDetails] = useState({
    username: "",
    email: "",
    mobile_no: "",
    password1: "",
    password2: "",
    country: "",
    state: "",
    city: "",
    address: "",
    u_type: "",
  });

  function setDetails(e) {
    setuserDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
  }
  async function RegisterUser(event) {
    event.preventDefault();

    let data = {
      username: userDetails.username,
      password: userDetails.password1,
    };
    const response = await fetch("http://127.0.0.1:8000/customer/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    const token = result.token;
    if (response.status === 200) {
      localStorage.setItem("token", token);
      const data = {
        user_name: userDetails.username,
        // user_type: userDetails.u_type,
        is_agent: false,
        user_phone: userDetails.mobile_no,
        user_email: userDetails.email,
        user_state: userDetails.state,
        user_city: userDetails.city,
        user_address: userDetails.address,
        user_zipcode: userDetails.zipcode,
        is_verified: true,
      };
      const response = await fetch(
        "http://127.0.0.1:8000/customer/userprofile/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("u_type", result.user_type);
        console.log(result);
        console.log(userDetails.u_type);
        if (userDetails.u_type === "Agent") {
          props.showAlert("Fill Agent form Details.", "success");
          redirect("agent");
        } else if (userDetails.u_type === "Supervisor") {
          props.showAlert("Fill Agent form Details.", "success");
          redirect("supervisor");
        } else if (userDetails.u_type === "Organization") {
          props.showAlert("Fill Agent form Details.", "success");
          redirect("organization");
        }
      }
    } else {
      props.showAlert("Yur Role does'nt match any", "danger");
    }
  }

  return (
    <>
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
                <i className="feather icon-user-plus auth-icon" />
              </div>
              <h3 className="mb-4">Sign up</h3>
              <span className="mb-0 text-muted">
                <p>Add your credentials</p>
              </span>
              <br />
              <br />
              <form role="form" method="post" onSubmit={RegisterUser}>
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  defaultValue="O0LgDJW11IItZsYcGtwAnw5wDifvlrxXywBQUe53OybodX7xpYa3fO3S2cKgOrSL"
                />
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="username"
                    value={userDetails.username}
                    placeholder="Username"
                    className="form-control"
                    autoFocus=""
                    required=""
                    onChange={setDetails}
                    id="id_username"
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userDetails.email}
                    className="form-control"
                    required=""
                    id="id_email"
                    onChange={setDetails}
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-3">
                  <input
                    type="number"
                    name="mobile_no"
                    value={userDetails.mobile_no}
                    placeholder="Phone number"
                    className="form-control"
                    onChange={setDetails}
                    id="id_mobile_no"
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-4">
                  <input
                    type="password"
                    name="password1"
                    placeholder="Password"
                    value={userDetails.password1}
                    className="form-control"
                    onChange={setDetails}
                    required=""
                    id="id_password1"
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-4">
                  <input
                    type="password"
                    name="password2"
                    placeholder="Password check"
                    value={userDetails.password2}
                    className="form-control"
                    onChange={setDetails}
                    required=""
                    id="id_password2"
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-4">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    onChange={setDetails}
                    value={userDetails.country}
                    className="form-control"
                    required=""
                    id="id_Country"
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-4">
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={setDetails}
                    value={userDetails.state}
                    className="form-control"
                    required=""
                    id="id_State"
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="form-control"
                    onChange={setDetails}
                    value={userDetails.city}
                    required=""
                    id="id_City"
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={userDetails.address}
                    onChange={setDetails}
                    className="form-control"
                    required=""
                    id="id_Address"
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-4">
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="zip code"
                    className="form-control"
                    onChange={setDetails}
                    value={userDetails.zipcode}
                    required=""
                    id="zip"
                  />
                </div>
                <span className="text-error" />
                <div className="input-group mb-5">
                  <select
                    name="u_type"
                    className="form-control"
                    id="id_u_type"
                    value={userDetails.u_type}
                    onChange={setDetails}
                  >
                    <option value="Choose Your Type">User Type.....</option>
                    <option value="Agent">Agent</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Organization">Organization</option>
                  </select>
                </div>
                <span className="text-error" />
                <div className="form-group text-left">
                  <div className="checkbox checkbox-fill d-inline">
                    <input
                      type="checkbox"
                      name="checkbox-fill-1"
                      id="checkbox-fill-a1"
                    />
                    <label htmlFor="checkbox-fill-a1" className="cr">
                      {" "}
                      Agree with <Link to="#">terms</Link>
                    </label>
                  </div>
                </div>
                <button type="submit" id="submitbtn" className="btn btn-primary shadow-2 mb-4">
                  Next
                </button>
              </form>
              <p className="mb-0 text-muted">
                Already have an account? <Link to="/login/">Login</Link>
              </p>
              <br />
              <p className="mb-2 text-muted">© </p>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
