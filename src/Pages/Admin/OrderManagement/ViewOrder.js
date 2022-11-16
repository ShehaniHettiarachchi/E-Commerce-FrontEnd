import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export default function ViewOrder(props) {

    const [address, setAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    const { id } = useParams();


    useEffect(() => {
        function getSingleOrder() {
            axios.get(`http://localhost:8070/order/get/${id}`).then((res) => {

                if (res.data.status) {
                    setAddress(res.data.Order.address);
                    setPhoneNo(res.data.Order.phoneNo);
                    setTotalPrice(res.data.Order.totalPrice);
                    setOrderStatus(res.data.Order.orderStatus);
                }
            }).catch((err) => {

                alert(err);
            });
        }

        getSingleOrder();
    }, []);

    function update(e) {

        e.preventDefault();

        const data = {
            orderStatus,
        };

        axios.put(`http://localhost:8070/order/updateStatus/${id}`, data).then(() => {

            Swal.fire({

                title: "Success!",
                text: "Updated Successfully",
                icon: "success",
                showConfirmButton: false,
            });



        }).catch((err) => {

            Swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                type: "error",
            });
        });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/orders");
        }, 2500)
    }

    return (



        <div className="container">
            <form onSubmit={update} >

                <div className="form-group">
                    <label>Order ID</label>
                    <input type="text" className="form-control" readOnly defaultValue={id} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" readOnly defaultValue={address} />
                </div>
                <div className="form-group">
                    <label>Phone No</label>
                    <input type="text" className="form-control" readOnly defaultValue={phoneNo} />
                </div>
                <div className="form-group">
                    <label>Total Price</label>
                    <input type="text" className="form-control" readOnly defaultValue={totalPrice} />
                </div>

                <div className="form-group">
                <label for="name">Status</label>&nbsp;&nbsp;
                <select name="Select Status" size={"1"} defaultValue={"Processing"}
                onChange={(e)=>{
                    setOrderStatus(e.target.value);
                }}>
                  <option >Processing</option>
                  <option >Shipped</option>


                </select>
            </div>


                <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
                <a href="/orders"><button type="button" class="btn btn-danger">Cancel</button></a>
            </form>

        </div>

    )



}