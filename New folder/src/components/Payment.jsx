import React, { useState } from "react";

import "../App.css";


function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const _DEV_ = document.domain === "localhost";

function Payment() {
  

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: _DEV_ ? "rzp_test_4FEffmN1Ze0TOv" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: " Travel Trek",
      description: "Secure Payment Gateway",
      image: "http://localhost:1337/logo.svg",
      handler: function (response) {
        alert("Booking Succesfull");
       
      },
      
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      

        <button
          className="App-link"
          onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
          style={{backgroundColor:"green" , color:"white", borderRadius:"4px",width:"100%" , height:"2rem",borderColor:"green" }}
        >
      
          Pay Now
        </button>
      
    </div>
  );
}

export default Payment;