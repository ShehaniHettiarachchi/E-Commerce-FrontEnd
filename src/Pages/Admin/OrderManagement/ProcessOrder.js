import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export default function ProcessOrder(props) {

    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [orderStatus, setOrderStatus] = useState("");


    const { id } = useParams();


    useEffect(() => {
        function getOrder() {
            axios.get(`http://localhost:8070/order/get/${id}`).then((res) => {

                if (res.data.status) {
                    setAddress(res.data.Order.address);
                    setPhoneNumber(res.data.Order.phoneNo);
                    setTotalPrice(res.data.Order.totalPrice);
                    setOrderStatus(res.data.Order.orderStatus);

                }
            }).catch((err) => {

                alert(err);
            });
        }

        getOrder();
    }, []);

    function update(e) {

        e.preventDefault();

        const data = {
            orderStatus
        };

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'Confirm Shipment',

            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancel',
            reverseButtons: false
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`http://localhost:8070/order/updateStatus/${id}`, data);
                swalWithBootstrapButtons.fire({
                    title: 'Order Shipped',
                    icon: 'success',
                    showConfirmButton: false,
                }
                )
                setTimeout(() => {
                    window.location.replace("http://localhost:3000/all-orders");

                }, 1500);
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: 'Canceled',
                    icon: 'error',
                    showConfirmButton: false,
                }
                )
                setTimeout(() => {
                    window.location.replace("http://localhost:3000/all-orders");

                }, 1500);
            }
        });



    }

    return (



        <div className="container">
            <form onSubmit={update} >

                <div className="form-group">
                    <label>Order ID</label>
                    <input type="text" readOnly className="form-control" required defaultValue={id}
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" id="address" readOnly defaultValue={address}
                         />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control"  readOnly defaultValue={phoneNumber}
                        />
                </div>
                <div className="form-group">
                    <label >Total Price</label>
                    <input type="text" className="form-control"  readOnly defaultValue={totalPrice}
                        />
                </div>
                <div className="form-group">
                    <label>Status</label>&nbsp;&nbsp;
                    <select name="Select Status" size={"1"} defaultValue={"Processing"}
                        onChange={(e) => {
                            setOrderStatus(e.target.value);
                        }}>
                        <option >Processing</option>
                        <option >Shipped</option>


                    </select>
                </div>




                <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
                <a href="/all-orders"><button type="button" class="btn btn-danger">Cancel</button></a>
            </form>

        </div>

    )



}