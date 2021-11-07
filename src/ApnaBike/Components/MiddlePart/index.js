import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import './middle.scss'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';


export default function MiddlePart() {
    return (
        <>
            <div className="bodyBackground" style={{ backgroundImage: 'url(bgibike.jpg)' }}>
                <Row>
                    <Col md="7" lg="6" >
                        <img src="middle.png"></img>
                        <div className="top-left">
                            <h1>Your Bike <br /> When You Need <br /> it Most</h1>
                            <button className="btn"><i className="fas fa-biking mr-3" outline></i>Find a Bike</button>
                            <div className="centered">
                                <img className="rentImg" src="rate.png"></img>
                                <p>As Low as </p> <br /> <h3> Rs.500/Day</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div >

            <div className="container">
                <Row>
                    <Col sm="12">
                        <div className="getDateTime mb-3">
                            <h1>Quick Search</h1>
                            <form className="form-inline">
                                <div className="dateTimeBlock">
                                    <p>City </p>
                                    <div className="citySelect">
                                        <select id="citySelect">
                                            <option>Chakwal</option>
                                            <option>Rawalpindi</option>
                                            <option>Islamabad</option>
                                            <option>Lahore</option>
                                            <option>Karachi</option>
                                            <option>Peshawar</option>
                                        </select>
                                    </div>

                                    <p className='pickAndDropElement'>Pickup </p>
                                    <div>
                                        <DatePickerComponent className="calenderPick" id="pickUpDate" placeholder="Date" required min={Date()} max='31-12-2099'></DatePickerComponent>
                                    </div>
                                    <p className='pickAndDropElement'>DropOff </p>
                                    <div>
                                        <DatePickerComponent className="calenderPick" id="dropOffDate" placeholder="Date" min={Date()} max='31-12-2099'></DatePickerComponent>
                                    </div>
                                    <Button className='searchBikeBtn' type="submit">Find Bike</Button>
                                </div>

                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
