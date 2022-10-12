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
    <div class='responsive'>   
    <br></br><br></br>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
        <div className="row">
        <h1 className="text-center">Reviwes</h1>
      </div><div className="row">
        <div className="col-lg-9 col-0"></div>
        <div className="col-lg-3 col-2">
          <form className="form-inline responsive">
          <div class="input-group">
            <input type="search" class="form-control" placeholder="Search"
              aria-label="Search"/>            
              <button className="btn btn-success my-2 my-sm-0" type="submit">
              Search
              </button>
            
          </div>       
          </form>
        </div>
      </div>
          <table className="table table-hover text-center responsive">
            
          <thead className="thead-light">
              <tr>
              <th>Product</th>
              <th>Ratings</th>
              <th>Comment</th>
              <th>Time</th>
              </tr>
            </thead>
            
            {allReviews.map((review, key) => (              
              <tbody>
                <tr>
                  <td>{review.productId}</td>
                  <td>{review.rating}</td>                  
                  <td>{review.comment}</td>
                  <td>{review.time}</td>                
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
            className="btn btn-primary  mb-2"
            onClick={() => {
              window.location.href = "/";
            }}>
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );  
};

export default ViewAllReviews;
