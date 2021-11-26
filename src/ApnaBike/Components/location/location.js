import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'reactstrap'
import './location.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Location() {

    const [locaationModal, setLocationModal] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    const toggleModal = () => {
        setLocationModal(!locaationModal);
    }

    return (
        <div className='locationComponent p-4 mb-5' data-aos="zoom-in" data-aos-once="true">
            <div className="container p-5 mt-5">
                <Row>
                    <Col md="6" className="discoverLocation ">
                        <h1>Discover Our <br /> Location</h1>
                        <p>If you are ready to test yourself on the hardest tracks against the top athletes, feel free to contact us. It will be an experience beyond the ordinary!</p>
                        <Button className="btn btn-danger p-3 mb-5" onClick={() => toggleModal()}>Get Direction</Button>
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
            <Modal isOpen={locaationModal} toggle={toggleModal} >
                <iframe style={{ height: '95vh', width: '100vh', marginTop: '-20px' }} src="https://goo.gl/maps/CMrz4w2tRuawL6ht6"></iframe>
            </Modal>
        </div>
    )
}
