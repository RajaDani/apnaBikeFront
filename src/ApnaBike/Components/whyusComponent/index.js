import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import CounterSection from '../counter'
import RentalFeatures from '../RentalFeatures'
import './whyusComponent.scss'
import TeamMember from '../team';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import "aos/dist/aos.css";

export default function WhyusComponent() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div data-aos="zoom-out" data-aos-once="true">

            <div className="pricingJumbo" style={{ backgroundImage: 'url(bikefleet.jpg)' }}>
                <img src="middle2.png" alt="icon"></img>
                <div className="flexItems">
                    <h1>ABOUT US</h1>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className="link" to="/home">HOME</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">ABOUT US</li>
                    </ol>
                </div>
            </div>
            <div className="container mt-5">
                <Row className="whyusComp" data-aos="zoom-out" data-aos-once="true">
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

            <div className="container p-5" data-aos="zoom-in-up" data-aos-once="true">
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

            <div className="container mb-5 pb-5" data-aos="flip-up" data-aos-once="true">
                <span><img src="/howworks.svg"></img></span>
                <TeamMember />
            </div>
        </div>
    )
}
