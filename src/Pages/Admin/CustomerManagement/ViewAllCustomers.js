import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

const ViewAllCustomer = () => {
  const [allCustomer, setAllCustomer] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/customer")
      .then((res) => setAllCustomer(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="d-flex flex-column justify-content-center pt-3 mb-2 ps-5 pb-5 sm-6">
      <br></br>
      <div className="row">
        <h1
          className="fw-bold mb-2 ps-5 pb-5 text-center"
          style={{ color: "#39A2DB" }}>
          User Details
        </h1>
      </div>

      <div className="row">
        <div className="col-lg-8 col-0 "></div>
        <div className="col-lg-4 col-0">
          <form className="form-inline">
            <div class="input-group ">
              <input
                type="search"
                class="form-control "
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <button type="button" class="btn btn-dark rounded-right">
                search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="pt-5 pb-lg-2 mb-2 mt-1 px-7"></div>
      <MDBTable align="middle ">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>

        {allCustomer
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (
              val.permissionLevel
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((setAllCustomer, key) => (
            <MDBTableBody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-0">
                      <p className="fw-bold mb-1">{setAllCustomer.name}</p>
                      <p className="text-muted mb-1">{setAllCustomer.email}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <MDBBadge color="success" pill>
                    {setAllCustomer.permissionLevel}
                  </MDBBadge>
                </td>

                <td>
                  <a href="#"> Edit </a>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
};

export default ViewAllCustomer;
