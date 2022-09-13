import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CustomerRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newCustomer = {
      name,
      email,
      phone_number,
      password,
    };

    axios
      .post("http://Localhost:8070/customer/register", newCustomer)
      .then(() => {
        alert("Customer Registration Successfull...!!!");

        setName(" ");
        setEmail("");
        setPhone_number("");
        setPassword("");
        navigate("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-5 ml-0">
          <br></br>
          <h1 className="text-center">User Registration</h1>
          <p className="text-center">
            Fill out the details below to submit a registered account
          </p>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="col-lg-5 ml-0">
          <div className="border ml-3 mr-3 bg-light shadow">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={sendData}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter User Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}></input>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  User Email
                </label>
                <input
                  type="Email"
                  className="form-control"
                  id="email"
                  placeholder="Enter User Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}></input>
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  User Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Phone Number"
                  onChange={(e) => {
                    setPhone_number(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}></input>
              </div>
              <br></br>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block text-center">
                Sign Up
              </button>
              <br></br>
            </form>
          </div>
        </div>

        <div className="col-lg-7 col-12">
          <img
            src="../images/register.png"
            height="500px"
            width="80%"
            className="ml-0"></img>
        </div>
        <div className="col-lg-0 col-0"></div>
      </div>

      <br></br>
    </div>
  );
}
