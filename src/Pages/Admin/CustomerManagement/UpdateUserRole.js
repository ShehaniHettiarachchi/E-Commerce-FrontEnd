import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

import { MDBCardBody, MDBRow, MDBInput, MDBCard } from "mdb-react-ui-kit";

export default function UpdateUserRole() {
  // const [Customer, setCustomer] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [permissionLevel, setPermissionLevel] = useState("");
  const navigate = useNavigate();

  const changeOnClick = (e) => {
    e.preventDefault();

    const Customer = {
      name,
      email,
      permissionLevel,
    };

    axios
      .put(`http://localhost:8070/customer/update/${id}`, Customer,)
      .then((res) => {
        console.log(res.data);
        alert("Updated");
        navigate("/customer");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios

      .get(`http://localhost:8070/customer/get/${id}}`)
      .then((res) => [
        setName(res.data.Customer.name),
        setEmail(res.data.Customer.email),
        setPermissionLevel(res.data.Customer.permissionLevel),
      ])
      .catch((error) => console.Console.log(error));
  }, []);

  return (
    <MDBRow className="d-flex justify-content-center align-items-center h-200 pt-5">
      <MDBCard
        className="my-4 h-50 w-50 align-items-center"
        border="info"
        style={{ maxWidth: "520px" }}>
        <MDBCardBody
          className="text-black d-flex flex-column justify-content-center "
          style={{ maxWidth: "450px" }}>
          <h3 className="mb-5 mt-5 text-uppercase fw-bold text-light bg-dark">
            Update User Role
          </h3>

          <form onSubmit={changeOnClick}>
            <MDBRow>
              <MDBInput
                wrapperClass="mb-3 "
                id="name"
                type="text"
                className="form-control"
                value={name}
                name="Name"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                readOnly
              />
              <MDBInput
                wrapperClass="mb-4"
                type="text"
                className="form-control"
                name="Email"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                readOnly
              />

              <Form.Select
                className="mb-4 "
                value={permissionLevel}
                onChange={(e) => {
                  setPermissionLevel(e.target.value);
                }}>
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </Form.Select>
            </MDBRow>

            <div className="d-flex justify-content-end pt-3">
              <button
                type="submit"
                className="btn btn-info btn-sl text-center fw-normal text-white pt-2 mb-4  w-50">
                Update
              </button>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
  );
}
