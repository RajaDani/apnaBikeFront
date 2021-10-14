import React from 'react'
import { Col, Row } from 'reactstrap'
import './style.css'

const CounterSection = (props) => {
    return (
        <div className='wpo-counter-area' style={{ backgroundImage: 'url(bgi.jpg)' }}>
            <div className="container">
                <Row className="counter">
                    <Col xs="6" md="3" >
                        <div className="grid">
                            <div>
                                <h2><span className="odometer" data-count="6200">50</span>+</h2>
                            </div>
                            <p>Bikes</p>
                        </div>
                    </Col>
                    <Col xs="6" md="3">
                        <div className="grid">
                            <div>
                                <h2><span className="odometer" data-count="80">20</span>+</h2>
                            </div>
                            <p>Employees</p>
                        </div>
                    </Col>
                    <Col xs="6" md="3">
                        <div className="grid">
                            <div>
                                <h2><span className="odometer" data-count="245">245</span>+</h2>
                            </div>
                            <p>Rides Booked</p>
                        </div>
                    </Col>
                    <Col xs="6" md="3">
                        <div className="grid">
                            <div>
                                <h2><span className="odometer" data-count="605">60</span>+</h2>
                            </div>
                            <p>Reviews</p>
                        </div>
                    </Col>
                    {/* <div className="col-lg-12">
                        <div className="wpo-counter-grids">
                            <div className="col-6 col-md-3 grid">
                                <div>
                                    <h2><span className="odometer" data-count="6200">6200</span>+</h2>
                                </div>
                                <p>Donation</p>
                            </div>
                            <div className="col-6 col-md-3 grid">
                                <div>
                                    <h2><span className="odometer" data-count="80">80</span>+</h2>
                                </div>
                                <p>Fund Raised</p>
                            </div>
                            <div className="col-6 col-md-3 grid">
                                <div>
                                    <h2><span className="odometer" data-count="245">245</span>+</h2>
                                </div>
                                <p>Volunteers</p>
                            </div>
                            <div className="col-6 col-md-3 grid">
                                <div>
                                    <h2><span className="odometer" data-count="605">605</span>+</h2>
                                </div>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div> */}
                </Row>
            </div>
        </div>
    )
}

export default CounterSection;