import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import './features.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function RentalFeatures() {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <>
            <h4 className="border mt-5"></h4>
            <div className="container features mt-5 mb-5 pt-5" data-aos="flip-right" data-aos-once="true">
                <Row className="pb-5">
                    <Col md="6" >
                        <Row>
                            <Col sm="12">
                                <h1>ApnaBike - The company to offer the best bike rental services in Pakistan</h1>
                            </Col>
                            <Col sm="12">
                                <img className="leftImg mt-5" src="feature1.jpg" alt="feature"></img>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6" className="pl-4" >
                        <Row>
                            <Col sm="12">
                                <img src="feature2.jpg" alt="feature"></img>
                            </Col>
                            <Col sm="12" className="rentingFeatures">
                                <h3 >Renting Service Features</h3>
                                <p>Consectetur adipisicing elit sed eiusmod tempor dolore magna aliqua
                                    ad minim veniam quis nostrud exercitation aliquip.</p>
                                <div>
                                    <i className="fas fa-check-square"></i>
                                    <p>Free booking cancellation up to 15 hours</p>
                                </div>
                                <div>
                                    <i className="fas fa-check-square"></i>
                                    <p>We offer 24/7 road rental assistance</p>
                                </div>
                                <div>
                                    <i className="fas fa-check-square"></i>
                                    <p>More than 350.000 satisfied customers</p>
                                </div>
                                <div>
                                    <i className="fas fa-check-square"></i>
                                    <p>Fleet of over 8,000 brand new bikes</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}
