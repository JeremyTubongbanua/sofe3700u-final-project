import React, { useState, useEffect } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

function Posting() {
  const [recruits, setRecruits] = useState([]);

  useEffect(() => {
    // Replace this with your own data
    const data = [
      {
        picture: 'url_to_picture',
        full_name: 'Full Name',
        bio: 'Bio',
        position: 'Position',
        address: 'Address',
        salary: 'Salary',
        status: 'Status',
        type: 'Type',
        frequency: 'Frequency'
      },
      // Add more recruits as needed
    ];
    setRecruits(data);
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      {recruits.map((recruit, index) => (
        <Card key={index} style={{ width: '18rem', margin: '10px', backgroundColor: 'grey' }}>
          <Card.Img variant="top" src={recruit.picture} />
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>{recruit.full_name}</Card.Title>
                <Card.Text>
                  Position: {recruit.position}<br/>
                  Address: {recruit.address}<br/>
                  Bio: {recruit.bio}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  Salary: {recruit.salary}<br/>
                  Status: {recruit.status}<br/>
                  Type: {recruit.type}<br/>
                  Frequency: {recruit.frequency}
                </Card.Text>
              </Col>
            </Row>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Posting;
