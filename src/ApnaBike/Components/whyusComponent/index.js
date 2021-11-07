import React from 'react'
import { Col, Jumbotron, Row } from 'reactstrap'
import CounterSection from '../counter'
import RentalFeatures from '../RentalFeatures'
import './whyusComponent.scss'
import TeamMember from '../team';

export default function WhyusComponent() {
    return (
        <>
            <h1 style={{ fontWeight: 'bold', marginTop: '40px', fontFamily: 'Montserrat , sans-serif' }}>About ApnaBike</h1>
            <h6 className="review"></h6>
            <div className="container p-2">
                <Row className="whyusComp">
                    <Col md="4" className="p-5">
                        <div className="whyusImgDiv"><img src="ab1.png"></img></div>
                        <div>
                            <h4>Designed For The Modern World</h4>
                            <p>Labore tempore usmod sed incididunt labore et dolore magna aliqua.
                                Ut enim ad minim veniam quis nostrud.</p>
                        </div>
                    </Col>

                    <Col md="4" className="p-5">
                        <div className="whyusImgDiv"><img src="ab2.png"></img></div>
                        <div>
                            <h4>Smart Mobility With Big Savings</h4>
                            <p>Labore tempore usmod sed incididunt labore et dolore magna aliqua.
                                Ut enim ad minim veniam quis nostrud.</p>
                        </div>
                    </Col>

                    <Col md="4" className="p-5">
                        <div className="whyusImgDiv"><img src="ab3.png"></img></div>
                        <div>
                            <h4>Insured & Licensed Rental Services</h4>
                            <p>Labore tempore usmod sed incididunt labore et dolore magna aliqua.
                                Ut enim ad minim veniam quis nostrud.</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <CounterSection />
            <RentalFeatures />

            <div className="container p-5">
                <span><img src="/howworks.svg"></img></span>
                <Row className="ideaContainer ">
                    <Col sm="12" className="whyusHeading mt-4 mb-4">
                        <h1>Idea of ApnaBike</h1>
                        <p>Thinking Behind Rental Service.</p>
                    </Col>
                </Row>
                <Row className="ideaContainer">
                    <Col md="6" className="p-5">
                        <img src="idea.jpg" alt="ideaImg"></img>
                    </Col>
                    <Col md="6" className="p-5 mt-5">
                        <h4>Idea of renting a Bike</h4>
                        <p>Aiusmod tempor incididunt labore loremy enim veniams lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua enim ad minim veniam quis.</p>
                        <p> Nostrud exercita aliquip ex ea consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse.</p>
                    </Col>
                </Row>
            </div>

            <div className="container mb-5 pb-5">
                <span><img src="/howworks.svg"></img></span>
                <TeamMember />
            </div>
        </>
    )
}
