import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import './style.scss'
import CountUp from 'react-countup';

const CounterSection = (props) => {

    return (
        <div className="container-fluid counterComponent mt-5 mb-5">
            <div className="container pt-5 pb-5 pl-5">
                <Row className="mb-5">
                    <Col lg="3" md="6">
                        <div className="counterImg"><i className="fas fa-biking fa-4x"></i></div>
                        <div className="counterSection">
                            <CountUp start={0} end={3870} delay={0} duration={2}>
                                {({ countUpRef }) => (
                                    <div>
                                        <h1 ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                            <p>BIKES Available</p>
                        </div>
                    </Col>
                    <Col lg="3" md="6">
                        <div className="counterImg"><i className="fas fa-parachute-box fa-4x"></i></div>
                        <div className="counterSection">
                            <CountUp start={0} end={1290} delay={0} duration={2}>
                                {({ countUpRef }) => (
                                    <div>
                                        <h1 ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                            <p>BIKES Available</p>
                        </div>
                    </Col>
                    <Col lg="3" md="6">

                        <div className="counterImg"><i className="fas fa-download fa-4x"></i></div>
                        <div className="counterSection">
                            <CountUp start={0} end={1420} delay={0} duration={2}>
                                {({ countUpRef }) => (
                                    <div>
                                        <h1 ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                            <p>BIKES Available</p>
                        </div>
                    </Col>
                    <Col lg="3" md="6">
                        <div className="counterImg"><i className="fas fa-users fa-4x"></i></div>
                        <div className="counterSection">
                            <CountUp start={0} end={6400} delay={0} duration={2}>
                                {({ countUpRef }) => (
                                    <div>
                                        <h1 ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                            <p>BIKES Available</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default CounterSection;