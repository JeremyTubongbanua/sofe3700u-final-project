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
                        setJobPostings(data.data);
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
            {jobPostings.map((post, index) => (
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
                </Card>
            ))}
        </Container>
    );
}

export default CompanyPostings;
