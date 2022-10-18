import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import makeToast from "../../Components/toast/index";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function UserProfile() {
  const [customer, setCustomer] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const id = localStorage.getItem("uID");

  const deleteCustomer = () => {
    axios
      .delete(`http://localhost:8070/customer/delete/${id}`)
      .then((res) =>
        makeToast({ type: "success", message: "Customer Deleted" }),
      );

    setCustomer(customer.filter((elem) => elem.id !== id));

    window.location.href = localStorage.removeItem("uID");
    window.location.href = localStorage.removeItem("token");
    window.location.href = localStorage.removeItem("email");
    window.location.href = localStorage.removeItem("permissionLevel");
    window.location.href = "/";
  };

  useEffect(() => {
    const id = localStorage.getItem("uID");
    console.log(id);

    axios
      .get(`http://Localhost:8070/customer/get/${id}`)
      .then((res) => [
        setName(res.data.Customer.name),
        setEmail(res.data.Customer.email),
        setPhone_number(res.data.Customer.phone_number),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <section style={{ backgroundColor: "#002B5B" }}>
      <MDBContainer className="py-5 ">
        <br></br>
        <br></br>
        <MDBRow>
          <MDBCol lg="5">
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
                    readOnly
                  />
                </p>
                <p className="text-muted mb-1 pb-3">
                  <input
                    type="text"
                    className="form-control text-center"
                    name="Email"
                    value={email}
                    readOnly
                  />
                </p>
                <p className="text-muted mb-1">
                  <input
                    type="text"
                    className="form-control text-center"
                    name="Name"
                    value={phone_number}
                    readOnly
                  />
                </p>
                <button
                  className=" btn btn-danger  btn-sm text-center fw-bold text-white pt-1 mb-4 mb-4 mx-5 w-50"
                  onClick={() => deleteCustomer(customer._id)}>
                  Delete Account
                </button>
                <button className=" btn btn-info  btn-sm text-center fw-bold text-white pt-0 mb-4 mb-4 mx-5 w-50">
                  <Link
                    to={`/customer-update/${localStorage.getItem("uID")}`}>
                    Update Account
                  </Link>
                </button>
              </MDBCardBody>
            </MDBCard>
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
  );
}
