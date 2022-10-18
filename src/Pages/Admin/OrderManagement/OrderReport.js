import React, { useState, useEffect,useRef } from "react";
import {useReactToPrint} from "react-to-print";
import axios from "axios";
import {Link} from "react-router-dom";
import './ViewAllOrders.css'
import Swal from "sweetalert2";
import orderPdf from "./OrderReport";

const ViewAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

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
      <dev ref={componentRef}>
        <div className="container">
            <dev><h2 className="text-center">Order Report</h2></dev>

            <div class="input-group">
            
              <br></br>
            
          </div>
            <div className="row">
                <div className="col-md-1"></div>

                <div className="col-md-10">
                    <table className="table text-center">
                        <thead className="thead-light">
                            <th>Order ID</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Price</th>

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
                                    <td>{order.phoneNo}</td>
                                    <td>{order.address}</td>
                                    <td>{order.totalPrice}</td>
                                    

                                    <td>



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
                </div>
            </div>
        </div>
        
        <button className="btn btn-primary mb-2 ml-5" onClick={handlePrint}>
            Print Report Here
          </button>
        </dev>
    );
};

export default ViewAllOrder;
