import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import './feedback.scss'
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Feedback() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
    return (
        <div className="container feedback pt-5 mb-5" data-aos="zoom-out-down" data-aos-once="true">
            <span><img src="/howworks.svg"></img></span>
            <p>TESTIMONIALS</p>
            <h2 className="headerWork mt-5">Clients About Us </h2>

            <Row className="clientsFeedback mt-3 p-5">
                <Col md="4" className="review">

                    <div className="clientImg"><img className="rounded-circle " src="client1.jpg"></img></div>

                    <h5>“Very happy with the scooter, the service, and the user-friendly app. You work really
                        fast, guys. I will use your friendly service again and recommend it to my friends and
                        colleagues. Thanks once again!”</h5>
                    <br />
                    <h4>Sarah Taylor</h4>
                    <p>25 years</p>

                </Col>

                <Col md="4" className="review">

                    <div className="clientImg"><img className="rounded-circle " src="client2.jpg"></img></div>

                    <h5>“The staff was extremely helpful and gave excellent advice on roads, etc. We were
                        pleasantly surprised with the scooter and will not hesitate to return to you again.
                        The trip to see my cousin was one of the reasons we stayed in town and the scooter
                        rental enabled us to see more.”</h5>

                    <br />
                    <h4>Maisie Kaur</h4>
                    <p>32 years</p>

                </Col>


                <Col md="4">

                    <div className="clientImg"><img className="rounded-circle " src="client3.jpg"></img></div>

                    <h5>Great staff and very impressive scooters. I rented a yellow Tweet 50cc and I can say
                        it made my trip! Now I want to buy myself one because it’s easier to travel by
                        scooter in town. Thank you, TanTum!</h5>
                    <br />
                    <h4>James Gordon</h4>
                    <p>30 years</p>
                </Col>
            </Row>
        </div>
    )
}
