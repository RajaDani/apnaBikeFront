import { Button, Row, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Col } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './style.css';
import { BaseUrl } from '../../BaseUrl';

export default function AvailableBikes(props) {

    const [signinModal, setSigninModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const location = useLocation();
    const history = useHistory();
    let auth = localStorage.getItem('user');

    const toggleSigninModal = async (e) => {
        if (!auth) setSigninModal(!signinModal);
        else {
            let bike = await fetch(BaseUrl + 'bikes/getbike/' + e + '');
            let bikeDetail = await bike.json();
            history.push({ pathname: '/selectedBike', state: { bikeDetail: bikeDetail } });
        }
    }
    const toggleSignupModal = () => {
        setSignupModal(!signupModal);
    }
    return (
        <>
            <div className="container p-5">
                {console.log(location.state.bikes)}
                <Row className="p-4" >
                    {location.state.bikes.map(bike =>
                        <div className="col-lg-4 col-md-6 mb-5 " key={bike.bike_id}>
                            <div className="individualBike">
                                <div className="bikeImgDiv mb-3">
                                    <img className="bikeImg" src={`./${bike.image}`} alt="" />
                                </div>
                                <div className="rentDetails ">
                                    <h3>{bike.company}</h3>
                                    <p>Model : {bike.model}</p>
                                </div>
                                <Row className="calculatedRent m-1 ">
                                    <Col sm="5">
                                        <div className="fair">
                                            <p>Rs.{bike.Rent.daily_rent}</p>
                                        </div>
                                    </Col>
                                    <Col sm="7">
                                        {bike.status == '0' ? <Button className="bookNowBtn btn-danger" onClick={(e) => toggleSigninModal(bike.bike_id)}>Book Now</Button>
                                            : <Button className="bookNowBtn btn-secondary disabled">Book Now</Button>}

                                    </Col>
                                </Row>
                            </div>
                        </div>
                    )}
                </Row>
            </div>

            <div className="loginSignupModal">
                <Modal isOpen={signinModal} toggle={toggleSigninModal} className="loginModal">
                    <div className="loginHeader">
                        <h2>Signin</h2>
                        <span className="fas fa-times mt-2" onClick={toggleSigninModal}></span>
                    </div>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <label>Email Address </label>
                                <Input type="email" placeholder="apnabike@gmail.com"></Input>
                            </FormGroup>
                            <FormGroup>
                                <label>Password </label>
                                <Input type="password" placeholder="Password.."></Input>
                            </FormGroup>
                            <Button className="btn btn-info">Signin</Button>
                            <div className="loginModalFooter">
                                <h6>OR</h6>
                                <label>Do not have an account? <strong onClick={toggleSignupModal}> Signup </strong></label>
                                <label>Forgot Password ?</label>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={signupModal} toggle={toggleSignupModal} className="loginModal">
                    <div className="loginHeader">
                        <h4 style={{ fontWeight: '700' }}>Signup to ApnaBike</h4>
                        <span className="fas fa-times mt-2" onClick={toggleSignupModal}></span>
                    </div>
                    <ModalBody>
                        <Form>
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

                            <Button className="btn btn-info">Signup</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}
