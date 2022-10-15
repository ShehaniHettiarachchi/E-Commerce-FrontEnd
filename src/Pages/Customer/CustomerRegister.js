import React, { useState, useForm, FormValues } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

export default function CustomerRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    repeatPassword: "",
  });

  const navigate = useNavigate();
  const { reset } =
    useForm <
    FormValues >
    {
      defaultValues: {
        name: "",
        email: "",
        phone_number: "",
        password: "",
        repeatPassword: "",
      },
    };

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
    <MDBContainer fluid className="bg-light">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard fluid className="my-4 h-50" border="info">
            <MDBRow className="g-0">
              <MDBCol md="5" className="d-none d-md-block">
                <MDBCardImage
                  src="https://images.pexels.com/photos/5908719/pexels-photo-5908719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Sample photo"
                  className="rounded-start"
                  width={1000}
                  height={610}
                  style={{ maxWidth: "940px" }}
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody
                  className="text-black d-flex flex-column justify-content-center "
                  style={{ maxWidth: "620px" }}>
                  <h3 className="mb-2 mt-5 text-uppercase fw-bold text-info bg-dark">
                    Register Your Account
                  </h3>
                  <h8 className="mb-5 text-light bg-secondary">
                    Fill the details below to submit register account
                  </h8>
                  <form onSubmit={sendData}>
                    <MDBRow>
                      <MDBInput
                        wrapperClass="mb-4 "
                        placeholder="User Name"
                        size="sm"
                        id="name"
                        type="text"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Email"
                        size="sm"
                        id="email"
                        type="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Phone number"
                        size="sm"
                        id="phone"
                        type="tel"
                        onChange={(e) => {
                          setPhone_number(e.target.value);
                        }}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Password"
                        size="sm"
                        id="password"
                        type="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Repeat Password"
                        size="sm"
                        id="repeatpassword"
                        type="repeatpassword"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </MDBRow>

                    <div className="d-flex justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sl text-center fw-normal text-white pt-2 mb-4 mx-1 w-50"
                        onClick={() => {
                          reset({
                            name: "",
                          });
                        }}>
                        Reset All
                      </button>
                      <button
                        type="submit"
                        className="btn btn-info btn-sl text-center fw-normal text-white pt-2 mb-4  w-50">
                        Register
                      </button>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
