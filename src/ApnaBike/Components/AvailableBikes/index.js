import { Button, Row, Modal, ModalBody, Form, FormGroup, Input, Card } from 'reactstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import { BaseUrl } from '../../BaseUrl';
import { Checkbox } from '@material-ui/core';

export default function AvailableBikes(props) {

    const [signinModal, setSigninModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const [helmet, setHelmet] = useState(0);
    const history = useHistory();

    let noOfDays = history.location.state.totalDays;
    let totalBill = 0;

    let auth = localStorage.getItem('token');

    const verifyUser = async (bikeId, e) => {
        if (!auth) toggleSigninModal();
        else {
            let bike = await fetch(BaseUrl + 'bikes/getbike/' + bikeId + '');
            let bikeDetail = await bike.json();
            let bill = e.target.value;
            history.push({ pathname: '/checkout', state: { bikeDetail: bikeDetail, subTotal: bill, helmet: helmet } });
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

    const toggleBookOrder = (e) => {
        document.getElementById('detail' + e).style.opacity = '1';
        document.getElementById('detail' + e).style.zIndex = '999';
        document.getElementById(e).style.opacity = '0';
    }
    const toggleOrderDetail = (e) => {
        document.getElementById('detail' + e).style.opacity = '0';
        document.getElementById('detail' + e).style.zIndex = '0';
        document.getElementById(e).style.opacity = '1';
        setHelmet(0);
    }

    const calculateBill = (e) => {
        console.log('totalbill before ==> ', totalBill);
        totalBill = e * noOfDays;
        console.log('totalbill after ==> ', totalBill);
    }

    const finalBill = (e) => {
        let total = 200 * e.target.value;
        setHelmet(total);
    }


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
                    <Row className="p-0 mt-5" >
                        {history.location.state.bikes.map(bike =>
                            <div className="col-lg-4 col-md-6 mb-3 p-3" key={bike.bike_id}>
                                <Card className="priceCard" id={bike.bike_id} key={bike.bike_id}>
                                    <Row>
                                        <img src={`./${bike.image}`} alt="bikeImg" />
                                    </Row>
                                    <p>Model {bike.model}</p>
                                    <h4>{bike.company}</h4>
                                    <div>
                                        <h6></h6>
                                    </div>

                                    <div>
                                        <i className='fas fa-gem'></i>
                                        <p>Maximum comfort for urban mobility</p>
                                    </div>

                                    <div>
                                        <i className='fas fa-users'></i>
                                        <p>Ideal for group tours and long journeys</p>
                                    </div>
                                    <div>
                                        <i className='fas fa-shield-alt'></i>
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

                                    <button className="btn" onClick={(e) => toggleBookOrder(bike.bike_id)}>Book now <i className="fas fa-long-arrow-alt-right"></i></button>
                                </Card>

                                <div class="overlay " id={'detail' + bike.bike_id} >
                                    <div className="selectedDatesOrder p-4" key={bike.bike_id} >
                                        {calculateBill(bike.Rent.daily_rent)}

                                        <span className="fas fa-times ml-auto mt-2 pb-3 cancelBtn " onClick={(e) => toggleOrderDetail(bike.bike_id)}></span>
                                        <h5>Selected Dates :</h5>
                                        <p>{sessionStorage.getItem('pickup')} -- {sessionStorage.getItem('dropoff')}</p>
                                        <div className="locationDropoff"><p>Pick up : {sessionStorage.getItem('city')}</p><span className="fas fa-map-marker-alt"></span></div>
                                        <div className="locationDropoff"><p>Drop off : {sessionStorage.getItem('city')} </p><span className="fas fa-map-marker-alt"></span></div>

                                        <div className="dateAndPrice">
                                            <div className="datesAvailable"> <i className="fas fa-check-double"></i><p>Dates are Available</p></div>

                                            <div>
                                                <strong>Rental Price </strong>
                                                <p>{totalBill}</p>
                                            </div>

                                            <h5>Extra Options :</h5>
                                            <div >
                                                <div className="helmet" ><input type="number" placeholder="0" min="0" max="5" className="form-control" onChange={(e) => finalBill(e)} /> <strong>Helmet</strong></div>
                                                <p>{helmet}</p>
                                            </div>

                                            <h6></h6>
                                            <div>
                                                <h4>Total</h4>
                                                <p>{totalBill + helmet}</p>
                                            </div>
                                            <button className="mt-3" value={totalBill} onClick={(e) => verifyUser(bike.bike_id, e)}>Book now</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Row>
                </div>
            </div>


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
        </>
    )
}




