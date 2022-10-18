import React, { useState, useEffect, Fragment, useRef } from "react";
import axios from "axios";

import ReviewPdf from "../../Customer/reviewpdf";

const ViewAllReviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://Localhost:8070/review/")
      .then((res) => setAllReviews(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div class="container responsive">
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <h1 className="text-center">Feedbacks</h1>
          </div>
          <div className="row">
            <div className="col-lg-9 col-0"></div>
            <div className="col-lg-3 col-2">
              <form className="form-inline responsive">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(event)=> {
                      setSearchTerm(event.target.value)
                    }}
                  />
                  <button
                    className="btn btn-success my-2 my-sm-0"
                    type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div id="my-table">
            <table className="table table-hover text-center responsive">
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>Customer</th>
                  <th>Comment</th>
                  <th>Time</th>
                </tr>
              </thead>

              {allReviews.filter((val)=> {
                if(searchTerm == "") {
                  return val
                } else if(val.productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val
                }

              }).map((review, key) => (
                <tbody>
                  <tr>
                    <td>{review.productName}</td>
                    <td>{review.UserName}</td>
                    <td align="left">{review.comment}</td>
                    <td>{review.time}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <div
            className="d-grid"
            style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
            <ReviewPdf data={allReviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllReviews;
