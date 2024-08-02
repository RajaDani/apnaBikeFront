import React, { useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="container p-1 mt-5 mb-5"
      data-aos="fade-up-left"
      data-aos-once="true"
    >
      <span>
        <img src={process.env.PUBLIC_URL + "/images/howworks.svg"}></img>
      </span>
      <h2 className="headerWork mt-3">It’s Really Easier To Rent</h2>
      <p className="headerPara">
        The leading booking platform for bike rentals
      </p>

      <Row className=" mt-5 pt-3 mb-5">
        <Col lg="4">
          <img
            className="boyImg mb-5"
            src={process.env.PUBLIC_URL + "/images/boy.png"}
          ></img>
        </Col>
        <Col lg="8">
          <Row>
            <Col md="4">
              <div className="howItWork">
                <div className="howWorkIcon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/how-it-works-1.svg"}
                    className="howImg"
                    alt="howItWorks"
                  ></img>
                  <p>1</p>
                </div>
              </div>
              <div className="details">
                <h4>Find the perfect bike(s) for you</h4>
                <p>
                  Compare bike rental locations, prices, bike types. No waste of
                  time on the internet, everything is in one place!
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="howItWork">
                <div className="howWorkIcon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/how-it-works-2.svg"}
                    className="howImg"
                    alt="howItWorks"
                  ></img>
                  <p>2</p>
                </div>
              </div>
              <div className="details">
                <h4>Book directly online</h4>
                <p>
                  No waste of time during your holidays to find a rental point
                  on the spot! No language barrier, thanks to our multilingual
                  team! At the same price you would pay on the spot!
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="howItWork">
                <div className="howWorkIcon">
                  <img
                    src={process.env.PUBLIC_URL + "/images/how-it-works-3.svg"}
                    className="howImg"
                    alt="howItWorks"
                  ></img>
                  <p>3</p>
                </div>
              </div>
              <div className="details">
                <h4>The bike will be waiting for you!</h4>
                <p>
                  You will be able to fully enjoy your holiday and your ride!
                  Any problems? Our passionate team will be happy to help you!
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <div className="btnDiv mt-4">
                <Link to="/pricing">
                  {" "}
                  <button className="btn rentYourBikeBtn">
                    {" "}
                    Rent Your Bike{" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
