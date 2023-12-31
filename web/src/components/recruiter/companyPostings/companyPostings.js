import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './companyPostings.css'

function CompanyPostings() {
    /**
     * [
        {
            "id": 2,
            "company_id": 1,
            "job_posting_title": "Project Manager",
            "job_posting_description": "Someone to manage the google developers in their weekly scrum meetings and facilitate team activity and meetings.",
            "salary": 50000,
            "picture": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "job_posting_status": "Open",
            "job_posting_type": "Remote",
            "job_posting_frequency": "Contract",
            "professions": [
                "Sales",
                "Data Science",
                "Data Analytics"
            ]
        }
    ]
     */
    const [recruiterId, setRecruiterId] = useState('');
    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        let url = 'http://jeremymark.ca:3001/recruiter/u_name';
        fetch(url, {
            'method': 'POST',
            'body': JSON.stringify({
                u_name: document.cookie.split('; ').find(row => row.startsWith('u_name')).split('=')[1]
            }),
            'headers': {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            if (data.message === 'success') {
                setRecruiterId(data.data.id);
                let url = 'http://jeremymark.ca:3001/company/job_postings';
                fetch(url, {
                    'method': 'POST',
                    'body': JSON.stringify({
                        id: data.data.id
                    }),
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => res.json()).then((data) => {
                    if (data.message === 'success') {
                        let jobPostings = data.data;
                        for (let i = 0; i < jobPostings.length; i++) {
                            let url = 'http://jeremymark.ca:3001/job_application/job_postingid';
                            fetch(url, {
                                'method': 'POST',
                                'body': JSON.stringify({
                                    id: jobPostings[i].id
                                }),
                                'headers': {
                                    'Content-Type': 'application/json'
                                }
                            }).then((res) => res.json()).then((data) => {
                                if (data.message === 'success') {
                                    jobPostings[i]['applicants'] = data.data;
                                    setJobPostings(jobPostings);
                                } else {
                                    alert(data.data);
                                }
                            }).catch((err) => { alert(err) });
                        }
                    } else {
                        alert(data.data);
                    }
                }).catch((err) => { alert(err) });
            } else {
                alert(data.data);
            }
        }).catch((err) => { alert(err) });

    }, []);

    return (
        <Container className="bg-dark-subtle rounded p-4 my-5">
            {jobPostings.map((post, index) => {
                console.log(post);
                let applicants = post['applicants'];
                return (
                    <Card key={index} className="mb-3 p-3 bg-body-secondary">
                        <Row className="g-0">
                            <Col md={4} className='d-flex justify-content-center align-items-center'>
                                <Image src={post.picture} alt="Job" rounded fluid className='border border-dark border-2' style={{ height: '300px', width: '100%', objectFit: 'cover' }} /> {/* Display the picture */}
                            </Col>
                            <Col md={8} className="px-4 d-flex justify-content-center text-start">
                                <Card.Body>
                                    <Card.Title className='fs-3 text' >{`Posting ID: ${post.id} | ${post.job_posting_title}`}</Card.Title>
                                    <br></br>
                                    <Card.Text>{`Salary: ${post.salary}`}</Card.Text>
                                    <Card.Text>{`Status: ${post.job_posting_status}`}</Card.Text>
                                    <Card.Text>{`Position: ${post.job_posting_title}`}</Card.Text>
                                    <Card.Text>{`Type: ${post.job_posting_type}`}</Card.Text>
                                    <Card.Text>{`Frequency: ${post.job_posting_frequency}`}</Card.Text>
                                    <Card.Text>{`Description: ${post.job_posting_description}`}</Card.Text>
                                    <Card.Text>{`Professions: ${post.professions}`}</Card.Text>
                                    <Button variant="primary" className='w-25'>Edit</Button> {/* Edit button */}
                                </Card.Body>
                            </Col>
                        </Row>
                        <Row className="g-0">
                            {applicants && applicants.map((applicant, index) => (
                                <Col md={4} key={index}>
                                    <Card className="h-100 p-3 bg-light">
                                        <Row className="g-0">
                                            <Col md={4}>
                                                <Image src={applicant.picture} alt="Profile" className='border border-dark border-1' rounded fluid style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                                            </Col>
                                            <Col md={8}>
                                                <Card.Body>
                                                    <Card.Title>{applicant.name}</Card.Title>
                                                    <Card.Body className='text-start'>
                                                        <Card.Title className='fw-medium text-decoration-underline'>{applicant.name}</Card.Title>
                                                        <Card.Text>{applicant.bio}</Card.Text>
                                                        <Card.Text>Professions: {applicant.professions.join(', ')}</Card.Text>
                                                        <Card.Text>ID: {applicant.id}</Card.Text>
                                                        <Card.Text>Location: {applicant.recruit_location}</Card.Text>
                                                        <Card.Text>Resume: {applicant.recruit_resume}</Card.Text>
                                                        <Card.Text>Username: {applicant.u_name}</Card.Text>
                                                        <Card.Text>Status: {applicant.recruit_status}</Card.Text>
                                                    </Card.Body>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                );
            })}
        </Container>
    );
}

export default CompanyPostings;
