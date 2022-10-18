import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './ViewAllOrders.css'
import Swal from "sweetalert2";

const ViewAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        axios
            .get("http://Localhost:8070/order/")
            .then((res) => setAllOrder(res.data))
            .catch((error) => console.log(error));
    });

    const deleteOrder = (id) => {


        Swal.fire({
            title: 'Are You Sure?',
            text: 'Once deleted, You Will Not Able To Recover These Details ! ',
            icon: 'warning',
            dangerMode: true,
            showCancelButton:true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
          }).then((result)=>{
            if(result.isConfirmed)
            {axios.delete(`http://localhost:8070/order/delete/${id}`);
            Swal.fire({
              title: 'Success!',
              text: `Order Deleted Successfully`,
              icon: 'success',
              showConfirmButton:false,
            });
            setTimeout(() => {
              window.location.replace("http://localhost:3000/all-orders");
              
            },1500);
          
          }
          }).catch((err)=>{
            Swal.fire({
              title : 'Error!',
              text : "Couldn't delete your Details",
              type : 'error',
            });
          });



       

        setAllOrder(allOrder.filter((elem) => elem.id !== id));
    };


    return (
        <div className="container">
            <dev><h2 className="text-center">Order Management</h2></dev>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-1"></div>

                <div className="col-md-10">
                    <table className="table text-center">
                        <thead className="thead-light">
                            <th>Order ID</th>
                            <th>Price</th>

                            <th>Status</th>

                            <th>Action</th>
                        </thead>

                        {allOrder.map((order, key) => (
                            <tbody>
                                <tr>
                                    <td>{order._id}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.orderStatus}</td>

                                    <td>
                                        <Link to={`/process/${order._id}`}><button type="button" className="btn btn-outline-success ml-1">Process Order</button></Link>&nbsp;
                                        <button
                                            onClick={() => deleteOrder(order._id)}
                                            className="btn btn-danger mr-1">
                                            Delete Order
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
                            window.location.href = "/order-report";
                        }}>
                        Generate Order Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewAllOrder;
