import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { BaseUrl } from '../../BaseUrl';
import { Col, Row, Button, Form } from 'reactstrap'
import { useHistory } from "react-router-dom";
import './index.css';

export default function Login() {

    const [authenticate, setauthenticate] = useState([]);

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let user = fetch(BaseUrl + 'users/getuser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(res => res.json())
            .then(res => setauthenticate(res));

        if (authenticate != '') history.push("/home");
        else document.getElementById('errorMsg').innerHTML = 'Username or password is incorrect!';
    }


    return (
        <div className="container" >
            <Row id="loginFlex">
                <Col md="8" >
                    <img src="/loginImg.png" alt="login" className="loginImg mt-4"></img>
                </Col>
                <Col md="4">
                    <div>
                        <h1><strong>Login</strong></h1>
                    </div>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <input className="form-control" type="text" id="email" placeholder="Email Address.."></input>
                        </div>
                        <div >
                            <input className="form-control mt-4" type="password" id="password" placeholder="Password.."></input>
                        </div>
                        <p id="errorMsg"></p>
                        <div className="checkBox mt-4">
                            <p><input type="checkbox" /> Remember Me</p>
                            <p>Forgot Password ?</p>
                        </div>
                        <div className="loginFlex">
                            <Button type="submit" outline className="loginBtn">Login</Button>
                        </div>
                    </Form>
                    <div className="loginFlex">
                        <p>Don't have an Account ? <Link to="/signup"><strong>Register</strong></Link></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
