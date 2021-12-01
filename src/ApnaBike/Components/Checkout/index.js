import React from 'react'
import { Col, Form, FormGroup, Row } from 'reactstrap'
import './checkout.scss'
import { useHistory } from 'react-router-dom';
import { BaseUrl } from '../../BaseUrl';

export default function Checkout(props) {

    const history = useHistory();

    let subTotal = history.location.state.subTotal;
    let helmet = history.location.state.helmet;
    let bike = history.location.state.bikeDetail;
    let total = parseInt(subTotal) + parseInt(helmet);
    let userId = history.location.state.userId;

    async function confirmOrder() {

        let orderPlaced = await fetch(BaseUrl + `bikes/bookBike?bikeid=${bike[0].bike_id}
        &pickup=${sessionStorage.getItem('pickup').trim()}&dropoff=${sessionStorage.getItem('dropoff')}
        &userId=${userId}&city=${sessionStorage.getItem('city')}`);

        let order = await orderPlaced.json();
        let orderNo = order.booked_bikes_id;
        if (orderPlaced.status === 200) history.push({ pathname: '/summary', state: { userId: userId, bike: bike, subTotal: subTotal, helmet: helmet, orderDetail: orderNo } })
        else alert(orderPlaced.status);
    }


    return (
        <div className="container billInfoCheckout pl-t mt-5 mb-5 pb-5">
            <h4>BILLING DETAILS</h4>

            <Row className="mt-3">
                <Col md="8">
                    <Form>
                        <FormGroup>
                            <label>First Name</label><br />
                            <input className="form-control" placeholder="John" required></input>
                        </FormGroup>
                        <FormGroup>
                            <label>Last Name</label><br />
                            <input className="form-control" placeholder="Doe" required></input>
                        </FormGroup>

                        <FormGroup>
                            <label>Address</label>
                            <input className="form-control" placeholder="Address,street,block" required></input>
                        </FormGroup>
                        <FormGroup>
                            <label>Email Address</label>
                            <input className="form-control" value={history.location.state.userEmail} required></input>
                        </FormGroup>
                        <FormGroup>
                            <label>City</label>
                            <input className="form-control" required></input>
                        </FormGroup>
                        <FormGroup>
                            <label>Phone No</label>
                            <input className="form-control mb-5" required></input>
                        </FormGroup>
                    </Form>

                    <h4>ADDITIONAL INFORMATION</h4>
                    <p>Order notes (optional)</p>
                    <input className="form-control" placeholder="Note abut your order, e.g. special notes for delivery"></input>
                </Col>

                {history.location.state.bikeDetail.map(bike =>

                    <Col md="4" className="infoSummary p-3">
                        <h5>Order Summary</h5>
                        <h4>Your Order</h4>
                        <div>
                            <p>Product</p>
                            <p>Subtotal</p>
                        </div>
                        <div className="description" style={{ justifyContent: "space-between !important" }}>
                            <div className="productDetails">
                                <p>Name : {bike.company}</p>
                                <p>Start Date : {sessionStorage.getItem('pickup')}</p>
                                <p>End Date : {sessionStorage.getItem('dropoff')}</p>
                                <p>Days : 2</p>
                                <p>City : {sessionStorage.getItem('city')}</p>
                            </div>
                            <div><strong>Rs.{subTotal}</strong></div>
                        </div>
                        <div>
                            <h6>Helmets</h6>
                            <strong>Rs.{helmet}</strong>
                        </div>

                        <div>
                            <h6>TOTAL</h6>
                            <strong>Rs.{total}</strong>
                        </div>
                        <Form>
                            <h4>PAYMENT METHOD</h4>
                            <div className="paymentMethod">
                                <input type="radio" id="age1" name="age" value="30" required />
                                <label for="age1">EasyPaisa or Jazzcash</label><br />
                            </div>
                            <div className="paymentMethod">
                                <input type="radio" id="age2" name="age" value="60" />
                                <label for="age2">Cash on delivery</label>
                            </div>
                        </Form>
                        <button onClick={() => confirmOrder()} className="btn">Place Order</button>
                    </Col>
                )}
            </Row>

        </div>
    )
}
