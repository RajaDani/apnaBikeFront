import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { BaseUrl } from "../../BaseUrl";
import { Col, Row, Button, Form } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";
const md5 = require("md5");

export default function Login() {
  const [authenticate, setauthenticate] = useState({});

  const history = useNavigate();

  const handleSubmit = async (e) => {
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
      history("/home");
    } else {
      document.getElementById("errorMsg").innerHTML =
        "Username or password is incorrect!";
    }
  };

  return (
    <div className="container">
      <Row id="loginFlex">
        <Col md="8">
          <img
            src={process.env.PUBLIC_URL + "/images/loginImg.png"}
            alt="login"
            className="loginImg mt-4"
          ></img>
        </Col>
        <Col md="4">
          <div>
            <h1>
              <strong>Login</strong>
            </h1>
          </div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                className="form-control"
                type="text"
                id="email"
                placeholder="Email Address.."
              ></input>
            </div>
            <div>
              <input
                className="form-control mt-4"
                type="password"
                id="password"
                placeholder="Password.."
              ></input>
            </div>
            <p id="errorMsg"></p>
            <div className="checkBox mt-4">
              <p>
                <input type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password ?</p>
            </div>
            <div className="loginFlex">
              <Button type="submit" outline className="loginBtn">
                Login
              </Button>
            </div>
          </Form>
          <div className="loginFlex">
            <p>
              Don't have an Account ?{" "}
              <Link to="/signup">
                <strong>Register</strong>
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
