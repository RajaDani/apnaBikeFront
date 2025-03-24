import { Button, Row, Modal, ModalBody, Form, FormGroup, Input, Card } from 'reactstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { BaseUrl } from '../../BaseUrl';
import { Checkbox } from '@mui/material';

export default function ModalExample(props) {

    const [signinModal, setSigninModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const history = useNavigate();
    let auth = localStorage.getItem('username');

    alert(props.bik);

    const verifyUser = async ({ bik }) => {
        if (!auth) toggleSigninModal();
        else {
            let bike = await fetch(BaseUrl + 'bikes/getbike/' + bik + '');
            let bikeDetail = await bike.json();
            history({ pathname: '/checkout', state: { bikeDetail: bikeDetail } });
        }
    }

    const toggleSigninModal = () => {
        setSigninModal(!signinModal);
    }
    const toggleSignupModal = () => {
        if (signinModal === true) {
            toggleSigninModal()
            setSignupModal(!signupModal);
        }
        else {
            setSignupModal(!signupModal);
        }
    }

    return (
        <div className="loginSignupModal">
            <Modal isOpen={signinModal} toggle={toggleSigninModal} className="loginModal p-2">
                <span className="fas fa-times mt-2 " onClick={toggleSigninModal}></span>
                <div className="loginHeader">
                    <i className="fas fa-user fa-2x"></i>
                </div>
                <h2>Sign In</h2>
                <ModalBody >
                    <Form className="pl-4 pr-4 mt-1">
                        <FormGroup>
                            <Input type="email" placeholder="Apnabike@gmail.com"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" placeholder="Password.."></Input>
                        </FormGroup>
                        <Button className="btn btn-info">Login</Button>
                        <div className="signInFlex">
                            <Checkbox></Checkbox><p className="rememberMe">Remember Me</p>
                            <p>Forgot Password ?</p>
                        </div>
                    </Form>
                    <div className="signinFooter mt-5">Not a Member? <strong onClick={() => toggleSignupModal()}> Create an Account </strong></div>
                </ModalBody>
            </Modal>

            <Modal isOpen={signupModal} toggle={toggleSignupModal} className="loginModal">
                <span className="fas fa-times mt-1 " onClick={toggleSignupModal}></span>
                <div className="loginHeader">
                    <i className="fas fa-user fa-2x"></i>
                </div>
                <h2>Sign up</h2>
                <ModalBody>
                    <Form className="pl-4 pr-4 mt-1 ">
                        <FormGroup className="signupFormElement">
                            <Input type="text" placeholder="Username.."></Input>
                        </FormGroup>
                        <FormGroup className="signupFormElement">
                            <Input type="email" placeholder="Email: apnabike@gmail.com"></Input>
                        </FormGroup>
                        <FormGroup className="signupFormElement">
                            <Input type="numbers" placeholder="CNIC : 37201-1021442-9"></Input>
                        </FormGroup>
                        <FormGroup className="signupFormElement">
                            <Input type="email" placeholder="Passport.."></Input>
                        </FormGroup>

                        <FormGroup className="signupFormElement">
                            <Input type="email" placeholder="Create Password.."></Input>
                        </FormGroup>
                        <FormGroup className="signupFormElement">
                            <Input type="email" placeholder="Confirm Password.."></Input>
                        </FormGroup>

                        <Button className="btn btn-info mt-3">Signup</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
