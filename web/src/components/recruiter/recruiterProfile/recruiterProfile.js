
import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Stack, Button, Image } from 'react-bootstrap'

function RecruiterProfile(props) {

    const [u_name, setUName] = useState('');
    const [fullName, setFullName] = useState('');
    const [passHash, setPassHash] = useState('');
    const [picture, setPicture] = useState('');
    const [bio, setBio] = useState('');
    const [company, setCompany] = useState('');
    const [professions, setProfessions] = useState('');
    const [recruiterLocation, setRecruiterLocation] = useState('');

    useEffect(() => {
        // read u_name from cookie
        const u_name = document.cookie.split('; ').find(row => row.startsWith('u_name')).split('=')[1];
        // fetch recruiter data
        let url = 'http://jeremymark.ca:3001/recruiter/u_name';
        fetch(url, {
            'method': 'POST',
            'body': JSON.stringify({
                u_name: u_name
            }),
            'headers': {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            if (data.message === 'success') {
                setUName(data.data.u_name);
                setFullName(data.data.full_name);
                setPassHash(data.data.pass_hash);
                setPicture(data.data.picture);
                setBio(data.data.bio);
                setCompany(data.data.company_id);
                setProfessions(data.data.professions);
                setRecruiterLocation(data.data.recruiter_location);
            } else {
                alert(data.data);
            }
        }).catch((err) => { alert(err) });
    }, []);

    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <Form style={{ width: '100%', maxWidth: '800px' }}>
                <div className='p-4 d-flex flex-column align-items-stretch bg-secondary-subtle'>
                    <Row className="mb-2 flex-grow-1 align-self-stretch  ">
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>

                                <h1 style={{ fontSize: '18px' }}>
                                    Username: {u_name}
                                </h1>

                                <div className='image-container' style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                    <Image className="h-100 w-100" src={picture} rounded fluid />
                                </div>

                                <Form.Group controlId="formStatus">
                                    <Form.Label>Current Company</Form.Label>
                                    <Form.Control className='rounded-0' placeholder={company} />
                                </Form.Group>

                                <Form.Group controlId="formProfession">
                                    <Form.Label>Professions</Form.Label>
                                    <Form.Control className='rounded-0' placeholder={professions} />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Stack>
                        </Col>

                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>
                                <Form.Group controlId="formGridUsername">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control className='rounded-0' type="fullname" placeholder={fullName} />
                                </Form.Group>

                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className='rounded-0' type="password" placeholder={passHash} />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control className='rounded-0' placeholder={recruiterLocation} />
                                </Form.Group>

                                <Form.Group controlId="formBio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control className='rounded-0' style={{ resize: 'none' }} as="textarea" rows={6} placeholder={bio} />
                                </Form.Group>
                            </Stack>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    );
}

export default RecruiterProfile;
