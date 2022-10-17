import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const ViewOrders = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/order/")
      .then((res) => setAllOrder(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="fw-bold mb-2 ps-5 pb-5 text-center"
          style={{ color: "#001E6C" }}>Customer Purchase Summary</h1>
      </div>

      <div className="row">
        <div className="col-lg-8 col-1 mr-2"></div>
        <div className="col-mb-2 mt-4 mr-2" >
          <button
            className="btn btn-dark rounded-center  "
            style={{ color: "#FFFFFF" }}
            onClick={() => {
              window.location.href = "/purchasereport";
            }}>
            Generate Report
          </button>
        </div>
      

      
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
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table text-left">
            <thead className="thead-light" style={{ color: "#193498" }}>
              <th><h5 className="fw-bold">Email</h5></th>
              <th><h5 className="fw-bold">Product Name</h5></th>
              <th><h5 className="fw-bold">Quantity</h5></th>
              <th><h5 className="fw-bold">Purchase Date</h5></th>
            </thead>

            {allOrder.map((order, key) => (
              <tbody>
                <tr>
                  <td>{order.customerEmail}</td>
                  <td>{order.orderItems.name}</td>
                  <td>{order.quantity}</td>
                  <td>{order.createdAt}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>

      
    </div>
  );
};

export default ViewOrders;
