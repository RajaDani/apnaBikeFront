import React, { useEffect, useState } from 'react'
import './style.css'
import { BaseUrl } from '../../BaseUrl';
import { Button, Modal } from 'reactstrap';
import { Link } from 'react-router-dom'
import RideDateTime from '../RideDateTime';

function Mission() {

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
            {bikes.slice(0, 5).map((bike) => {
                return <div className="col-lg-4 col-md-6 mb-5 " key={bike.bike_id}>
                    <div className="individualBike">
                        <div className="bikeImgDiv mb-3">
                            <img className="bikeImg" src='./bgi.jpg' alt="" />
                        </div>
                        <div className="rentDetails">
                            <h2>{bike.company}</h2>
                            <p>Hourly (0-12 hours) <strong>{bike.Rent.hourly_rent} Rs</strong></p>
                            <p>Daily (1-3 days)<strong>{bike.Rent.daily_rent} Rs</strong></p>
                        </div>
                        <Button className="bookNowBtn btn-danger" onClick={toggle}>Book Now</Button>
                    </div>
                </div>
            })}
            {bikes.slice(6, 7).map((bike) => {
                return <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid mb-5 " id="loadMore" key={bike.bike_id}>
                    <div className="wpo-mission-item">
                        <div className="wpo-mission-icon-5 mb-5">
                            <img className="bikeImg" src='./bgi.jpg' alt="" />
                        </div>
                        <div className="rentDetails">
                            <h2>{bike.company}</h2>
                            <p>Hourly (0-12 hours) <strong>{bike.Rent.hourly_rent} Rs</strong></p>
                            <p>Daily (1-3 days) <strong>{bike.Rent.daily_rent} Rs</strong></p>
                        </div>
                        <Button className="bookNowBtn btn-danger">Book Now</Button>
                    </div>
                    <div class="overlay">
                        <Link to="/bikes"> <div class="text">View More</div></Link>
                        <Link to="/bikes"><span className="fas fa-plus icon"></span></Link>
                    </div>
                </div>
            })}

        </div>
    }
    useEffect(() => {
        getBikes();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <div className="header">
                        <h1>Choose Your Bike</h1>
                    </div>
                </div>
            </div>
            <div className="allBikes">
                {renderBikes()}
            </div>
            <Modal isOpen={modal} toggle={toggle} className='dateTimeModal'>
                <RideDateTime />
            </Modal>
        </div>
    )
}

export default Mission;