import React, { useState, useEffect } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

function Posting() {
  const [recruits, setRecruits] = useState([]);

  useEffect(() => {
    // Replace this with your own data
    const data = [
      {
        picture: 'https://cdn.discordapp.com/attachments/1142192592256258080/1176044378716901466/image.png?ex=656d6fad&is=655afaad&hm=b9928a0d2c54cce9e3d8b6d4ad0caad66bb44f71d54a925bd06e843803a7a0a4&',
        full_name: 'Full Name',
        bio: 'Bio',
        position: 'Position',
        address: 'Address',
        salary: 'Salary',
        status: 'Status',
        type: 'Type',
        frequency: 'Frequency'
      },
      {
        picture: 'https://cdn.discordapp.com/attachments/1142192592256258080/1176044378716901466/image.png?ex=656d6fad&is=655afaad&hm=b9928a0d2c54cce9e3d8b6d4ad0caad66bb44f71d54a925bd06e843803a7a0a4&',
        full_name: 'Full Name',
        bio: 'Bio',
        position: 'Position',
        address: 'Address',
        salary: 'Salary',
        status: 'Status',
        type: 'Type',
        frequency: 'Frequency'
      },
      {
        picture: 'https://cdn.discordapp.com/attachments/1142192592256258080/1176044378716901466/image.png?ex=656d6fad&is=655afaad&hm=b9928a0d2c54cce9e3d8b6d4ad0caad66bb44f71d54a925bd06e843803a7a0a4&',
        full_name: 'Full Name',
        bio: 'Bio',
        position: 'Position',
        address: 'Address',
        salary: 'Salary',
        status: 'Status',
        type: 'Type',
        frequency: 'Frequency'
      },
      {
        picture: 'https://cdn.discordapp.com/attachments/1142192592256258080/1176044378716901466/image.png?ex=656d6fad&is=655afaad&hm=b9928a0d2c54cce9e3d8b6d4ad0caad66bb44f71d54a925bd06e843803a7a0a4&',
        full_name: 'Full Name',
        bio: 'Bio',
        position: 'Software Engineer',
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
        <Card key={index} style={{ width: '19rem', margin: '10px', backgroundColor: 'grey' }}>
          <Card.Img variant="top" src={recruit.picture} style={{ border: '5px solid grey' }} />
          <Card.Body style={{ padding: '20px' }}>
            <Row>
              <Col style={{ paddingRight: '20px' }}>
                <Card.Title>{recruit.full_name}</Card.Title>
                <Card.Text style={{ marginBottom: '20px', fontSize: '0.75rem' }}>
                  Position: {recruit.position}<br/>
                  Address: {recruit.address}<br/>
                  Bio: {recruit.bio}
                </Card.Text>
              </Col>
              <Col style={{ paddingLeft: '20px' }}>
                <Card.Text style={{ marginBottom: '20px', fontSize: '0.75rem' }}>
                  Salary: {recruit.salary}<br/>
                  Status: {recruit.status}<br/>
                  Type: {recruit.type}<br/>
                  Frequency: {recruit.frequency}
                </Card.Text>
              </Col>
            </Row>
            <Button variant="primary" style={{ marginTop: '20px' }}>Check Profile</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Posting;
