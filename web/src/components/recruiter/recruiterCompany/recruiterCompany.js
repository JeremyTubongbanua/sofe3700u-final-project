import React from "react";
import { Form, Row, Col, Stack, Button, Image } from 'react-bootstrap'

function RecruiterCompany(props) {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <Form style={{ width: '100%', maxWidth: '800px' }}>
                <div className='p-4 d-flex flex-column align-items-stretch bg-secondary-subtle'>
                    <Row className="mb-2 flex-grow-1 align-self-stretch  ">
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>

                                <h1 style={{ fontSize: '18px' }}>
                                    ID: {props.id}
                                </h1>

                                <div className='image-container' style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                    <Image className="h-100 w-100" src={props.logo} rounded fluid />
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
                                    <Form.Control className='rounded-0' type="fullname" placeholder={props.company_name} />
                                </Form.Group>

                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control className='rounded-0' type="password" placeholder={props.company_description} />
                                </Form.Group>

                                <Form.Group controlId="formBio">
                                    <Form.Label>Description</Form.Label>
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

export default RecruiterCompany;
