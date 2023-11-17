import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


function Posting() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1038256818083868707/1174947567314948177/image.png?ex=65697231&is=6556fd31&hm=26f9223099712725baeaa68f593ec458580e5c5ccc675d60a6e411eeaed6164e&" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Posting;
