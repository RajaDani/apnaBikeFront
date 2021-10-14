import React from 'react'
import { Col, Row } from 'reactstrap';
import { about } from './data';
import './style.css';

export default function Aboutus() {
    return (
        <div>
            <div className="container">
                <h2>About Us</h2>
                <h6 className="underlineHeader"></h6>
            </div>

            <div className="container">
                <p>We love bikes. We love travelling. And, we want you to love them too! From two wheeler rentals
                    to riding gears, from exclusive bike merchandise to road trips and tours, from bike
                    refurbishing and maintenance to fleet management system - we have them all.</p>
                <br></br>
                <p>Our team of ninjas aim to bridge the gap between bike fanatics and their need for a perfect
                    go-to for all their biking needs. Whether you’re a student in a new city or someone who
                    just joined work - you can rent a bike for a day, a week or even a couple of months,
                    leave your bikes at the station for some good ol’ maintenance and pick up some exclusive
                    merch too! Whether you’re a startup with a small sales team or a food delivery giant,
                    a logistics company or a renowned restaurant - for everything that depends on two wheels
                    - ‘ONN Bikes Hai Na’!</p>
                <br></br>
                <p>We also host a frequent travel series called Wander ONN where we take you on an epic bike
                    journey at amazingly affordable prices. Check our Facebook page for upcoming getaways and
                    more!</p>
            </div>

            <div className="container">
                <h3>Our mission is to make your spontaneous trips easy and affordable</h3>
                <h6 className="underline"></h6>
                <p>We want you to ditch the tour guides and unkept promises to travel whenever you feel like
                    you need a break. At ApnaBike, you will rediscover the joy of travelling as we bring
                    you the best handpicked and carefully curated tours, activities and attractions in and
                    around your city. We give you the freedom to be spontaneous, because the best holidays are!</p>

            </div>

            <div className="container">
                <h3>Find Us In Your City</h3>
                <h6 className="underline"></h6>
            </div>

            <Row className="container cities pl-5  mb-4">
                {about.map(city =>
                    <Col lg="4" md="6">
                        <div className="cityDiv">
                            <img src={city.img} alt="city" className="cityImg"></img>
                            <h2>{city.city}</h2>
                        </div>
                    </Col>
                )}
            </Row>
        </div>
    )
}
