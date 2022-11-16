import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { useReactToPrint } from "react-to-print";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function CustomerReport() {
  const [allCustomer, setAllCustomer] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/customer/")
      .then((res) => setAllCustomer(res.data))
      .catch((error) => console.log(error));
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const UserName = allCustomer
    .filter((elem) => elem.User == "Users")
    .reduce((acc, elem) => acc + 1, 0);

  const UserRole = allCustomer
    .filter((elem) => elem.User == "Role")
    .reduce((acc, elem) => acc + 1, 0);

  return (
    <div>
      <div ref={componentRef}>
        <br></br>
        <div className="row">
          <h1 className="text-center">User Report</h1>
        </div>

        <br></br>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10">
            <table className="table text-center">
              <thead className="thead-light">
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Role</th>
              </thead>

              {allCustomer.map((customer, key) => (
                <tbody>
                  <tr>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone_number}</td>
                    <td>{customer.permissionLevel}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 ml-5">
          <button className="btn btn-danger mb-2" onClick={handlePrint}>
            Print Report Here
          </button>
        </div>
      </div>
    </div>
  );
}
