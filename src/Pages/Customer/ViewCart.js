import React, { useState, useEffect } from "react";
import axios from "axios";



const ViewCart = () => {
  const [allCart, setAllCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/cart/")
      .then((res) => setAllCart(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">My Cart</h1>
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
              <th>Product</th>
              <th></th>
              <th>Price</th>
              <th></th>
            </thead>

            {allCart.map((cart, key) => (
              <tbody>
                <tr>
                  <td>{cart.productName}</td>
                  <td>{cart.productImage}</td>
                  <td>{cart.productPrice}</td>
                  <td>{cart.productImage}</td>
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
              window.location.href = "/supplierreport";
            }}>
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
