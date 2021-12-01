import React from 'react'
import { Button, Col, Row } from 'reactstrap';
import './placeOrder.scss';
import { Link, useHistory } from 'react-router-dom';


export default function OrderPlaced() {
    const history = useHistory();

    return (
        <div className="container checkout">

            <div className="successIcon mt-5">
                <i class="far fa-check-circle fa-6x"></i>
            </div>

            <h4>Thank You. <br />Your Order has been Recieved</h4>

            <Row className="p-5">
                <Col sm="12" className="p-5 orderDetails">
                    <Row className="pl-5 pr-5">
                        <Col sm="3">
                            <p>Order Number :</p>
                            <div className="orderSummary"><strong>{history.location.state.orderDetail}</strong></div>
                        </Col>
                        <Col sm="3">
                            <p>Date :</p>
                            <div className="orderSummary"><strong>{sessionStorage.getItem('pickup')}</strong></div>
                        </Col>
                        <Col sm="3">
                            <p>Total :</p>
                            <div className="orderSummary"> <strong>{history.location.state.subTotal + history.location.state.helmet}</strong></div>
                        </Col>
                        <Col sm="3">
                            <p>Payment Method :</p>
                            <div className="orderSummary"><strong>Cash on Delivery</strong></div>
                        </Col>
                    </Row>
                </Col>

                <Col sm="12" md="10" className="orderDescription mb-5 mt-5">
                    <h4>Order Details</h4>
                    <div className="headingOrder">
                        <p>Product </p>
                        <p>Total</p>
                    </div>

                    <div className="description">
                        {history.location.state.bike.map(bikeDetail =>
                            <div className="productDetails">
                                <p>Name : {bikeDetail.company}</p>
                                <p>Start Date : {sessionStorage.getItem('pickup')}</p>
                                <p>End Date :  {sessionStorage.getItem('dropoff')}</p>
                                <p>City :  {sessionStorage.getItem('city')}</p>
                            </div>
                        )}
                        <div><strong>Rs.{history.location.state.subTotal}</strong></div>
                    </div>
                    <div>
                        <p>Subtotal :</p>
                        <strong>Rs.{history.location.state.subTotal}</strong>
                    </div>
                    <div>
                        <p>Helmets :</p>
                        <strong>Rs.{history.location.state.helmet}</strong>
                    </div>

                    <div>
                        <p>Payment Method :</p>
                        <strong>Cash on delivery</strong>
                    </div>
                    <div>
                        <p>Total :</p>
                        <strong>{history.location.state.subTotal + history.location.state.helmet}</strong>
                    </div>
                </Col>
                <Link to="/home" style={{ marginLeft: 'auto', marginRight: 'auto' }}> <Button className="btn btn-danger">Back To Home</Button> </Link>

            </Row>

        </div>
    )
}
