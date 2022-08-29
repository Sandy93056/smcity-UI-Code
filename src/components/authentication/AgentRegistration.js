import React, { useState } from "react";
import { Link, useNavigate,Outlet } from "react-router-dom";


export default function AgentRegistration(props) {
  const navigate = useNavigate();

  const [AgentDetails, setAgentDetails] = useState({
    bank_acc_no:"",
    bank_name:"",
    bank_ifsc:"",
    bank_acc_type:"",
    service_provider:""
  })
  function setDetails(e) {
    setAgentDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitAgentDetails(e){
    e.preventDefault();
    const data = {
      service_provider: AgentDetails.service_provider,
      bank_acc_no: AgentDetails.bank_acc_no,
      bank_name: AgentDetails.bank_name,
      bank_acc_name: AgentDetails.bank_acc_type,
      bank_ifsc: AgentDetails.bank_ifsc
  }
  
    const response = await fetch("http://127.0.0.1:8000/agent/register/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      navigate("/")
    }
    else{
      props.showAlert(result.msg,"danger")
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
              <h3 className="mb-3">Agent Registration</h3>
              <span className="mb-0 text-muted">Add your credentials</span>
              <br />
              <br />
              <form role="form" onSubmit={submitAgentDetails}>
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  defaultValue="tW77a1mkMHAZVb3PRmnsCvee2409jOUwDJ25wOe5D5AOg5GxWRGwu4gEAYmuwTNZ"
                />
                <label htmlFor="id_bank_acc_no">Bank acc no:</label>
                <input
                  type="number"
                  name="bank_acc_no"
                  placeholder="Bank account number"
                  value={AgentDetails.bank_acc_no}
                  onChange={setDetails}
                  className="form-control"
                  id="id_bank_acc_no"
                />
                <label htmlFor="id_bank_name">Bank name:</label>
                <input
                  type="text"
                  name="bank_name"
                  placeholder="Bank Name"
                  onChange={setDetails}
                  value={AgentDetails.bank_name}

                  className="form-control"
                  id="id_bank_name"
                />
                <label htmlFor="id_bank_ifsc">Bank ifsc:</label>
                <input
                  type="text"
                  name="bank_ifsc"
                  placeholder="Ifsc Code"
                  onChange={setDetails}
                  value={AgentDetails.bank_ifsc}
                  className="form-control"
                  required=""
                  id="id_bank_ifsc"
                />
                <label htmlFor="id_bank_acc_type">Bank acc type:</label>
                <select
                  name="bank_acc_type"
                  className="form-control"
                  value={AgentDetails.bank_acc_type}
                  onChange={setDetails}
                  id="id_bank_acc_type"
                >
                  <option value="---">Type of Bank Account</option>
                  <option value="Saving Account">Saving Account</option>
                  <option value="Current Account">Current Account</option>
                </select>
                <label htmlFor="id_service_provider">Service provider:</label>
                <select
                  name="service_provider"
                  className="form-control"
                  onChange={setDetails}
                  value={AgentDetails.service_provider}
                  id="id_service_provider"
                >
                  <option value="---">Choose Device type..</option>
                  <option value="Dustbin">Dustbin</option>
                  <option value="Washroom">Washroom</option>
                  <option value="Waterpoints">Waterpoints</option>
                </select>
                <br />
                <button
                  type="submit"
                  
                  name="register"
                  className="btn btn-primary shadow-2 mb-4"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }
