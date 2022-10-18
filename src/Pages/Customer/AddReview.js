import React, { useState } from "react";
import axios from "axios";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function AddReview() {
  const [productName, setProductName] = useState("");
  const [comment, setComment] = useState("");
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
    
function sendData(e) {
    e.preventDefault();

    const newReview = {
        productName,
        UserName,
        comment,
        email
    };

  
    axios
      .post("http://Localhost:8070/review/add", newReview)
      .then(() => {
        alert("Thank you for your feedback!");

        setProductName("");
        setUserName("");
        setComment("");
        setEmail("");
      })
      
      .catch((err) => {
        alert(err);
      });

      setTimeout(() => {
        window.location.replace("http://localhost:3000/review");
      }, 2000);
     
  }

  return (
    <div> 
        <h1 className="display-6 text-center mb-4">
            <br></br>
            Give Your Feedbacks
          </h1>
          <hr className="w-25 mx-auto" />   

      <div className="container">     
        <div className="col-md-5" id='div2'>
          <form onSubmit={sendData} class='form'>
            <div className = "card-body">  
              <div className="mb-3">
                <label htmlFor="Pname" className="form-label"> Product</label>
                <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => {setProductName(e.target.value);}} required/>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" onChange={(e) => {setEmail(e.target.value);}} required/>
                </div>

                <div className="mb-3">
                  <label htmlFor="Uname" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="userName" onChange={(e) => {setUserName(e.target.value);}}required/>
                </div>

                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">Your Message</label>
                  <textarea className="form-control" id="comment" rows="5" maxLength={100} onChange={(e) => {setComment(e.target.value);}} required/>
                </div>
                
                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Review <i className="fa fa-paper-plane ms-2"></i></button>
              </div>
            </form>
          </div>          
        </div>
      </div>
    
              
  );
}

export default AddReview;