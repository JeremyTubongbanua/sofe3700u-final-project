import React, { useEffect, useState } from "react";
import { Form, Row, Col, Stack, Button, Image } from 'react-bootstrap'

function RecruiterCompany() {

    const [id, setId] = useState('');
    const [companyName, setCompanyName] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [companyLocation, setCompanyLocation] = useState("");
    const [logo, setLogo] = useState("");

    useEffect(() => {
        const u_name = document.cookie.split('; ').find(row => row.startsWith('u_name')).split('=')[1];
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
                let url = 'http://jeremymark.ca:3001/company/id';
                fetch(url, {
                    'method': 'POST',
                    'body': JSON.stringify({
                        id: data.data.company_id
                    }),
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => res.json()).then((data) => {
                    if (data.message === 'success') {
                        setId(data.data.id);
                        setCompanyName(data.data.company_name);
                        setCompanyLocation(data.data.company_location);
                        setCompanyDescription(data.data.company_description);
                        setLogo(data.data.logo);
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
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <Form style={{ width: '100%', maxWidth: '800px' }}>
                <div className='p-4 d-flex flex-column align-items-stretch bg-secondary-subtle rounded-1'>
                    <Row className="mb-2 flex-grow-1 align-self-stretch  ">
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>

                                <h1 style={{ fontSize: '18px' }}>
                                    ID: {id}
                                </h1>

                                <div className='image-container' style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                    <Image className="h-100 w-100 border border-black border-2" src={logo} rounded fluid />
                                </div>

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
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control className='rounded-1' type="fullname" placeholder={companyName} />
                                </Form.Group>

                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control className='rounded-1' type="password" placeholder={companyLocation} />
                                </Form.Group>

                                <Form.Group controlId="formBio">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control className='rounded-1' style={{ resize: 'none' }} as="textarea" rows={6} placeholder={companyDescription} />
                                </Form.Group>
                            </Stack>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    );
}

export default RecruiterCompany;
