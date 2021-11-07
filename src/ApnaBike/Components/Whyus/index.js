import React, { useEffect } from 'react'
import { Card, CardHeader, Col, Row } from 'reactstrap'
import { Whyus } from './data'
import './whyus.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function WhyApnaBike() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div className="container p-4 mt-3 mb-4 " data-aos="zoom-in" data-aos-once="true">
            <span><img src="/howworks.svg"></img></span>
            <Row>
                <Col sm="12" className="whyusHeading mt-4 mb-4">
                    <h1>Why Choose ApnaBike</h1>
                    <p>We simplified bike rentals, so you can focus on what's important to you.</p>
                </Col>
            </Row>
            <Row className="whyusCard mt-4 pb-3">
                <Col md="4">
                    <div>
                        <h4>Fully Insured <br />
                            Rental Service</h4>
                        <p>Your safety is our priority. From sanitizing all bikes before every use,
                            to extensive on-ground safety measures, your rides with ApnaBike will always be
                            safe and reliable. We also offer helmets on-demand.</p>
                    </div>

                    <div className="mt-5 ">
                        <h4>Different Types <br />
                            of Scooters</h4>
                        <p>Your local ApnaBike Station is here to make ensure your two-wheeler experience
                            is flawless. At your neighborhood station, you get to pick any bike,
                            get maintenance, sanitized, and a lot more.</p>
                    </div>
                </Col>
                <Col md="4">
                    <img src="/whyusgirl.png" className="mb-5"></img>
                </Col>
                <Col md="4">
                    <div>
                        <h4>Smart Mobility<br />
                            for Clients</h4>
                        <p>With your trusty ApnaBike app, you can choose any bike, make instant payments,
                            get offers, and manage all aspect of your ONN experience right from the comfort
                            and ease of your mobile app.</p>
                    </div>

                    <div className="mt-5 pt-4">
                        <h4>Designed for<br />
                            Modern World </h4>
                        <p>Enjoy the freedom of owning a two-wheeler without the hefty down-payments,
                            EMIs and paperwork. Now choose bikes on easy hourly and daily plans.</p>
                    </div>
                </Col>
            </Row>
            <h5 className="endBorder mt-5"></h5>
        </div>
    )
}
