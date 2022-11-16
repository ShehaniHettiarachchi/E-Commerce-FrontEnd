import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

import makeToast from "../../Components/toast/index";

export default function CustomerUpdate() {
  //const [Customer, setCustomer] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const changeonClick = (e) => {
    e.preventDefault();

    const Customer = {
      name,
      email,
      phone_number,
    };

    axios
      .put(
        `http://localhost:8070/customer/update/${localStorage.getItem("uID")}`,
        Customer,
      )
      .then((res) => {
        console.log(res.data);
        makeToast({ type: "success", message: "User Update Successful" });
        window.location.href = "/customer-profile";
      })
      .catch((err) => {
        makeToast({ type: "error", message: "User Update Unsuccessful" });
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8070/customer/get/${localStorage.getItem("uID")}`)
      .then((res) => [
        setName(res.data.Customer.name),
        setEmail(res.data.Customer.email),
        setPhone_number(res.data.Customer.phone_number),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <section style={{ backgroundColor: "#002B5B" }}>
        <MDBContainer className="py-5 ">
          <br></br>
          <br></br>

          <MDBRow>
            <MDBCol lg="5">
              <form onSubmit={changeonClick}>
                <MDBCard className="mb-4 fluid">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="/user.svg"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <p className="text-muted mb-1">
                      <input
                        type="text"
                        className="form-control text-center"
                        name="Name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </p>
                    <p className="text-muted mb-1 pb-3">
                      <input
                        type="text"
                        className="form-control text-center"
                        name="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </p>
                    <p className="text-muted mb-1">
                      <input
                        type="text"
                        className="form-control text-center"
                        name="Name"
                        value={phone_number}
                        onChange={(e) => {
                          setPhone_number(e.target.value);
                        }}
                      />
                    </p>

                    <button className=" btn btn-info  btn-sm text-center fw-bold text-white pt-0 mb-4 mb-4 mx-5 w-50" onClick={()=> {
                      window.location.href = "/customer-report";
                    }}>
                      Save Details
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </form>
            </MDBCol>

            <MDBCol lg="7">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="9">
                      <p>
                        <b>Full Name: {name}</b>
                      </p>
                    </MDBCol>
                    <hr></hr>

                    <MDBCol sm="9">
                      <p>
                        <b>E-Mail: {email}</b>
                      </p>
                    </MDBCol>
                    <hr></hr>

                    <MDBCol>
                      <p>
                        <b>Contact No: {phone_number}</b>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}
