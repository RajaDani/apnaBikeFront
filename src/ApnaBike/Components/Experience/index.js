import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import './experience.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Experience() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div className="container-fluid " data-aos="zoom-out-down" data-aos-once="true">
            <div className="container experience pt-3">
                <span><img src="/howworks.svg"></img></span>
                <h2 className="headerWork mt-5">Share Your Experience</h2>
                <div className="socialLinks">
                    <h6>fb.com/ApnaBike</h6>
                    <h6>@ApnaBike</h6>
                    <h6>tw.com/ApnaBike</h6>
                </div>
            </div>
            <Row className="experienceImages">
                <Col sm="6" lg="3">
                    <img src="e1.jpg"></img>
                </Col>
                <Col sm="6" lg="3">
                    <img src="e2.jpg"></img>
                </Col>
                <Col sm="6" lg="3">
                    <img src="e3.jpg"></img>
                </Col>
                <Col sm="6" lg="3">
                    <img src="e4.jpg"></img>
                </Col>
                <Col sm="6" lg="3">
                    <img src="e5.jpg"></img>
                </Col>
                <Col sm="6" lg="3">
                    <img src="e6.jpg"></img>
                </Col>
                <Col sm="6" lg="3">
                    <img src="e7.jpg"></img>
                </Col>
                <Col sm="6" lg="3">
                    <img src="e8.jpg"></img>
                </Col>
            </Row>

            <h5 className="endBorder mt-5"></h5>
        </div>

    )
}