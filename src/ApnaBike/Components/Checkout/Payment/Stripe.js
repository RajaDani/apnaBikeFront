import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutStripe";
import "./stripe.scss";
import { BaseUrl } from "../../../BaseUrl";

const stripePromise = loadStripe(
  "pk_test_51KDpJHHUGbX5r7qEMDLSsi6TVFlGxjTg2FbHc84qMnS5NkiLt135oBFAPOFWICVR0cFo2Q0W6pWFveShcxv0UOfb00DKIdd8aZ"
);

export default function Stripe() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(BaseUrl + "client/bikes/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
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
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </>
  );
}
