import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Input, Row, Col } from "reactstrap";

export default function CheckoutForm({ paymentConfirmation, total }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const error = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/checkout/payment",
      },
      redirect: "if_required",
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else if (error.paymentIntent) {
      paymentConfirmation(true);
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsLoading(false);
  };

  return (
    <Row className="ml-5 paymentBox p-5">
      <Col md="5" className="paymentImg">
        <div className="d-flex">
          <i className="fas fa-arrow-left p-1 mr-1"></i>
          <p>Back</p>
        </div>
        <div className="paymentHeader">
          <h1>ApnaBike</h1>
          <h4>Rs.{total}</h4>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/new.png"}
          className="paymentCardImg mt-5 ml-5 "
        ></img>
      </Col>
      <Col md="1" sm="0" className="marginCol">
        <div className="marginLine"></div>
      </Col>
      <Col md="5" className="paymentCardForm ">
        <form id="payment-form" onSubmit={handleSubmit}>
          <h4>Pay with card</h4>
          <label>Email</label>
          <Input placeholder="Email.." type="email" className="mb-3" required />
          <PaymentElement id="payment-element" />
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className="paymentBtn"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      </Col>
    </Row>
  );
}
