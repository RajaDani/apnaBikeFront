import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../BaseUrl'
import { useHistory } from "react-router-dom";
import './style.css';
const md5 = require('md5')

export default function Signup() {

    const history = useHistory();

    const validation = (e) => {
        let validator = e.target.value;

        if (e.target.id === 'username') {
            if (validator.length > 0 && validator.length < 3) document.getElementById('usernameValidator').innerHTML = 'Username must be greater than 3 characters';
            else if (validator.length > 20) document.getElementById('usernameValidator').innerHTML = 'Username must be less than 20 characters';
            else document.getElementById('usernameValidator').innerHTML = '';
        }
        else if (e.target.id === "email") {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let validate = re.test(validator);
            if (e.target.value !== '' && !validate) document.getElementById('emailValidator').innerHTML = 'Invalid Email Address!';
            else document.getElementById('emailValidator').innerHTML = ''
        }
        else if (e.target.id === 'password') {
            if (validator.length > 0 && validator.length < 6) document.getElementById('passwordValidator').innerHTML = 'Password must be greater than 6 characters';
            else document.getElementById('passwordValidator').innerHTML = '';
            localStorage.setItem('password', validator);
        }
    }

    const confirmPassword = (e) => {
        let confirm = e.target.value;
        let value = localStorage.getItem('password');

        if (confirm !== value) document.getElementById('confirmValidator').innerHTML = 'Password does not matched!';
        else {
            document.getElementById('confirmValidator').innerHTML = '';
            localStorage.clear();
        };

    }


    const createNewUser = () => {

        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let pass = document.getElementById('password').value;
        let password = md5(pass);

        fetch(BaseUrl + 'users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, email: email, password: password })
        });

        history.push("/home");

    }

    return (
        <div className="container">
            <Row className="formElement">
                <Col md="8">
                    <img src="/loginImg.svg" alt="login" className="loginImg"></img>
                </Col>
                <Col md="4">
                    <div>
                        <h2>Signup to Join!</h2>
                    </div>
                    <div>
                        <input id="username" className="form-control" type="text" placeholder="Username.." onBlur={(e) => validation(e)} autoFocus required></input>
                        <p id="usernameValidator" className="validator"></p>
                    </div>
                    <div >
                        <input id="email" className="form-control mt-4" type="text" placeholder="Email Address.." onBlur={(e) => validation(e)} required></input>
                        <p id="emailValidator" className="validator"></p>
                    </div>
                    <div >
                        <input id="password" className="form-control mt-4" type="password" placeholder="Password.." onBlur={(e) => validation(e)} required></input>
                        <p id="passwordValidator" className="validator"></p>
                    </div>
                    <div >
                        <input className="form-control mt-4" type="password" placeholder="Confirm Password.." onBlur={(e) => confirmPassword(e)} required></input>
                        <p id="confirmValidator" className="validator"></p>
                    </div>

                    <div className="loginFlex mt-5">
                        <Button outline className="loginBtn" onClick={createNewUser}>Signup</Button>
                    </div>
                    <div className="loginFlex">
                        <p>Already have an Account ? <Link to="/login"><strong>Login</strong></Link></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
