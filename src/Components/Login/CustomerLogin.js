import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
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
        setError(error.response.data.message);
      }
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://us.123rf.com/450wm/milkos/milkos1903/milkos190301250/118567682-great-bank-millennial-african-american-couple-shopping-online-on-laptop-with-credit-card-on-orange-s.jpg?ver=6"
              alt="login form"
              className="rounded-start w-100 h-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}>
                Sign into your account
              </h5>

              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  onChange={handleChange}
                  value={data.email}
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  onChange={handleChange}
                  value={data.password}
                  size="lg"
                />
                <MDBBtn
                  className="mb-4 px-5"
                  size="lg"
                  color="dark"
                  type="submit">
                  Login
                </MDBBtn>{" "}
                <br></br>
                <a className="small text-muted" href="#!">
                  Forgot password?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="#!" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>
              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
