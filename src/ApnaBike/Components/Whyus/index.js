import React from 'react'
import { Card, CardHeader, Col, Row } from 'reactstrap'
import { Whyus } from './data'
import './style.css';

export default function WhyApnaBike() {

    // const [whyus, setWhyus] = useState([]);

    return (
        <div className="container-fluid p-5 mb-4">
            <Row>
                <Col sm="12" className="whyusHeading">
                    <h1>Why ApnaBike</h1>
                    <p>We simplified bike rentals, so you can focus on what's important to you.</p>
                </Col>
            </Row>
            <Row >
                {Whyus.map(whyApnaBike =>
                    <Col lg="3" md="6" key={whyApnaBike.id}>
                        <Card className="whyusCard">
                            <CardHeader className="cardHeader"><img src={whyApnaBike.img} alt="whyus" className="whyusImg"></img></CardHeader>
                            <p>{whyApnaBike.description}</p>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    )
}
