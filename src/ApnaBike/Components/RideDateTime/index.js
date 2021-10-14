import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Card, CardBody, Button } from 'reactstrap'
import './style.css';
import React from 'react'

export default function RideDateTime() {
    return (
        <Card className="card " id="bodyCard">
            <h4 className="cardHeader "> Search Your Next Ride </h4>
            <CardBody>
                <p className='pickDrop'>Pickup</p>
                <form className="form-inline">
                    <div className="dateTime ml-1">
                        <DatePickerComponent placeholder="Date" min={Date()} max='31-12-2099'></DatePickerComponent>&nbsp;&nbsp;
                        <TimePickerComponent placeholder="Time"></TimePickerComponent>
                    </div>
                    <p className='pickDrop mt-4'>DropOff</p>
                    <div className="dateTime ml-1 ">
                        <DatePickerComponent placeholder="Date" min={Date()} max='31-12-2099'></DatePickerComponent>&nbsp;&nbsp;
                        <TimePickerComponent placeholder="Time"></TimePickerComponent>
                    </div>
                    <Button className='searchBtn' type="submit">Search</Button>
                </form>
            </CardBody>
        </Card>
    )
}
