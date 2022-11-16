import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewPurchaseHistory = () => {
  const [allPurchase, setAllpurchase] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/purchase/")
      .then((res) => setAllpurchase(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <br></br>
      <div className="row">
        <h1
          className="fw-bold mb-2 ps-5 pb-5 text-center"
          style={{ color: "#001E6C" }}>
          Customer Purchase Summary
        </h1>
      </div>

      <div className="row">
        <div className="col-lg-7 col-0 "></div>
        <div className="col-lg-4 col-0">
          <form className="form-inline">
            <div class="input-group ">
              <input
                type="search"
                class="form-control"
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

      <br></br>
      <div className="row">
        <div className="col-md-1 "></div>
        <div className="col-md-10 pt-5">
          <table className="table text-left">
            <thead className="thead-light" style={{ color: "#193498" }}>
              <th>
                <h5 className="fw-bold">Email</h5>
              </th>
              <th>
                <h5 className="fw-bold">Product Name</h5>
              </th>
              <th>
                <h5 className="fw-bold">Quantity</h5>
              </th>
              <th>
                <h5 className="fw-bold">Purchase Date</h5>
              </th>
            </thead>

            {allPurchase
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.email
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((setAllpurchase, key) => (
              <tbody>
                <tr>
                  <td>
                  <div className="ms-0">
                        <p className="text-muted mb-1">
                          {setAllpurchase.email}
                        </p>
                      </div>
                  </td>
                  <td>
                      <div className="ms-0">
                        <p className="text-muted mb-1">
                          {setAllpurchase.product}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="ms-0">
                        <p className="text-muted mb-1">
                          {setAllpurchase.quantity}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="ms-0">
                        <p className="text-muted mb-1">
                          {setAllpurchase.date}
                        </p>
                      </div>
                    </td>
                </tr>
              </tbody>
            ))}
             <br></br>

<div className="col-lg-8 col-1 mr-2"></div>

          </table>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default ViewPurchaseHistory;
