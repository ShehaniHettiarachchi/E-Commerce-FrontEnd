import React, { useState, useEffect } from "react";
import axios from "axios";
import './ViewAllOrders.css'
import Swal from "sweetalert2";
import orderPdf from "./OrderReport";

const ViewAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios
            .get("http://Localhost:8070/order/")
            .then((res) => setAllOrder(res.data))
            .catch((error) => console.log(error));
    });

    const deleteOrder = (id) => {
        axios
            .delete(`http://localhost:8070/order/delete/${id}`)
            .then((res) => alert("Order Deleted"));

        setAllOrder(allOrder.filter((elem) => elem.id !== id));
    };

    const viewSingleOrder=(_id)=>{
        localStorage.setItem("Id",_id)

        window.location.href ="single-order"
    }


    return (
        <div className="container">
            <dev><h2 className="text-center">Order Management</h2></dev>
            <br></br>
            <br></br>
            <div class="input-group">
            <input type="search" class="form-control" placeholder="Search"
              aria-label="Search"
              onChange={(event)=> {
                setSearchTerm(event.target.value)
              }}/>            
              <button className="btn btn-success my-2 my-sm-0" type="submit">
              Search
              </button>
              <br></br>
            
          </div>
            <div className="row">
                <div className="col-md-1"></div>

                <div className="col-md-10">
                    <table className="table text-center">
                        <thead className="thead-light">
                            <th>Order ID</th>
                            <th>Price(rs)</th>

                            <th>Status</th>

                            <th>Action</th>
                        </thead>

                        {allOrder.filter((val)=>{
                            if(searchTerm ==""){
                                return val
                            }else if(val._id.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return val
                            }
                        }).map((order, key) => (
                            <tbody>
                                <tr>
                                    <td>{order._id}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.orderStatus}</td>

                                    <td>
                                        <button
                                            onClick={() => deleteOrder(order._id)}
                                            className="btn btn-danger mr-1">
                                            Delete Order
                                        </button>

                                        <button
                                            className="btn btn-primary ml-1"
                                            onClick={()=>viewSingleOrder(order._id)}
                                            >
                                            Process
                                        </button>
                                    </td>
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
                        Generate Order Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewAllOrder;
