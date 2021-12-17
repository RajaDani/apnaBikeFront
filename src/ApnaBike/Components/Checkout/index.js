import React, { useEffect, useState } from 'react'
import { Col, Form, FormGroup, Row } from 'reactstrap'
import './checkout.scss'
import { useHistory, Redirect } from 'react-router-dom';
import { BaseUrl } from '../../BaseUrl';
import $ from 'jquery';

export default function Checkout(props) {

    const history = useHistory();

    let subtotal = history.location.state.subTotal;
    let helmet = history.location.state.helmet;
    let bike = history.location.state.bikeDetail;
    let total = parseInt(subtotal) + parseInt(helmet);
    let userId = localStorage.getItem('userId');
    let payment;

    const [bikeDetail, setbikeDetail] = useState([bike]);
    $(document).ready(function () {
        document.mainForm.onclick = function () {
            payment = document.mainForm.paymentMethod.value;
        }
    })

    async function confirmOrder() {

        let auth = localStorage.getItem('token');
        let userId = localStorage.getItem('userId');
        if (auth && userId) {
            let orderPlaced = await fetch(BaseUrl + `client/bookings/addbooking`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${auth}`
                },
                body: JSON.stringify({
                    bikeId: bikeDetail[0].bike_id, book_from: sessionStorage.getItem('pickup').trim(),
                    book_till: sessionStorage.getItem('dropoff').trim(), userId: userId,
                    city: sessionStorage.getItem('city'), payment_status: payment, total: total
                })
            });

            let order = await orderPlaced.json();
            let orderNo = order.booked_bikes_id;
            if (orderPlaced.status === 200) history.push({ pathname: '/summary', state: { userId: userId, bike: bikeDetail, total: total, subtotal: subtotal, helmet: helmet, orderDetail: orderNo } })
            else if (orderPlaced.status === 401 && order.message === 'Your session is expired. Login Again') {
                alert(order.message);
                localStorage.clear();
                history.clear();
                history.push('/home');
            }
            else {
                alert(order.message)
            }
        }
        else {
            alert('Your Session Expired Login Again')
            history.push('/login');
        }
    }
    return (
        <div className="container billInfoCheckout pl-t mt-5 mb-5 pb-5">
            <h4>BILLING DETAILS</h4>

            <Row className="mt-3">
                <Col md="8">
                    <Form onSubmit={() => confirmOrder()}>
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
                            {/* <input className="form-control" value={history.location.state.userEmail} required></input> */}
                            <input className="form-control" required></input>
                        </FormGroup>
                        <FormGroup>
                            <label>City</label>
                            <input className="form-control" required></input>
                        </FormGroup>
                        <FormGroup>
                            <label>Phone No</label>
                            <input className="form-control mb-5" required></input>
                        </FormGroup>

                        <h4>ADDITIONAL INFORMATION</h4>
                        <p>Order notes (optional)</p>
                        <input className="form-control" placeholder="Note abut your order, e.g. special notes for delivery"></input>
                        <button type="submit" className="btn">Place Order</button>

                    </Form>
                </Col>

                {history.location.state &&
                    bikeDetail.map(b =>
                        <Col md="4" className="infoSummary p-3">
                            <h5>Order Summary</h5>
                            <h4>Your Order</h4>
                            <div>
                                <p>Product</p>
                                <p>Subtotal</p>
                            </div>
                            <div className="description" style={{ justifyContent: "space-between !important" }}>
                                <div className="productDetails">
                                    <p>Name : {b.company}</p>
                                    <p>Start Date : {sessionStorage.getItem('pickup')}</p>
                                    <p>End Date : {sessionStorage.getItem('dropoff')}</p>
                                    <p>Days : 2</p>
                                    <p>City : {sessionStorage.getItem('city')}</p>
                                </div>
                                <div style={{ marginRight: '-10px' }}><strong>Rs.{subtotal}</strong></div>
                            </div>
                            <div>
                                <h6>Helmets</h6>
                                <strong>Rs.{helmet}</strong>
                            </div>

                            <div>
                                <h6>TOTAL</h6>
                                <strong>Rs.{total}</strong>
                            </div>
                            <h4 className='ml-1 mt-4 mb-4'>PAYMENT METHOD</h4>

                            <form id="mainForm" name="mainForm">
                                <div className="paymentMethod">
                                    <input type="radio" value="EasypaisaORJazzcash" id="age1" name="paymentMethod" required />
                                    <label for="age1">EasyPaisa or Jazzcash</label><br />
                                </div>
                                <div className="paymentMethod">
                                    <input type="radio" id="age2" value="CashonDelievry" name="paymentMethod" />
                                    <label for="age2">Cash on Delivery</label>
                                </div>
                            </form>

                        </Col>
                    )}
            </Row>

        </div>
    )
}
