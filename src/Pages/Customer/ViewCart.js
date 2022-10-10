import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewCart () {
  const [allCart, setAllCart] = useState([]);

  useEffect(() => {
    //const userId = localStorage.getItem("userId");
    axios
      .get("http://Localhost:8070/cart/")
      .then((res) => setAllCart(res.data))
      .catch((error) => console.log(error));
  });  

  return (
    <div>
      <br></br>
      <div className="col">
        <h1 className="h1 text-center">Shopping Cart</h1>
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table table-hover">
            <thead className="table-light">
              <th>Item</th>
              <th></th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th></th>
            </thead>

            {allCart.map((cart, key) => (
              <tbody>
                <tr>
                  <td>{cart.productImage}</td>
                  <td>{cart.productName}</td>                  
                  <td>{cart.productPrice}</td>
                  <td>{cart.quantity}</td>
                  <td>{cart.quantity*cart.productPrice}</td>
                  <td></td>
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
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
