import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import './middle.scss'
import { BaseUrl } from '../../BaseUrl';
import { useHistory } from 'react-router-dom';


export default function DateTimePicker() {

    const [bookedBikes, setbookedBikes] = useState([]);
    const [city, setcity] = useState([])
    const history = useHistory();
    var difference;

    const getCities = async () => {
        let cities = await fetch(BaseUrl + 'city/getcities');
        if (cities.status === 200) {
            let city = await cities.json();
            setcity(city);
        }
    }

    const searchRide = async (e) => {

        e.preventDefault();

        var pickUpDate = document.getElementById('pickUpDate').value;
        var dropoff = document.getElementById('dropOffDate').value;
        var city = document.getElementById('citySelect').value;

        sessionStorage.setItem('pickup', pickUpDate);
        sessionStorage.setItem('dropoff', dropoff);
        sessionStorage.setItem('city', city);

        difference = Math.floor(((Date.parse(dropoff) - Date.parse(pickUpDate)) / 86400000) + 1);

        let bikes = await fetch(BaseUrl + `bikes/searchbikes?bookedFrom=${pickUpDate}&bookedTill=${dropoff}&city=${city}`)

        if (bikes.status === 200) {
            let availablebikes = await bikes.json();
            history.push({ pathname: '/availablebikes', state: { bikes: availablebikes.Bikes, booked: availablebikes.bookedBikes, totalDays: difference } })
        }
        else {
            alert(bikes.message);
        }

    }

    function getCity(e) {
        alert('hello')
    }

    useEffect(() => {
        getCities()
    }, [])

    return (
        <div className="container">
            <Row>
                <Col sm="12">
                    <div className="getDateTime mb-3">
                        <h1>Quick Search</h1>
                        <form className="form-inline" onSubmit={(e) => searchRide(e)}>
                            <div className="dateTimeBlock">
                                <p>City </p>
                                <div className="citySelect mr-3">
                                    <select id="citySelect" className="from-control" required>
                                        <option>Select</option>
                                        {city.map(e =>
                                            <>
                                                <option name={e.id_city} onClickCapture={() => getCity(e)}>{e.city_name}</option>
                                            </>
                                        )}
                                    </select>
                                </div>

                                <p className='pickAndDropElement'>Pickup </p>
                                <div>
                                    <input className="calenderPick" type="date" id="pickUpDate" placeholder="Date" min={Date()} max="2099-11-15" required ></input>
                                </div>
                                <p className='pickAndDropElement'>DropOff </p>
                                <div>
                                    <input className="calenderPick" type="date" id="dropOffDate" placeholder="Date" min={Date()} max='31-12-2099' required></input>
                                </div>
                                <Button className='searchBikeBtn' type="submit">Find Bike</Button>
                            </div>

                        </form>
                    </div>
                </Col>
                {/* {bookedBikes &&
                bookedBikes.length > 0 &&
                history.push({ pathname: '/availablebikes', state: { bikes: bookedBikes, totalDays: difference } })
            } */}
            </Row>



        </div>
    )
}
