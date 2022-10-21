import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export default function ViewOrder(props) {

    const [customer,setCustomer]=useState("");
    const [price,setPrice]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [phoneNo,setPhoneNo]=useState("");
    
    const { id } = useParams();

    //get data from fetch single order
    useEffect(() => {
        function getOrder() {
          axios.get(`http://localhost:8070/order/get/${id}`).then((res) => {
    
            if (res.data.status) {
              setCustomer(res.data.order.customer);
              setPrice(res.data.order.totalPrice);
              setAddress(res.data.order.shippingInfo.address);
              setCity(res.data.order.shippingInfo.city);
              setPhoneNo(res.data.order.shippingInfo.phoneNo);
              
            }
          }).catch((err)=>{
    
            alert(err);
          });
        }
    
        getOrder();
    },[]);
    
    //update function-----------------
    function update(e) {
  
      e.preventDefault();
  
      const data = {
        customer,
        price,
        address,
        city,
        phoneNo,
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
          axios.put(`http://localhost:8070/materials/update/${id}`, data);
          swalWithBootstrapButtons.fire({
            title: 'Order Shipped',
          icon: 'success',
          showConfirmButton:false,
          }
          )
          setTimeout(() => {
            window.location.replace("http://localhost:3000/");
            
          },1500);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Canceled',
          icon: 'error',
          showConfirmButton:false,
          }
          )
          setTimeout(() => {
            window.location.replace("http://localhost:3000/");
            
          },1500);
        }
      });
  
  
      
    }
    //end of update function
    return (



        <dev>
            <h5>Order Id - {id}</h5>
            <h5>price - {price}</h5>
        </dev>
    
    )
    
    }