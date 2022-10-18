//import axios from "axios";
import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

export default function UpdateProfile () {

    const [customer, setCustomer] = useState([]);

    const  id = localStorage.getItem("uID");
    console.log(id);

    return (
    
            <h1>{id}</h1>
        
       
    )
}