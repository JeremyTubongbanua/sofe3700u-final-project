import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

function CompanyPostings() {
    const postings = [
        {
            id: 0,
            title: 'job_posting_title',
            salary: '$60,000 - $90,000',
            status: 'open',
            position: 'Software Engineer',
            type: 'Hybrid',
            picture: 'img_url' // Add a picture property to each posting
        },
        // More postings...
    ];

    const applicants = [
        {
            name: 'Applicant',
            bio: 'Bio',
            professions: 'Software Engineer',
            picture: 'img_url'
        },
        // More applicants...
    ];

    return (
        <Container className="bg-light p-5">
            {postings.map((post, index) => (
                <Card key={index} className="mb-3 p-3 bg-secondary">
                    <Row className="g-0">
                        <Col md={4}>
                            <Image src={post.picture} alt="Job" roundedCircle fluid /> {/* Display the picture */}
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>{`Posting ID ${post.id} | ${post.title}`}</Card.Title>
                                <Card.Text>{`Salary: ${post.salary}`}</Card.Text>
                                <Card.Text>{`Status: ${post.status}`}</Card.Text>
                                <Card.Text>{`Position: ${post.position}`}</Card.Text>
                                <Card.Text>{`Type: ${post.type}`}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            ))}
            <Row xs={1} md={2} className="g-4">
                {applicants.map((applicant, index) => (
                    <Col key={index}>
                        <Card className="h-100 p-3 bg-light">
                            <Row className="g-0">
                                <Col md={4}>
                                    <Image src={applicant.picture} alt="Profile" roundedCircle fluid />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>{applicant.name}</Card.Title>
                                        <Card.Text>{applicant.bio}</Card.Text>
                                        <Card.Text>{`Professions: ${applicant.professions}`}</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CompanyPostings;
