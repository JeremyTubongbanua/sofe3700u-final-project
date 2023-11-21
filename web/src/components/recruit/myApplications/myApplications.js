import React from "react";
import { Card, Button, Container, Stack } from "react-bootstrap";

function MyApplications(props) {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-2">My Applications</h1>
            <Stack className="p-5 justify-content-center align-items-center">
                <Card className="w-75 text-center">
                    <Card.Img variant="top" src="https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_56_1023_614/master/1023.jpg?width=700&quality=85&auto=format&fit=max&s=185175f5efa3916bc91cf77b16876ffa" />
                    <Card.Body>
                        <Card.Title>Job Title</Card.Title>
                        <Card.Text>
                            Description asdl;kajsdlkjhasdlkajsdlkjasdlkjasdlkjads huh? aslpdjasldjalskdj huh?
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Stack>
        </Container>
    );
}

export default MyApplications;
