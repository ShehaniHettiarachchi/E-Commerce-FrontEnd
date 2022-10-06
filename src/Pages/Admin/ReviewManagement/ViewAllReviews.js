import React, { useState, useEffect } from "react";
import axios from "axios";



const ViewAllReviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/review/")
      .then((res) => setAllReviews(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">All Reviews</h1>
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
              <th>Ratings</th>
              <th>Review</th>
            </thead>

            {allReviews.map((review, key) => (
              <tbody>
                <tr>
                  <td>{review.productId}</td>
                  <td>{review.rating}</td>
                  <td>{review.comment}</td>
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

export default ViewAllReviews;
