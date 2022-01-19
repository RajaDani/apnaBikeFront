import Header from "../../header";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutStripe";
import "./stripe.scss";
import { BaseUrl } from "../../../BaseUrl";
import Footer from "../../footer";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51KDpJHHUGbX5r7qEMDLSsi6TVFlGxjTg2FbHc84qMnS5NkiLt135oBFAPOFWICVR0cFo2Q0W6pWFveShcxv0UOfb00DKIdd8aZ"
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const [payment, setpayment] = useState(false);
  const [payment_status, setpayment_status] = useState();
  const history = useHistory();

  async function confirmOrder(payment_method) {
    let auth = localStorage.getItem("token");
    let orderPlaced = await fetch(BaseUrl + `client/bookings/addbooking`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify({
        bikeId: history.location.state.bikeId,
        book_from: history.location.state.book_from,
        book_till: history.location.state.book_till,
        userId: history.location.state.userId,
        city: history.location.state.city,
        payment_status: payment_method,
        total: history.location.state.total,
        deliveryMethod: history.location.state.delivery,
        longitude: history.location.state.longitude,
        latitude: history.location.state.latitude,
      }),
    });

    let order = await orderPlaced.json();
    let orderNo = order.booked_bikes_id;
    if (orderPlaced.status === 200) {
      history.push({
        pathname: "/summary",
        state: {
          bike: history.location.state.bike,
          total: history.location.state.total,
          subtotal: history.location.state.subtotal,
          helmet: history.location.state.helmet,
          orderDetail: orderNo,
          paymentMethod: order.payment_status,
          book_from: history.location.state.book_from,
          book_till: history.location.state.book_till,
          city: history.location.state.city,
        },
      });
    } else if (
      orderPlaced.status === 401 &&
      order.message === "Your session is expired. Login Again"
    )
      alertModal();
    else alert(order.message);
  }

  function paymentConfirmation(value) {
    let payment_method = "Paid with card";
    if (value) {
      setpayment(!payment);
      confirmOrder(payment_method);
    }
  }

  function radioHandler() {
    let payment_method = "Cash on Delivery";
    setpayment_status(payment_method);
  }

  function alertModal() {
    Swal.fire({
      icon: "error",
      title: "Session Expired...",
      text: "Please Login Again!",
      confirmButtonText: "Login",
      denyButtonText: "Back Home",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        history.push("/login");
      } else {
        localStorage.clear();
        history.push("/home");
      }
    });
  }

  useEffect(() => {
    if (
      !sessionStorage.getItem("pickup") ||
      !sessionStorage.getItem("dropoff") ||
      !sessionStorage.getItem("city")
    ) {
      history.replace("/home");
    } else {
      fetch(BaseUrl + "client/bikes/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: history.location.state.total }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <>
      <Header />
      <div>
        <div className="paymentHead p-3 d-flex">
          <h3 style={{ textAlign: "left" }}>Pay with Card</h3>
        </div>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm
              total={history.location.state.total}
              paymentConfirmation={paymentConfirmation}
            />
          </Elements>
        )}
        <div className="d-flex paymentHead p-3 mt-3 mb-3">
          <input
            onClick={() => radioHandler()}
            type="radio"
            id="cashOnDelivery"
          />
          <label for="cashOnDelivery">Cash on delievry</label>
        </div>
      </div>

      {payment_status && (
        <div className="checkoutButton p-5">
          <button
            className="btn btn-info p-3"
            onClick={() => confirmOrder(payment_status)}
          >
            Place Order
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}
