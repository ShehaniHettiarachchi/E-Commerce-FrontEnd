import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddReview() {
  const [ratings, setRatings] = useState("");
  const [comment, setComment] = useState("");
  const [productId, setProductId] = useState("");
  const [userId, setUserId] = useState("");  

  function sendData(e) {
    e.preventDefault();
    const newReview = {
        ratings,
        comment,
        productId,
        userId,
    };

    axios
      .post("http://Localhost:8070/review/add", newReview)
      .then(() => {
        alert("Thank you for your feedback!");

        // setRatings("");
        // setComment("");
        // setProductId("");
        // setUserId("");
        // navigate("");
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
              <h3 className="fs-5 text-center mb-0">Reviews</h3>
              <h1 className="display-6 text-center mb-4">
                Give Your <b>Review</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">            
            <div className="col-md-6">
              <form onSubmit={sendData}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Smith"
                    onChange={(e) => {
                        setRatings(e.target.value);
                    }
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    onChange={(e) => {
                        setComment(e.target.value);
                    }
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"

                    onChange={(e) => {
                        setProductId(e.target.value);
                    }
                    }
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Contact No </label>
                  <input type="phone"
                    class="form-control"
                    id="phone"
                    placeholder="07XXXXXXXX"
                    onChange={(e) => {
                      setUserId(e.target.value);
                    }
                    }
                  />
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