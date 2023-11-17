import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

function Posting() {
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://www.tribute.ca/news/wp-content/uploads/2017/05/KindergartenCop-650x366.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Job desc. here
                    </Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="primary">View Posting</Button>
                        <Button variant="secondary">View ~Company Name Lol~</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Posting;
