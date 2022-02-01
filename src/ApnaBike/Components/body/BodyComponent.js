import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Button } from "reactstrap";
import { BaseUrl } from "../../BaseUrl";
import { Redirect, useHistory } from "react-router";
import "./header.css";
import Header from "../header";
import AvailableBikes from "../AvailableBikes";

export default function BodyComponent() {
  const [bookedBikes, setbookedBikes] = useState([]);
  const history = useHistory();

  const searchRide = (e) => {
    e.preventDefault();
    var pickUpDate = document.getElementById("pickUpDate").value;
    var dropOffDate = document.getElementById("dropOffDate").value;
    var city = document.getElementById("citySelect").value;

    fetch(BaseUrl + "client/bikes/searchbikes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookedFrom: pickUpDate,
        bookedTill: dropOffDate,
        city: city,
      }),
    })
      .then((res) => res.json())
      .then((res) => setbookedBikes(res));
  };

  return (
    <div className="bgImage" style={{ backgroundImage: "url(bg.jpg)" }}>
      <Header />
      <div className="container-fluid mt-5 flexContainer">
        <Row>
          <Col sm="12" md="5" lg="12" className="searchRide mb-3">
            <div className="SearchRideHeading ">
              <h1> Search Your Ride </h1>
            </div>
            <div className="SearchRidePara">
              <p>
                {" "}
                Rent from Pakistan's Largest Fleet of Motorcycles, Trusted by
                millions.{" "}
              </p>
            </div>
          </Col>
          <Col md="6" lg="12">
            <div className="selectBox container ">
              <form className="form-inline" onSubmit={(e) => searchRide(e)}>
                <div className="dateTimePicker ">
                  <p className="pickAndDrop">City :</p>
                  <div className="selectDiv">
                    <select className="select" id="citySelect">
                      <option>Chakwal</option>
                      <option>Rawalpindi</option>
                      <option>Islamabad</option>
                      <option>Lahore</option>
                      <option>Karachi</option>
                      <option>Peshawar</option>
                    </select>
                  </div>

                  <p className="pickAndDrop">Pickup :</p>
                  <div>
                    <DatePickerComponent
                      className="calender"
                      id="pickUpDate"
                      placeholder="Date"
                      required
                      min={Date()}
                      max="31-12-2099"
                    ></DatePickerComponent>
                  </div>
                  <p className="pickAndDrop">DropOff :</p>
                  <div>
                    <DatePickerComponent
                      className="calender"
                      id="dropOffDate"
                      placeholder="Date"
                      min={Date()}
                      max="31-12-2099"
                    ></DatePickerComponent>
                  </div>
                  <Button className="searchBtn" type="submit">
                    Find Bike
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>

      {bookedBikes &&
        bookedBikes.length > 0 &&
        history.push({
          pathname: "/availablebikes",
          state: { bikes: bookedBikes },
        })}
    </div>
  );
}
