import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

export default function CustomerLogin() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8070/customer/login";
      const { data: res } = await axios.post(url, data);
      alert("LogIn successfull");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("uID", res.data.customer._id);
      localStorage.setItem("email", res.data.customer.email);
      localStorage.setItem(
        "permissionLevel",
        res.data.customer.permissionLevel,
      );
      navigate("/");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert("Login Failed, Please Check Your Email or Password");
        setData({ email: "", password: "" });
        setError(error.response.data.message);
      }
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-bold mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}>
              SIGN IN
            </h3>
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                id="formControlLg"
                type="email"
                size="lg"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                placeholder="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                onChange={handleChange}
                value={data.password}
              />

              <button
                type="submit"
                className="btn btn-info btn-lg text-center fw-bold text-white pt-1 mb-4 mb-4 mx-5 w-100">
                LOGIN
              </button>
            </form>
            <p className="small mb-5 pb-lg-2 ms-5 text-center">
              <a class="text-muted" href="#!">
                {" "}
                Forgot password?
              </a>
            </p>
            <p className="ms-5 text-center">
              Don't have an account?{" "}
              <a href="#!" class="link-info">
                Register here
              </a>
            </p>
          </div>
        </MDBCol>
        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://media.istockphoto.com/photos/young-businesswoman-using-digital-tablet-picture-id1332113666?b=1&k=20&m=1332113666&s=170667a&w=0&h=x8mxRKXOgbiXqCsR1hPbmT3ohPNxtPnU92wgphQv3CA="
            alt="Login image"
            width="100%"
            height="140%"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
