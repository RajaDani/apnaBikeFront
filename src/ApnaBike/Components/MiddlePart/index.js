import React from "react";
import { Col, Row } from "reactstrap";
import "./middle.scss";
import $ from "jquery";
import DateTimePicker from "./dateTimePicker";

export default function MiddlePart() {
  $(document).ready(function () {
    $(".findBikeBtn").click(function () {
      $("html").animate({ scrollTop: 400 }, 500);
    });
  });

  return (
    <>
      <div
        className="bodyBackground"
        style={{ backgroundImage: "url(bgibike.jpg)", overflow: "hidden" }}
      >
        <Row>
          <Col
            md="7"
            lg="6"
            style={{ overflow: "hidden !important", height: "100%" }}
          >
            <img src="middle.png" alt="icon"></img>
            <div className="top-left">
              <h1>
                Your Bike <br /> When You Need <br /> it Most
              </h1>
              <button className="btn findBikeBtn">
                <i className="fas fa-biking mr-3" outline></i>Find a Bike
              </button>
              <div className="centered">
                <img className="rentImg" src="rate.png"></img>
                <p>As Low as </p> <br /> <h3> Rs.500/Day</h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container dateSelector">
        <DateTimePicker />
      </div>
    </>
  );
}
