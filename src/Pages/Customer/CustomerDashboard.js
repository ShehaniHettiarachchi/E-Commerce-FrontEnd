import React from "react";
import { Link } from "react-router-dom";

export default function CustomerDashboard() {
  const id = localStorage.getItem("uID");
  const email = localStorage.getItem("email");
  console.log(id);
  console.log(email);

  return (
    <>
      <h1>Customer Dashboard</h1>

      <h1>{email}</h1>

      <button>
        <Link to={"/customer-profile"}>Profile</Link>
      </button>
    </>
  );
}
