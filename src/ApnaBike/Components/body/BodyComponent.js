import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Card, CardBody, Button } from 'reactstrap'
import { BaseUrl } from '../../BaseUrl';
import './header.css'

export default function BodyComponent() {

    const [bookedBikes, setbookedBikes] = useState([]);

    const searchRide = (e) => {

        e.preventDefault();
        const pickUpDate = document.getElementById('pickUpDate').value;
        const pickUpTime = document.getElementById('pickUpTime').value;
        const dropOffDate = document.getElementById('dropOffDate').value;
        const dropOffTime = document.getElementById('dropOffTime').value;

        var bookedFrom = new Date(pickUpDate + ' ' + pickUpTime).toUTCString();
        var bookedTill = new Date(dropOffDate + ' ' + dropOffTime).toUTCString();

        fetch(BaseUrl + 'bikes/searchbikes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ bookedFrom: bookedFrom, bookedTill: bookedTill })
        })
            .then(res => res.json())
            .then(res => setbookedBikes(res));
    }

    return (
        <div className="parentDiv" style={{ backgroundImage: 'url(bgi2.jpg)' }}>
            <div className="container mt-5" >
                <Row className="flexContainer mt-lg-5 mt-sm-0">
                    <Col sm="12">
                        {/* <Card className="card p-4" >
                            <h4 className="cardHeader "> Search Your Next Ride </h4>
                            <CardBody>
                                <p className='pickDrop'>Pickup</p>
                                <form className="form-inline" onSubmit={(e) => searchRide(e)}>
                                    <div className="dateTime ml-1">
                                        <DatePickerComponent id="pickUpDate" placeholder="Date" min={Date()} max='31-12-2099'></DatePickerComponent>&nbsp;&nbsp;
                                        <TimePickerComponent id="pickUpTime" placeholder="Time"></TimePickerComponent>
                                    </div>
                                    <p className='pickDrop mt-4'>DropOff</p>
                                    <div className="dateTime ml-1 ">
                                        <DatePickerComponent id="dropOffDate" placeholder="Date" min={Date()} max='31-12-2099'></DatePickerComponent>&nbsp;&nbsp;
                                        <TimePickerComponent id="dropOffTime" placeholder="Time"></TimePickerComponent>
                                    </div>
                                    <Button className='searchBtn' type="submit">Search</Button>
                                </form>
                            </CardBody>
                        </Card> */}

                        <h4 className="cardHeader "> Search Your Next Ride </h4>
                        <div className="rideSelect">
                            <form className="form-inline" onSubmit={(e) => searchRide(e)}>
                                <div className="dateTime ml-1">
                                    <p className='pickDrop'>Pickup</p>
                                    <DatePickerComponent id="pickUpDate" placeholder="Date" min={Date()} max='31-12-2099'></DatePickerComponent>&nbsp;&nbsp;

                                    <p className='pickDrop mt-4'>DropOff</p>
                                    <DatePickerComponent id="dropOffDate" placeholder="Date" min={Date()} max='31-12-2099'></DatePickerComponent>&nbsp;&nbsp;
                                </div>
                                <Button className='searchBtn' type="submit">Search</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

