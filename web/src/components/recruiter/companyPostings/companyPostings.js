import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import './companyPostings.css'

function CompanyPostings() {
    const postings = [
        {
            id: 0,
            title: 'job_posting_title',
            salary: '$60,000 - $90,000',
            status: 'open',
            position: 'Software Engineer',
            type: 'Hybrid',
            picture: 'https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Add a picture property to each posting
        },
        // More postings...
    ];

    const applicants = [
        {
            name: 'Applicant',
            bio: 'Bio',
            professions: 'Software Engineer',
            picture: 'https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            name: 'Applicant',
            bio: 'Bio',
            professions: 'Software Engineer',
            picture: 'https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            name: 'Applicant',
            bio: 'Bio',
            professions: 'Software Engineer',
            picture: 'https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        // More applicants...
    ];

    return (
        <Container className="bg-dark-subtle rounded p-4 my-5">
            {postings.map((post, index) => (
                <Card key={index} className="mb-3 p-3 bg-body-secondary">
                    <Row className="g-0">
                        <Col md={4}>
                            <Image src={post.picture} alt="Job" rounded fluid className='border border-dark border-2' style={{ height: '300px', width: '100%', objectFit: 'cover' }} /> {/* Display the picture */}
                        </Col>
                        <Col md={8} className="d-flex justify-content-center align-items-center">
                            <Card.Body>
                                <Card.Title className='fs-3 text' >{`Posting ID: ${post.id} | ${post.title}`}</Card.Title>
                                <br></br>
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
                                    <Image src={applicant.picture} alt="Profile" className='border border-dark border-1' rounded fluid style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body className='text-start'>
                                        <Card.Title className='fw-medium text-decoration-underline'>{applicant.name}</Card.Title>
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
