import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import "./middle.scss";
import { BaseUrl } from "../../BaseUrl";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function DateTimePicker() {
  const [city, setcity] = useState([]);
  const history = useHistory();
  var difference;
  let date = new Date();
  const minDate =
    date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate();

  const getCities = async () => {
    let cities = await fetch(BaseUrl + "client/city/getcities");
    if (cities.status === 200) {
      let city = await cities.json();
      setcity(city);
    }
  };

  const searchRide = async (e) => {
    e.preventDefault();

    var pickUpDate = document.getElementById("pickUpDate").value;
    var dropoff = document.getElementById("dropOffDate").value;
    var city = document.getElementById("citySelect").value;

    var difference = Math.floor(
      (Date.parse(dropoff) - Date.parse(pickUpDate)) / 86400000 + 1
    );

    if (difference <= 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Dates are not correct",
      });
    } else {
      sessionStorage.setItem("pickup", pickUpDate);
      sessionStorage.setItem("dropoff", dropoff);
      sessionStorage.setItem("city", city);

      history.push(
        `/availablebikes/pickUpDate=${pickUpDate}/dropoff=${dropoff}/city=${city}`
      );
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="container">
      <Row>
        <Col sm="12">
          <div className="getDateTime mb-3">
            <h1>Quick Search</h1>
            <form className="form-inline " onSubmit={(e) => searchRide(e)}>
              <div className="dateTimeBlock">
                <p className="pickAndDropElement">City </p>
                <div className="citySelect mr-3">
                  <select id="citySelect" required>
                    <option>Select</option>
                    {city.map((e) => (
                      <>
                        <option>{e.city_name}</option>
                      </>
                    ))}
                  </select>
                </div>

                <p className="pickAndDropElement">Pickup </p>
                <div>
                  <input
                    className="calenderPick"
                    type="date"
                    id="pickUpDate"
                    placeholder="Date"
                    min={minDate}
                    max="2099-11-15"
                    required
                  ></input>
                </div>
                <p className="pickAndDropElement">DropOff </p>
                <div>
                  <input
                    className="calenderPick"
                    type="date"
                    id="dropOffDate"
                    placeholder="Date"
                    min={minDate}
                    max="31-12-2099"
                    required
                  ></input>
                </div>
                <Button className="searchBikeBtn" type="submit">
                  Find Bike
                </Button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
