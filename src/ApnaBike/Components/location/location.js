import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import './location.css';

export default function Location() {
    return (
        <div className='locationComponent p-4'>
            <div className="container p-5 mt-5">
                <Row>
                    <Col md="6" className="discoverLocation ">
                        <h1>Discover Our <br /> Location</h1>
                        <p>If you are ready to test yourself on the hardest tracks against the top athletes, feel free to contact us. It will be an experience beyond the ordinary!</p>
                        <Button className="btn btn-danger p-3 mb-5">Get Direction</Button>
                    </Col>
                    <Col xs="6" md="3">
                        <div className="locationDiv">
                            <div className="location">
                                <span className="fas fa-map-marker-alt fa-2x "></span>
                                <h4>11 Evenue North</h4>
                            </div>
                            <p className="pl-4 ml-5 mb-4">120 903 9043</p>

                            <div className="location">
                                <span className="fas fa-map-marker-alt fa-2x"></span>
                                <h4>11 Evenue North</h4>
                            </div>
                            <p className="pl-4 ml-5 mb-4">120 903 9043</p>

                            <div className="location">
                                <span className="fas fa-map-marker-alt fa-2x"></span>
                                <h4>11 Evenue North</h4>
                            </div>
                            <p className="pl-4 ml-5 mb-4">120 903 9043</p>

                            <div className="location">
                                <span className="fas fa-map-marker-alt fa-2x"></span>
                                <h4>11 Evenue North</h4>
                            </div>
                            <p className="ml-5 pl-4 mb-4">120 903 9043</p>
                        </div>
                    </Col>

                    <Col xs="6" md="3">
                        <div className="locationDiv">
                            <div className="location">
                                <span className="fas fa-map-marker-alt fa-2x"></span>
                                <h4>11 Evenue North</h4>
                            </div>
                            <p className="pl-4 ml-5 mb-4">120 903 9043</p>

                            <div className="location">
                                <span className="fas fa-map-marker-alt fa-2x"></span>
                                <h4>11 Evenue North</h4>
                            </div>
                            <p className="pl-4 ml-5 mb-4">120 903 9043</p>

                            <div className="location">
                                <span className="fas fa-map-marker-alt fa-2x"></span>
                                <h4>11 Evenue North</h4>
                            </div>
                            <p className="pl-4 ml-5 mb-4">120 903 9043</p>

                            <div className="location">
                                <span className="fas fa-map-marker-alt fa-2x"></span>
                                <h4>11 Evenue North</h4>
                            </div>
                            <p className="ml-5 pl-4 mb-4">120 903 9043</p>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}
