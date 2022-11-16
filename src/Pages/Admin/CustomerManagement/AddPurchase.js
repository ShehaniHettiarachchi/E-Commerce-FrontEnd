import React, { useState } from "react";
import axios from "axios";

function AddPurchase(){
    const [product, setProduct] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newPurchase = {
      product,
      email,
      quantity
    };

    axios
    .post ("http://Localhost:8070/purchase/newPurchase", newPurchase)
    .then (()=>{
      alert("Order complete successfuly ! ");

      setEmail("");
      setQuantity("");
      setProduct("");
    })
    .catch((err) => {
      alert(err);
    });
  }

  return(
    <div>
      {/* <Navbar/> */}
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4">
                Purchase Info
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={sendData}>
                <div className="mb-3">
                  <label htmlFor="Pname" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    onChange={(e) => {
                      setProduct(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Uname" className="form-label">
                    Customer Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-4">
                  Process <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
}

export default AddPurchase;