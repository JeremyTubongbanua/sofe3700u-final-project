import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Applied(props) {
    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        const u_name = document.cookie.split('; ').find(row => row.startsWith('u_name')).split('=')[1];
        fetch('http://jeremymark.ca:3001/recruit/u_name', {
            method: 'POST',
            body: JSON.stringify({
                u_name: u_name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            fetch('http://jeremymark.ca:3001/job_posting/recruit_id', {
                method: 'POST',
                body: JSON.stringify({
                    id: data.data.id
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setJobPostings(data.data);
                }).catch((err) => { alert(err) });
        }).catch((err) => { alert(err) });
    }, []);

    return (
        <div>
            <Row className="mb-3">
                {jobPostings.map((jobPosting, index) => {
                    return (
                        <Col key={index} xs={12} md={4} className="mb-3">
                            <Card className="h-100" style={{ width: '100%' }} onClick={() => {
                                document.cookie = `jobPostingId=${jobPosting.id}`;
                                window.location.href = '/recruit/posting';
                            }}>
                                {/* small card image */}
                                <Card.Img variant="top" src={jobPosting.picture} style={{ objectFit: 'cover', height: '200px' }} />
                                <Card.Body>
                                    <Card.Title>{jobPosting.job_posting_title}</Card.Title>
                                    <Card.Text>{jobPosting.job_posting_description}</Card.Text>
                                    <Card.Text>{jobPosting.job_posting_type}</Card.Text>
                                    <Card.Text>{jobPosting.job_posting_status}</Card.Text>
                                    <Card.Text>{jobPosting.salary}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default Applied;
