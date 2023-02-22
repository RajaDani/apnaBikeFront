import React from 'react'
import { Col, Row, Input, Form, Button } from 'reactstrap'
import { BaseUrl } from '../../BaseUrl'
import { useHistory, Link } from "react-router-dom";
import './style.css';
const md5 = require('md5')

export default function Signup() {

    const history = useHistory();

    const validation = (e) => {
        let validator = e.target.value;

        if (e.target.id === 'username') {
            if (validator.length > 0 && validator.length < 3) document.getElementById('usernameValidator').innerHTML = 'Name must be greater than 3 characters';
            else if (validator.length > 20) document.getElementById('usernameValidator').innerHTML = 'Name must be less than 20 characters';
            else document.getElementById('usernameValidator').innerHTML = '';
        }
        else if (e.target.id === "email") {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let validate = re.test(validator);
            if (e.target.value !== '' && !validate) document.getElementById('emailValidator').innerHTML = 'Invalid Email Address!';
            else document.getElementById('emailValidator').innerHTML = ''
        }
        else if (e.target.id === 'confirmPassword') {
            let pass1 = document.getElementById('password').value;
            let pass2 = document.getElementById('confirmPassword').value;
            if (pass1 !== pass2) document.getElementById('passwordValidator').innerHTML = 'Passwords not matched';
            else document.getElementById('passwordValidator').innerHTML = '';
        }
        else if (e.target.id === 'cnic') {
            if (validator.length !== 14) document.getElementById('cnicValidator').innerHTML = 'CNIC must be of 14 digits';
            else document.getElementById('cnicValidator').innerHTML = '';
        }
        else if (e.target.id === 'passport') {
            if (validator.length !== 9) document.getElementById('passportValidator').innerHTML = 'Passport must be of 9 digits';
            else document.getElementById('passportValidator').innerHTML = '';
        }
        else if (e.target.id === 'mobile') {
            if (validator.length !== 11) document.getElementById('mobileValidator').innerHTML = 'Mobile must be of 11 digits';
            else document.getElementById('mobileValidator').innerHTML = '';
        }
    }

    async function submitHandler(e) {

        e.preventDefault();
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let cnic = document.getElementById('cnic').value;
        let mobile_no = document.getElementById('mobile_no').value;
        let passport = document.getElementById('passport').value;
        let pass = document.getElementById('password').value;
        let password = md5(pass);

        let newUser = await fetch(BaseUrl + 'client/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: firstname, lastname: lastname, username: username,
                email: email, password: password, cnic: cnic, mobile_no: mobile_no, passport: passport
            })
        });

        let result = await newUser.json();
        if (newUser.status === 200) {
            console.log(result);
            localStorage.setItem('username', result.username);
            localStorage.setItem('token', result.token);
            localStorage.setItem('userId', result.userId);
            history.push("/home");
        }
        else alert(result.message);
    }

    return (
        <div className="container">
            <Row className="formElement">
                <Col md="6">
                    <div>
                        <h2>Signup to Join!</h2>
                    </div>
                    <Row>
                        <Col lg="12">
                            <div className="p-3">
                                <Form onSubmit={(e) => submitHandler(e)}>
                                    <Row>
                                        <Col md="12">
                                            <div className="mb-3">
                                                <input
                                                    id="firstname"
                                                    type="text"
                                                    placeholder="First Name"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <div className="mb-3">
                                                <input
                                                    id="lastname"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>

                                        <Col md="6">
                                            <div className="mb-3">
                                                <input
                                                    id="username"
                                                    type="text"
                                                    placeholder="Username"
                                                    className="form-control"
                                                    required
                                                    onBlur={(e) => validation(e)}
                                                />
                                                <p id="usernameValidator" className="validator"></p>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div className="mb-3">
                                                <input
                                                    id="email"
                                                    type="text"
                                                    placeholder="Email"
                                                    className="form-control"
                                                    required
                                                    onBlur={(e) => validation(e)}
                                                />
                                                <p id="emailValidator" className="validator"></p>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="6">
                                            <div className="mb-3">
                                                <input
                                                    id="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </Col>

                                        <Col md="6">
                                            <div className="mb-3">
                                                <input
                                                    id="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    className="form-control"
                                                    required
                                                    onBlur={(e) => validation(e)}
                                                />
                                                <p id="passwordValidator" className="validator"></p>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg="12">
                                            <div className="mb-3">

                                                <Input
                                                    id="mobile_no"
                                                    type="number"
                                                    placeholder="Mobile no"
                                                    className="form-control"
                                                    required
                                                    onBlur={(e) => validation(e)}
                                                />
                                                <p id="mobileValidator" className="validator"></p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            <div className="mb-3">

                                                <Input
                                                    id="cnic"
                                                    type="number"
                                                    placeholder="CNIC"
                                                    className="form-control"
                                                    required
                                                    onBlur={(e) => validation(e)}
                                                />
                                                <p id="cnicValidator" className="validator"></p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            <div className="mb-3">
                                                <Input
                                                    id="passport"
                                                    name="passport"
                                                    type='number'
                                                    placeholder="Passport"
                                                    className="form-control"
                                                    required
                                                    onBlur={(e) => validation(e)}
                                                />
                                                <p id="passportValidator" className="validator"></p>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="loginFlex">
                                        <Button type='submit' outline className="loginBtn">Signup</Button>
                                    </div>
                                    <div className="loginFlex">
                                        <p>Already have an Account ? <Link to="/login"><strong>Login</strong></Link></p>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row >
                </Col>

                <Col md="6">
                    <img src={process.env.PUBLIC_URL + "/images/loginImg.svg"} alt="login" className="loginImg"></img>
                </Col>
            </Row>
        </div>
    )
}
