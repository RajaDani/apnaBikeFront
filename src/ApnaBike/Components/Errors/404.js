import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, Button } from "reactstrap";
import "./error.scss";

export default function Error404() {
  return (
    <Row className="mt-5 ml-5">
      <Col md="4">
        <Card className="errorCard ml-5 mt-5">
          <div>
            <img src={process.env.PUBLIC_URL + "/images/logo.png"}></img>
          </div>
          <h4>Error 404</h4>
          <p>Page not found</p>
          <div>
            <Link to="/">
              <button className="btn mb-5">Back To HomePage</button>
            </Link>
          </div>
        </Card>
      </Col>
      <Col md="8">
        <img src={process.env.PUBLIC_URL + "/images/404.svg"} alt="404"></img>
      </Col>
    </Row>
  );
}
