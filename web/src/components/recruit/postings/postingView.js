import React, { useEffect, useState } from 'react';
import { Col, Form, Image, Row, Stack, Button } from 'react-bootstrap';

function PostingView(props) {
    const [companyName, setCompanyName] = useState(props.company_name);
    const [jobTitle, setJobTitle] = useState(props.job_posting_title);
    const [jobDescription, setJobDescription] = useState(props.job_posting_description);
    const [salary, setSalary] = useState(props.salary);
    const [professions, setProfessions] = useState(props.professions);
    const [postingID, setPostingID] = useState(props.id);
    const [postingStatus, setPostingStatus] = useState(props.job_posting_status);
    const [postingType, setPostingType] = useState(props.job_posting_type);
    const [postingFrequency, setPostingFrequency] = useState(props.job_posting_frequency);
    const [picture, setPicture] = useState(props.picture);

    useEffect(() => {
        const jobPostingId = document.cookie.split('; ').find(row => row.startsWith('jobPostingId')).split('=')[1];
        const url = 'http://jeremymark.ca:3001/job_posting/id';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: jobPostingId }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCompanyName(data.data.company_name);
                setJobTitle(data.data.job_posting_title);
                setJobDescription(data.data.job_posting_description);
                setSalary(data.data.salary);
                setProfessions(data.data.professions);
                setPostingID(data.data.id);
                setPostingStatus(data.data.job_posting_status);
                setPostingType(data.data.job_posting_type);
                setPostingFrequency(data.data.job_posting_frequency);
                setPicture(data.data.picture);
            }).catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <Form style={{ width: '100%', maxWidth: '800px' }}>
                <div className='p-4 d-flex flex-column align-items-stretch bg-secondary-subtle'>
                    <Row className="mb-2 flex-grow-1 align-self-stretch">
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>

                                <h1 style={{ fontSize: '18px' }}>
                                    Company: {companyName}
                                </h1>

                                <div className='image-container' style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                    <Image className="h-100 w-100" src={picture} rounded fluid />
                                </div>


                                <Form.Group controlId="formJobTitle">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={jobTitle} disabled />
                                </Form.Group>

                                <Form.Group controlId="formSalary">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={salary} disabled />
                                </Form.Group>

                                <Form.Group controlId="formRequestedProfessions">
                                    <Form.Label>Requested Professions/Degrees</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={professions} disabled />
                                </Form.Group>
                            </Stack>
                        </Col>

                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>
                                <Form.Group controlId="formJobDescription">
                                    <Form.Label>Job Description</Form.Label>
                                    <Form.Control className='rounded-0' style={{ resize: 'none' }} as="textarea" rows={5} placeholder={jobDescription} disabled />
                                </Form.Group>

                                <Form.Group controlId="formPostingID">
                                    <Form.Label>Posting ID</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={postingID} disabled />
                                </Form.Group>

                                <Form.Group controlId="formPostingStatus">
                                    <Form.Label>Job Posting Status</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={postingStatus} disabled />
                                </Form.Group>

                                <Form.Group controlId="formPostingType">
                                    <Form.Label>Job Posting Type</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={postingType} disabled />
                                </Form.Group>

                                <Form.Group controlId="formPostingFreq">
                                    <Form.Label>Job Posting Frequency</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={postingFrequency} disabled />
                                </Form.Group>


                            </Stack>
                        </Col>

                        <Form.Group>
                            <Button variant="primary" className='w-100 mt-4' onClick={
                                (e) => {
                                    let url = 'http://jeremymark.ca:3001/recruit/u_name';
                                    fetch(url, {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({ u_name: document.cookie.split('; ').find(row => row.startsWith('u_name')).split('=')[1] }),
                                    })
                                        .then((response) => response.json())
                                        .then((data) => {
                                            if (data.message === 'success') {
                                                const recruit_id = data.data.id;
                                                const jobPostingId = document.cookie.split('; ').find(row => row.startsWith('jobPostingId')).split('=')[1];
                                                const url = 'http://jeremymark.ca:3001/job_application/recruitapply';
                                                fetch(url, {
                                                    method: 'PUT',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                    body: JSON.stringify({ recruit_id: parseInt(recruit_id), job_posting_id: parseInt(jobPostingId) }),
                                                })
                                                    .then((response) => response.json())
                                                    .then((data) => {
                                                        console.log(data);
                                                        if (data.message === 'success') {
                                                            alert('Application Submitted!');
                                                        } else {
                                                            alert(data.message + ': ' + JSON.stringify(data.error));
                                                        }
                                                    }).catch((err) => {
                                                        alert(err);
                                                    });
                                            } else {
                                                alert('Did not find ' + data.data);
                                            }
                                        }).catch((err) => {
                                            console.log(err);
                                        });
                                }
                            }>
                                Apply
                            </Button>
                        </Form.Group>
                    </Row>
                </div>
            </Form>
        </div>
    );
}

export default PostingView;
