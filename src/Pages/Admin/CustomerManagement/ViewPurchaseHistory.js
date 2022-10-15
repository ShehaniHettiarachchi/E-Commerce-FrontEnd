import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";

const ViewOrders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/orders/")
      .then((res) => setAllOrder(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">Customer Purchase Summary</h1>
      </div>

      <div className="row">
        <div className="col-lg-9 col-0"></div>
        <div className="col-lg-3 col-0">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table text-center">
            <thead className="thead-light">
              <th>Email</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Purchase Date</th>
            </thead>

            {allOrder.map((order, key) => (
              <tbody>
                <tr>
                  <td>{supplier.customer}</td>
                  <td>{supplier.product}</td>
                  <td>{supplier.quantity}</td>
                  <td>{supplier.createdAt}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <button
            className="btn btn-primary mb-2"
            onClick={() => {
              window.location.href = "/purchasereport";
            }}>
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
