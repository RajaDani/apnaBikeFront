import React, { useEffect, useState } from "react";
import "./pricing.scss";
import { BaseUrl } from "../../BaseUrl";
import { useHistory, Link } from "react-router-dom";
import {
  Modal,
  Row,
  Col,
  Card,
  FormGroup,
  Input,
  Button,
  ModalBody,
  Form,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Checkbox } from "@material-ui/core";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import DateTimePicker from "../MiddlePart/dateTimePicker";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const md5 = require("md5");

function Pricing() {
  const [bikes, setBikes] = useState([]);
  const [signinModal, setSigninModal] = useState(false);
  const [helmet, setHelmet] = useState(0);

  let noOfDays = Math.floor(
    (Date.parse(sessionStorage.getItem("dropoff")) -
      Date.parse(sessionStorage.getItem("pickup"))) /
      86400000 +
      1
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  let history = useHistory();
  let totalBill;

  async function handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let password = md5(pass);
    let userDetail = await fetch(BaseUrl + "client/users/getuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    let result = await userDetail.json();

    if (userDetail.status === 200) {
      console.log(result);
      localStorage.setItem("username", result.username);
      localStorage.setItem("token", result.token);
      localStorage.setItem("userId", result.userId);
      toggleSigninModal();
    } else {
      alert("Error");
      document.getElementById("errorMsg").innerHTML =
        "Username or password is incorrect!";
    }
  }

  const verifyUser = (bikeId, e) => {
    let auth = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");
    let bill = e.target.value;
    if (!auth || !userId) toggleSigninModal();
    else verifyUserToken(bikeId, bill, auth);
  };

  const verifyUserToken = async (bikeId, bill, auth) => {
    let bike = await fetch(BaseUrl + "client/bikes/getbike/" + bikeId + "", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${auth}`,
      },
    });
    if (bike.status === 200) {
      let bikeDetail = await bike.json();
      console.log("bill is =>", bill);
      history.push({
        pathname: "/checkout",
        state: { bikeDetail: bikeDetail, subTotal: bill, helmet: helmet },
      });
    }
  };

  const toggleSigninModal = () => {
    setSigninModal(!signinModal);
  };

  const getBikes = () => {
    fetch(BaseUrl + "client/bikes")
      .then((res) => res.json())
      .then((res) => setBikes(res));
  };

  const toggleBookOrder = (e) => {
    if (
      !sessionStorage.getItem("pickup") ||
      !sessionStorage.getItem("dropoff") ||
      !sessionStorage.getItem("city") === null
    ) {
      $(document).ready(function () {
        $("html").animate({ scrollTop: 0 }, 1000);
      });
    } else {
      document.getElementById("detail" + e).style.opacity = "1";
      document.getElementById("detail" + e).style.zIndex = "999";
      document.getElementById(e).style.opacity = "0";
    }
  };

  const toggleOrderDetail = (e) => {
    document.getElementById("detail" + e).style.opacity = "0";
    document.getElementById("detail" + e).style.zIndex = "0";
    document.getElementById(e).style.opacity = "1";
  };

  const calculateBill = (e) => {
    totalBill = e * noOfDays;
  };

  const finalBill = (e) => {
    let total = 200 * e.target.value;
    setHelmet(total);
  };

  const renderBikes = () => {
    return (
      <div className="row pricingComponent">
        {bikes.map((bike) => (
          <div className="col-lg-4 col-md-6 mb-3 p-3">
            <Card className="priceCard" id={bike.bike_id} key={bike.bike_id}>
              <Row>
                <img src={BaseUrl + `images/${bike.image}`} alt="bikeImg" />
              </Row>
              <p>Model {bike.model}</p>
              <h4>{bike.company}</h4>
              <div>
                <h6></h6>
              </div>

              <div>
                <i className="fas fa-gem"></i>
                <p>Maximum comfort for urban mobility</p>
              </div>

              <div>
                <i className="fas fa-users"></i>
                <p>Ideal for group tours and long journeys</p>
              </div>
              <div>
                <i className="fas fa-shield-alt"></i>
                <p>Includes a security chain</p>
              </div>
              <div>
                <i class="fas fa-sun"></i>
                <p>Powerful Brushless HUB 1000W engine</p>
              </div>
              <div className="rentRow">
                <strong>Rent from </strong>
                <h5>Rs.{bike.Rent.daily_rent} / Day</h5>
              </div>
              {bike.status === 1 ? (
                <button className="btn disabled">
                  Book now <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={(e) => toggleBookOrder(bike.bike_id)}
                >
                  Book now <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              )}
            </Card>

            <div class="overlay " id={"detail" + bike.bike_id}>
              <div className="selectedDatesOrder p-4">
                {calculateBill(bike.Rent.daily_rent)}
                <span
                  className="fas fa-times ml-auto mt-2 pb-3 cancelBtn "
                  onClick={(e) => toggleOrderDetail(bike.bike_id)}
                ></span>
                <h5>Selected Dates :</h5>
                <p>
                  {sessionStorage.getItem("pickup")} --{" "}
                  {sessionStorage.getItem("dropoff")}
                </p>
                <div className="locationDropoff">
                  <p>Pick up : {sessionStorage.getItem("city")}</p>
                  <span className="fas fa-map-marker-alt"></span>
                </div>
                <div className="locationDropoff">
                  <p>Drop off : {sessionStorage.getItem("city")} </p>
                  <span className="fas fa-map-marker-alt"></span>
                </div>

                <div className="dateAndPrice">
                  <div className="datesAvailable">
                    {" "}
                    <i className="fas fa-check-double"></i>
                    <p>Dates are Available</p>
                  </div>

                  <div>
                    <strong>Rental Price </strong>
                    <p>{totalBill}</p>
                  </div>

                  <h5>Extra Options :</h5>
                  <div>
                    <div className="helmet">
                      <input
                        type="number"
                        placeholder="0"
                        min="0"
                        max="5"
                        className="form-control"
                        onChange={(e) => finalBill(e)}
                      />{" "}
                      <strong>Helmet</strong>
                    </div>
                    <p>{helmet}</p>
                  </div>

                  <h6></h6>
                  <div>
                    <h4>Total</h4>
                    <p>{totalBill + helmet}</p>
                  </div>

                  <button
                    className="mt-3"
                    value={totalBill}
                    onClick={(e) => verifyUser(bike.bike_id, e)}
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  useEffect(() => {
    getBikes();
  }, []);

  return (
    <div className="body" data-aos="zoom-out" data-aos-once="true">
      <div
        className="pricingJumbo"
        style={{ backgroundImage: "url(bikefleet.jpg)" }}
      >
        <img src="middle2.png" alt="icon"></img>
        <div className="flexItems">
          <h1>OUR PRICES</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link className="link" to="/home">
                HOME
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              PRICING
            </li>
          </ol>
        </div>
      </div>

      <DateTimePicker />
      <div className="container mt-5">
        {function () {
          while (bikes.length < 1) {
            <Loader
              className="loader"
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              // timeout={3000} //3 secs
            />;
          }
        }}
        <div className="row">
          <div className="col-12 ">
            <div className="header">
              <h3>WE OFFER THE BEST PRICES IN PAKISTAN</h3>
            </div>
            <h6 className="review"></h6>
          </div>
        </div>
        <div className="allBikes mt-5">{renderBikes()}</div>
      </div>

      <div className="loginSignupModal">
        <Modal
          isOpen={signinModal}
          toggle={toggleSigninModal}
          className="loginModal p-2"
        >
          <span
            className="fas fa-times mt-2 "
            onClick={toggleSigninModal}
          ></span>
          <div className="loginHeader">
            <i className="fas fa-user fa-2x"></i>
          </div>
          <h2>Sign In</h2>
          <ModalBody>
            <form onSubmit={(e) => handleSubmit(e)} className="pl-4 pr-4 mt-1">
              <FormGroup>
                <Input
                  id="email"
                  type="email"
                  placeholder="Apnabike@gmail.com"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password.."
                ></Input>
              </FormGroup>
              <Button type="submit" className="btn btn-info">
                Login
              </Button>
              <div className="signInFlex">
                <p>Forgot Password ?</p>
              </div>
            </form>
            <div className="signinFooter mt-5">
              Not a Member?{" "}
              <Link to="/signup">
                <strong> Create an Account </strong>
              </Link>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}

export default Pricing;
