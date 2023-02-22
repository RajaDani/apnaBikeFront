import React from "react";
import { Button, Card, Col, Row } from "reactstrap";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

export default function SelectedBike() {
  const location = useLocation();
  console.log(location.state.bikeDetail);

  return (
    <div className="container p-5">
      <Row>
        <Col lg="8">
          <Card className="selectedImage p-2">
            <div>
              <img src={process.env.PUBLIC_URL + "/images/bg2.jpg"} />
            </div>
          </Card>
        </Col>

        <Col lg="4">
          <Card className="bookingDetails ">
            <h3>Details</h3>
            <div>
              <h4>Pickup :</h4>
              <p>Monday 17/12/2021</p>
            </div>
            <div>
              <h4>Dropoff :</h4>
              <p>Tuesday 10/01/2021</p>
            </div>

            <div className="rentAndCharges">
              <h4>Rent :</h4>
              <p>Rs.500</p>
            </div>
            <div className="rentAndCharges">
              <h4>Delivery Charges : </h4>
              <p>Rs.100</p>
            </div>
            <div className="rentAndCharges">
              <h4>Total : </h4>
              <p>Rs.600</p>
            </div>

            <button className="btn btn-danger">Confirm Order</button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
