import React, { useEffect, useState } from 'react'
import './style.scss';
import { BaseUrl } from '../../BaseUrl';
import { Button, Modal, Row, Card } from 'reactstrap';
import RideDateTime from '../RideDateTime';

function Pricing() {

    const [bikes, setBikes] = useState([]);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const getBikes = () => {
        fetch(BaseUrl + 'bikes')
            .then(res => res.json())
            .then(res => setBikes(res));
    }

    const renderBikes = () => {

        return <div className="row">
            {bikes.map((bike) => {
                // return <div className="col-lg-4 col-md-6 mb-5 " key={bike.bike_id}>
                //     <div className="individualBike">
                //         <div className="bikeImgDiv mb-3">
                //             <img className="bikeImg" src='./bgi.jpg' alt="" />
                //         </div>
                //         <div className="rentDetails">
                //             <h2>{bike.company}</h2>
                //             <p>Hourly (0-12 hours) <strong>{bike.Rent.hourly_rent} Rs</strong></p>
                //             <p>Daily (1-3 days)<strong>{bike.Rent.daily_rent} Rs</strong></p>
                //         </div>
                //         <Button className="bookNowBtn btn-danger mb-3" onClick={toggle}>Book Now</Button>
                //     </div>
                // </div>

                return <div className="col-lg-4 col-md-6 mb-3 p-3 " key={bike.bike_id}>
                    <Card className="priceCard">
                        <Row>
                            <img src={`./${bike.image}`} alt="bikeImg" />
                        </Row>
                        <p>Model {bike.model}</p>
                        <h4>{bike.company}</h4>
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
                            <h5>Rs.{bike.Rent.daily_rent} / Day</h5>
                        </div>

                        <button className="btn">Book now <i className="fas fa-long-arrow-alt-right"></i></button>
                    </Card>
                </div>
            })}

        </div>
    }
    useEffect(() => {
        getBikes();
    }, [])

    return (
        <div className="body">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className="header">
                            <h1>Our Prices</h1>
                        </div>
                        <h6 className="review"></h6>
                    </div>
                </div>
                <div className="allBikes mt-5">
                    {renderBikes()}
                </div>
                <Modal isOpen={modal} toggle={toggle} className='dateTimeModal'>
                    <RideDateTime />
                </Modal>
            </div>
        </div>
    )
}

export default Pricing;