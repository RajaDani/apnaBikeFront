import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Modal, ModalBody, Row } from "reactstrap";
import "./checkout.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Stripe from "./Payment/Stripe";
import Example from "./Example";

export default function Checkout(props) {
  const history = useNavigate();
  const location = useLocation()


  const [stripePayment, setstripePayment] = useState(false);
  const [propsParameters, setpropsParameters] = useState({
    subtotal: "",
    helmet: "",
    bike: "",
    total: "",
  });

  console.log('====================================');
  console.log("=location ==>", location);
  console.log('====================================');

  useEffect(() => {
    if (
      !location?.state ||
      !sessionStorage.getItem("pickup") ||
      !sessionStorage.getItem("dropoff") ||
      !sessionStorage.getItem("city")
    ) {
      history("/404");
    } else {
      setpropsParameters({
        ...propsParameters,
        subtotal: location?.state?.subTotal,
        helmet: location?.state?.helmet,
        bike: location?.state?.bikeDetail,
        total:
          parseInt(location?.state?.subTotal) +
          parseInt(location?.state?.helmet),
      });
    }
  }, []);

  const [bikeDetail, setbikeDetail] = useState([
    location?.state?.bikeDetail,
  ]);
  const [mapModal, setmapModal] = useState(false);
  const [delivery, setdelivery] = useState();
  const [viewports, setviewports] = useState({
    width: "",
    height: "",
    latitude: "",
    longitude: "",
    zoom: "",
  });

  async function ProceedToPayment(e) {
    e.preventDefault();
    let auth = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");
    let book_from = sessionStorage.getItem("pickup").trim();
    let book_till = sessionStorage.getItem("dropoff").trim();
    let city = sessionStorage.getItem("city").trim();

    if (auth && userId && book_from && book_till && city) {
      history("/checkout/payment",{
        state: {
          bikeId: bikeDetail[0].bike_id,
          bike: bikeDetail,
          book_from: book_from,
          book_till: book_till,
          userId: userId,
          city: city,
          total: propsParameters.total,
          subtotal: propsParameters.subtotal,
          helmet: propsParameters.helmet,
          delivery: delivery,
          longitude: viewports.longitude,
          latitude: viewports.latitude,
        },
      });
    } else alertModal();
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
        history("/login");
      } else {
        localStorage.clear();
        history("/home");
      }
    });
  }

  function toggleMap() {
    setmapModal(!mapModal);
  }

  function mapModalChecker(value, viewport) {
    toggleMap();
    setviewports(viewport);
    let deliveryMethod = "Drop at location";
    setdelivery(deliveryMethod);
  }

  function radioHandler(e) {
    let deliveryMethod = e.target.value;
    setdelivery(deliveryMethod);
  }

  return (
    <>
      {stripePayment === true ? (
        <Stripe />
      ) : (
        <div className="container billInfoCheckout pl-1 mb-5 pb-5">
          <Row className="checkoutRow">
            <Col md="8">
              <h3 style={{ textAlign: "left" }}>BILLING DETAILS</h3>

              <Form
                onSubmit={(e) => ProceedToPayment(e)}
                style={{ padding: "10px" }}
              >
                <FormGroup>
                  <label>First Name</label>
                  <br />
                  <input
                    className="form-control"
                    placeholder="John"
                    required
                  ></input>
                </FormGroup>
                <FormGroup>
                  <label>Last Name</label>
                  <br />
                  <input
                    className="form-control"
                    placeholder="Doe"
                    required
                  ></input>
                </FormGroup>

                <FormGroup>
                  <label>Address</label>
                  <input
                    className="form-control"
                    placeholder="Address,street,block"
                    required
                  ></input>
                </FormGroup>
                <FormGroup>
                  <label>Email Address</label>
                  <input className="form-control" required></input>
                </FormGroup>

                <FormGroup>
                  <label>Phone No</label>
                  <input className="form-control mb-5" required></input>
                </FormGroup>

                <h4>ADDITIONAL INFORMATION</h4>
                <p>Order notes (optional)</p>
                <input
                  className="form-control"
                  placeholder="Note abut your order, e.g. special notes for delivery"
                ></input>
                <button type="submit" style={{ width: "35%" }} className="btn">
                  Proceed To Payment
                </button>
              </Form>
            </Col>

            {history?.location?.state &&
              bikeDetail.map((b) => (
                <Col md="4" className="infoSummary p-3">
                  <h5>Order Summary</h5>
                  <h4>Your Order</h4>
                  <div>
                    <p>Product</p>
                    <p>Subtotal</p>
                  </div>
                  <div
                    className="description"
                    style={{ justifyContent: "space-between !important" }}
                  >
                    <div className="productDetails">
                      <p>Name : {b.company}</p>
                      <p>Start Date : {sessionStorage.getItem("pickup")}</p>
                      <p>End Date : {sessionStorage.getItem("dropoff")}</p>
                      <p>Days : 2</p>
                      <p>City : {sessionStorage.getItem("city")}</p>
                    </div>
                    <div style={{ marginRight: "-10px" }}>
                      <strong>Rs.{propsParameters.subtotal}</strong>
                    </div>
                  </div>
                  <div>
                    <h6>Helmets</h6>
                    <strong>Rs.{propsParameters.helmet}</strong>
                  </div>

                  <div>
                    <h6>TOTAL</h6>
                    <strong>Rs.{propsParameters.total}</strong>
                  </div>

                  <h4 className="ml-1 mt-3 mb-1">CHOOSE DELIVERY</h4>

                  <form id="deliveryForm" name="deliveryForm">
                    <div className="paymentMethod">
                      <input
                        type="radio"
                        value="Self Pickup"
                        id="selfPickup"
                        name="deliveryMethod"
                        onClick={(e) => radioHandler(e)}
                        required
                      />
                      <label for="selfPickup">Pickup by your own</label>
                      <br />
                    </div>
                    <div className="paymentMethod">
                      <input
                        type="radio"
                        id="deliveryMethod"
                        value="Drop At Location"
                        onChange={() => toggleMap()}
                        name="deliveryMethod"
                      />
                      <label for="deliveryMethod">Drop at my location</label>
                    </div>
                  </form>
                </Col>
              ))}
          </Row>

          {/* <Modal isOpen={mapModal} toggle={() => toggleMap()}>
            <Example mapModalChecker={mapModalChecker} />
          </Modal> */}
        </div>
      )}
    </>
  );
}
