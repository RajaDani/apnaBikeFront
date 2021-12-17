import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Card } from 'reactstrap'

export default function Error404() {
    return (
        <Row>
            <Col md="4">
                <Card>
                    <div>
                        <img src="logo.png"></img>
                    </div>
                    <h3>Error 404</h3>
                    <h5>Page not found</h5>
                    <div>
                        <Link to="/">Back To HomePage</Link>
                    </div>
                </Card>
            </Col>
            <Col md="8">
                <img src="/404.svg" alt="404"></img>
            </Col>
        </Row>
    )
}
