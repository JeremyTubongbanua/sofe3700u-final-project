
import React from 'react';
import { Form, Row, Col, Stack, Button, Image } from 'react-bootstrap'

function RecruiterProfile(props) {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <Form style={{ width: '100%', maxWidth: '800px' }}>
                <div className='p-4 d-flex flex-column align-items-stretch bg-secondary-subtle'>
                    <Row className="mb-2 flex-grow-1 align-self-stretch  ">
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>

                                <h1 style={{ fontSize: '18px' }}>
                                    Username: {props.u_name}
                                </h1>

                                <div className='image-container' style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                    <Image className="h-100 w-100" src="https://cdn.discordapp.com/attachments/1038256818083868707/1176061766631948318/image.png?ex=656d7fdf&is=655b0adf&hm=60512be52331b503c56a5245c7e27f01aaec23071b0fa53f18cc4eab3d50204a&" rounded fluid />
                                </div>

                                <Form.Group controlId="formStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control className='rounded-0' placeholder={props.recruit_status} />
                                </Form.Group>

                                <Form.Group controlId="formProfession">
                                    <Form.Label>Professions</Form.Label>
                                    <Form.Control className='rounded-0' placeholder={props.professions} />
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
                                    <Form.Control className='rounded-0' type="fullname" placeholder={props.full_name} />
                                </Form.Group>

                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className='rounded-0' type="password" placeholder={props.pass_hash} />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control className='rounded-0' placeholder={props.recruit_location} />
                                </Form.Group>

                                <Form.Group controlId="formBio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control className='rounded-0' style={{ resize: 'none' }} as="textarea" rows={6} placeholder={props.bio} />
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
