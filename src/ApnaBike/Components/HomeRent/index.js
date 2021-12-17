import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'reactstrap';
import './homeRent.scss'
import AOS from 'aos';
import "aos/dist/aos.css";
import Slider from "react-slick";

export default function HomeRent() {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, [])

    var settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 700,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        // nextArrow: <SampleNextArrow />,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="container-fluid p-5 mb-5 homeRent" data-aos="zoom-out-up" data-aos-once="true">
            <div className="container mt-4">
                <span><img src="/howworks.svg"></img></span>
                <h2 className="headerWork mt-5">Our Renting Fleet</h2>
                <p className="headerPara">Look at available Bikes for you</p>
                <Row >
                    <Col sm="12" className="mt-5 homePrice">
                        <Slider className="sliderControl" {...settings}>
                            <div className="mb-3 priceCardHeader">
                                <Card className="priceCard">
                                    <Row>
                                        <img src='bg1.jpg' alt="bikeImg" />
                                    </Row>
                                    <p>Model 2018</p>
                                    <h4>Honda</h4>
                                    <div>
                                        <h6></h6>
                                    </div>

                                    <div>
                                        <i className='fas fa-gem'></i>
                                        <p>Maximum comfort for urban mobility</p>
                                    </div>

                                    <div>
                                        <i className='fas fa-users'></i>
                                        <p>Ideal for group tours and long journeys</p>
                                    </div>
                                    <div>
                                        <i className='fas fa-shield-alt'></i>
                                        <p>Includes a security chain</p>
                                    </div>
                                    <div>
                                        <i class="fas fa-sun"></i>
                                        <p>Powerful Brushless HUB 1000W engine</p>
                                    </div>
                                    <div className="rentRow">
                                        <strong>Rent from </strong>
                                        <h5>Rs.600 / Day</h5>
                                    </div>

                                    <button className="btn bookBtn">Book now <i className="fas fa-long-arrow-alt-right"></i></button>
                                </Card>
                            </div>


                            <div className="mb-3 ">
                                <Card className="priceCard">
                                    <Row>
                                        <img src='bg1.jpg' alt="bikeImg" />
                                    </Row>
                                    <p>Model 2018</p>
                                    <h4>Honda</h4>
                                    <div>
                                        <h6></h6>
                                    </div>

                                    <div>
                                        <i className='fas fa-gem'></i>
                                        <p>Maximum comfort for urban mobility</p>
                                    </div>

                                    <div>
                                        <i className='fas fa-users'></i>
                                        <p>Ideal for group tours and long journeys</p>
                                    </div>
                                    <div>
                                        <i className='fas fa-shield-alt'></i>
                                        <p>Includes a security chain</p>
                                    </div>
                                    <div>
                                        <i class="fas fa-sun"></i>
                                        <p>Powerful Brushless HUB 1000W engine</p>
                                    </div>
                                    <div className="rentRow">
                                        <strong>Rent from </strong>
                                        <h5>Rs.600 / Day</h5>
                                    </div>

                                    <button className="btn bookBtn">Book now <i className="fas fa-long-arrow-alt-right"></i></button>
                                </Card>
                            </div>


                            <div className="mb-3">
                                <Card className="priceCard">
                                    <Row>
                                        <img src='bg1.jpg' alt="bikeImg" />
                                    </Row>
                                    <p>Model 2018</p>
                                    <h4>Honda</h4>
                                    <div>
                                        <h6></h6>
                                    </div>

                                    <div>
                                        <i className='fas fa-gem'></i>
                                        <p>Maximum comfort for urban mobility</p>
                                    </div>

                                    <div>
                                        <i className='fas fa-users'></i>
                                        <p>Ideal for group tours and long journeys</p>
                                    </div>
                                    <div>
                                        <i className='fas fa-shield-alt'></i>
                                        <p>Includes a security chain</p>
                                    </div>
                                    <div>
                                        <i class="fas fa-sun"></i>
                                        <p>Powerful Brushless HUB 1000W engine</p>
                                    </div>
                                    <div className="rentRow">
                                        <strong>Rent from </strong>
                                        <h5>Rs.600 / Day</h5>
                                    </div>

                                    <button className="btn bookBtn">Book now <i className="fas fa-long-arrow-alt-right"></i></button>
                                </Card>
                            </div>

                            <div className="mb-3">
                                <Card className="priceCard">
                                    <Row>
                                        <img src='bg1.jpg' alt="bikeImg" />
                                    </Row>
                                    <p>Model 2018</p>
                                    <h4>Honda</h4>
                                    <div>
                                        <h6></h6>
                                    </div>

                                    <div>
                                        <i className='fas fa-gem'></i>
                                        <p>Maximum comfort for urban mobility</p>
                                    </div>

                                    <div>
                                        <i className='fas fa-users'></i>
                                        <p>Ideal for group tours and long journeys</p>
                                    </div>
                                    <div>
                                        <i className='fas fa-shield-alt'></i>
                                        <p>Includes a security chain</p>
                                    </div>
                                    <div>
                                        <i class="fas fa-sun"></i>
                                        <p>Powerful Brushless HUB 1000W engine</p>
                                    </div>
                                    <div className="rentRow">
                                        <strong>Rent from </strong>
                                        <h5>Rs.600 / Day</h5>
                                    </div>

                                    <button className="btn bookBtn">Book now <i className="fas fa-long-arrow-alt-right"></i></button>
                                </Card>
                            </div>
                        </Slider>

                    </Col>
                </Row>
            </div>
        </div >
    )
}
