import {
  Button,
  Row,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Card,
} from "reactstrap";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./styles.scss";
import { BaseUrl } from "../../BaseUrl";
import Swal from "sweetalert2";
const md5 = require("md5");

export default function AvailableBikes(props) {
  const [bookedBikes, setbookedBikes] = useState([]);
  const [bikes, setbikes] = useState([]);
  const [signinModal, setSigninModal] = useState(false);
  const [helmet, setHelmet] = useState(0);
  const history = useHistory();

  let totalBill = 0;
  let { pickUpDate, dropoff, city } = useParams();

  var difference = Math.floor(
    (Date.parse(dropoff) - Date.parse(pickUpDate)) / 86400000 + 1
  );
  let noOfDays = difference;

  useEffect(() => {
    fetchAvailableBikes();
  }, []);

  async function fetchAvailableBikes() {
    let bike = await fetch(
      BaseUrl +
        `client/bikes/searchbikes?bookedFrom=${pickUpDate}&bookedTill=${dropoff}&city=${city}`
    );
    let availablebikes = await bike.json();
    if (bike.status === 200) {
      setbikes(availablebikes.Bikes);

      if (availablebikes.Bikes.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No bikes in These Dates!",
          footer: '<a href="/home">Go Back Home</a>',
        });
      }
    }
  }

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
    if (!auth && !userId) toggleSigninModal();
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
      console.log(bikeDetail);
      history.push({
        pathname: "/checkout",
        state: { bikeDetail: bikeDetail, subTotal: bill, helmet: helmet },
      });
    }
  };

  const toggleSigninModal = () => {
    setSigninModal(!signinModal);
  };

  const toggleBookOrder = (e) => {
    document.getElementById("detail" + e).style.opacity = "1";
    document.getElementById("detail" + e).style.zIndex = "999";
    document.getElementById(e).style.opacity = "0";
  };
  const toggleOrderDetail = (e) => {
    document.getElementById("detail" + e).style.opacity = "0";
    document.getElementById("detail" + e).style.zIndex = "0";
    document.getElementById(e).style.opacity = "1";
    setHelmet(0);
  };

  const calculateBill = (e) => {
    totalBill = e * noOfDays;
  };

  const finalBill = (e) => {
    if (e.target.value > 2) {
      e.target.value = 0;
    } else {
      let total = 200 * e.target.value;
      setHelmet(total);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="header">
              <h1>Select Your Ride</h1>
            </div>
            <h6 className="review"></h6>
          </div>
        </div>
      </div>
      <div className="allBikes">
        <div className="container p-4">
          <Row className="p-0 ">
            {bikes &&
              bikes.map((bike) => (
                <div className="col-lg-4 col-md-6 mb-3 p-3" key={bike.bike_id}>
                  <Card
                    className="priceCard"
                    id={bike.bike_id}
                    key={bike.bike_id}
                  >
                    <Row>
                      <img
                        src={BaseUrl + `images/${bike.image}`}
                        alt="bikeImg"
                      />
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
                    <button
                      className="btn"
                      onClick={(e) => toggleBookOrder(bike.bike_id)}
                    >
                      Book now <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                  </Card>

                  <div class="overlay " id={"detail" + bike.bike_id}>
                    <div className="selectedDatesOrder p-4" key={bike.bike_id}>
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
                              max={2}
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
          </Row>
        </div>
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
    </>
  );
}
