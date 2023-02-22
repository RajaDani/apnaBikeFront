import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import "./ridewithus.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RideWithus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="container rideWithus mt-2 p-5 "
      data-aos="zoom-out"
      data-aos-once="true"
    >
      <span>
        <img src={process.env.PUBLIC_URL + "/images/howworks.svg"}></img>
      </span>
      <h2 className="headerWork mt-5">
        Flexibility, Agility & <br></br>
        Freedom to go Anywhere, Anytime
      </h2>
      <p>Look at available scooters & Bikes for you</p>

      <Row className="rideSection p-5 mt-3">
        <Col sm="12" lg="6">
          <img src={process.env.PUBLIC_URL + "/images/rideImg.jpg"}></img>
        </Col>
        <Col sm="12" lg="6">
          <h3>Get free Helmets</h3>
          <p>
            Aiusmod tempor incididunt labore loremy enim veniams lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua enim ad minim veniam
            quis.
          </p>
          <br></br>
          <p>
            Nostrud exercita aliquip ex ea consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </Col>
      </Row>
    </div>
  );
}
