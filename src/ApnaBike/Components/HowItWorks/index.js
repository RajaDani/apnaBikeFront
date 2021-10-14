import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import './style.css'

export default function HowItWorks() {
    return (
        <div className="container p-5">
            <h2 className="headerWork">How it Works</h2>
            <p className="headerPara">The leading booking platform for bike rentals</p>

            <Row className="mt-5 pt-3 mb-3">
                <Col md="4">
                    <div className="howItWork">
                        <div className="howWorkIcon">
                            <img src="how-it-works-1.svg" className="howImg" alt="howItWorks"></img>
                            <p>1</p>
                        </div>
                    </div>
                    <div className="details">
                        <h4>Find the perfect bike(s) for you</h4>
                        <p>Compare bike rental locations, prices, bike types. No waste of time on the internet, everything is in one place!</p>
                    </div>

                </Col>
                <Col md="4">
                    <div className="howItWork">
                        <div className="howWorkIcon">
                            <img src="how-it-works-2.svg" className="howImg" alt="howItWorks"></img>
                            <p>2</p>
                        </div>
                    </div>
                    <div className="details">
                        <h4>Book directly online</h4>
                        <p>No waste of time during your holidays to find a rental point on the spot! No language barrier, thanks to our multilingual team! At the same price you would pay on the spot!</p>
                    </div>

                </Col>
                <Col md="4">
                    <div className="howItWork">
                        <div className="howWorkIcon">
                            <img src="how-it-works-3.svg" className="howImg" alt="howItWorks"></img>
                            <p>3</p>
                        </div>
                    </div>
                    <div className="details">
                        <h4>The bike will be waiting for you!</h4>
                        <p>You will be able to fully enjoy your holiday and your ride! Any problems? Our passionate team will be happy to help you!</p>
                    </div>

                </Col>
            </Row>
            <div className="btnDiv mb-5">
                <Button className="rentBtn">Rent Your Bike</Button>
            </div>
        </div>
    )
}
