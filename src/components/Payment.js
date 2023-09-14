import React from "react";
import "./Payment.css";
function Payment() {
  const phonePrice = 180;

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_f7vQ7iWdaQB2bY",
      currency: "INR",
      amount: amount * 100,
      name: "Burger Home!",
      description: "Thanks for purchasing",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Burger Home!",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
      <h2 className="paymentorder">Your Order is...</h2>
      <div className="container">
        <div className="row" id="menu">
          <div className="card-01">
            <strong>The Original “OG” Crispy Single (1) Burger</strong>
            <img className="image" src="./img/1" alt="" />
            <p>
              Single (1) Certified Angus beef patty, caramelized onions melted
              American cheese, Crispy Sauce on a Toasted Brioche Bun
            </p>
            <span>&#x20B9;180</span>
          </div>
        </div>
      </div>
      <button
        className="paymentbtn"
        onClick={() => displayRazorpay(phonePrice)}
      >
        BUY NOW
      </button>
      <a className="paymentback" href="/">
        Back To Home
      </a>
    </div>
  );
}

export default Payment;
