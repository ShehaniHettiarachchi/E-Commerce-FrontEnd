import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { MDBBadge } from "mdb-react-ui-kit";

const ViewAllCustomer = () => {
  const [allCustomer, setAllCustomer] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/customer/")
      .then((res) => setAllCustomer(res.data))
      .catch((error) => console.log(error));
  });

  const deleteCustomer = (id)=> {
    axios.delete(`http://localhost:8070/customer/delete/${id}`)
    .then((res)=> alert("User Deleted"));

    setAllCustomer(allCustomer.filter((elem)=> elem.id !== id));
  }

  return (
    <div>
      <br></br>
      <div className="row">
        <h1
          className="fw-bold mb-2 ps-5 pb-5 pt-5  text-center"
          style={{ color: "#001E6C" }}>
          User Details
        </h1>
      </div>

      <div className="row">
        <div className="col-lg-7 col-0 "></div>
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
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10 pt-5">
          <table className="table text-left">
            <thead className="thead-light " style={{ color: "#193498" }}>
              <th>
                <h5 className="fw-bold">Name</h5>
              </th>
              <th>
                <h5 className="fw-bold">Role</h5>
              </th>
              <th>
                <h5 className="fw-bold">Email</h5>
              </th>
              <th>
                <h5 className="fw-bold">Contact</h5>
              </th>
              <th>
                <h5 className="fw-bold">Actions</h5>
              </th>
              
            </thead>
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
                <tbody>
                  <tr>
                    <td>
                      <div className="ms-0">
                        <p className="fw-bold mb-1">{setAllCustomer.name}</p>
                        <p className="text-muted mb-1">
                          {setAllCustomer.email}
                        </p>
                      </div>
                    </td>

                    <td>
                      <MDBBadge color="success" pill>
                        {setAllCustomer.permissionLevel}
                      </MDBBadge>
                    </td>
                    <td>
                      <div className="ms-0">
                        <p className="text-muted mb-1">
                          {setAllCustomer.email}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="ms-0">
                        <p className="text-muted mb-1">
                          {setAllCustomer.phone_number}
                        </p>
                      </div>
                    </td>
                    <td >
                    <button
                      onClick={() => deleteCustomer(setAllCustomer._id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            <br></br>

            <div className="col-lg-8 col-1 mr-2"></div>
            <div className="col-mb-2 mt-4 mr-2">
              <button
                className="btn btn-dark rounded-center  "
                style={{ color: "#FFFFFF" }}
                onClick={() => {
                  window.location.href = "/customer-report";
                }}>
                Generate Report
              </button>
            </div>
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default ViewAllCustomer;
