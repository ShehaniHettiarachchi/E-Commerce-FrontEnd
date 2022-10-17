import React, { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

function AddReview() {
  const [productName, setProductName] = useState("");
  const [comment, setComment] = useState("");
  const [UserName, setUserName] = useState("");
  /*const [data, setData] = useState({
    comment:"",
    productName:"",
    userName:"",
  });

  const navigate = useNavigate(); */
  
function sendData(e) {
    e.preventDefault();

    const newReview = {
        productName,
        UserName,
        comment,
    };

  
    axios
      .post("http://Localhost:8070/review/add", newReview)
      .then(() => {
        alert("Thank you for your feedback!");

        setProductName("");
        setUserName("");
        setComment("");
     
      })
      
      .catch((err) => {
        alert(err);
      });

     
  }

  return (
    <div>
      {/* <Navbar/> */}
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4">
                Give Your Feedbacks
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">            
            <div className="col-md-6">
              <form onSubmit={sendData}>
                <div className="mb-3">
                  <label htmlFor="Pname" className="form-label">
                    Product
                  </label>
                  <input type="text"
                    className="form-control"
                    id="productName"
                    onChange={(e) => {
                        setProductName(e.target.value);
                    }
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Uname" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"                    
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="comment"
                    rows="5"
                    maxLength={500}
                    onChange={(e) => {
                        setComment(e.target.value);
                    }
                    }
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Review <i className="fa fa-paper-plane ms-2"></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
}

export default AddReview;