
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Applied() {
    // Component logic goes here

    return (

        <Card key={1} className="mb-3 p-3 bg-body-secondary w-75">
            <Row className="g-0">
                <Col md={4}>
                    <img src='https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Job" className='border border-dark border-2' style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                </Col>
                <Col md={8} className="d-flex justify-content-center align-items-center">
                    <Card.Body>
                        <Card.Title className='fs-3 text' >{`Posting ID:  | `}</Card.Title>
                        <br></br>
                        <Card.Text>{`Salary`}</Card.Text>
                        <Card.Text>{`Status:`}</Card.Text>
                        <Card.Text>{`Position:`}</Card.Text>
                        <Card.Text>{`Type: `}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    );
}

export default Applied;
