import React from 'react';
import { Button, Col, Form, Row, Image, Stack } from 'react-bootstrap';

function RecruitProfile(props) {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <Form>
                <div className='p-4'>
                    <Row className="mb-2">
                        <Col xs={12} md={6}>
                            <Stack gap={3}>

                                <h1 style={{ fontSize: '18px' }}>
                                    Username:
                                </h1>

                                <div className='mh-100 d-flex justify-content-center align-items-center' style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                                    <Image className="h-auto w-100" src='https://cdn.discordapp.com/attachments/1038256818083868707/1175085570297438208/rn_image_picker_lib_temp_d58a0aa6-095d-4938-befb-0356998c9ff3.jpg?ex=6569f2b7&is=65577db7&hm=9e98898f5b574d7a4d7cdf66b510e0db7a137a2a763ea96d077d97d619be5ae2&' rounded fluid />
                                </div>

                                <Form.Group controlId="formStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control placeholder={props.status} disabled />
                                </Form.Group>

                                <Form.Group controlId="formProfession">
                                    <Form.Label>Professions</Form.Label>
                                    <Form.Control placeholder={props.profession} disabled />
                                </Form.Group>
                            </Stack>
                        </Col>

                        <Col xs={12} md={6}>
                            <Stack gap={3}>
                                <Form.Group controlId="formGridUsername">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="fullname" placeholder={props.fullname} disabled />
                                </Form.Group>

                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder={props.password} disabled />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder={props.address} disabled />
                                </Form.Group>

                                <Form.Group controlId="formResume">
                                    <Form.Label>Resume URL</Form.Label>
                                    <Form.Control placeholder={props.resume} disabled />
                                </Form.Group>

                                <Form.Group controlId="formBio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control placeholder={props.bio} disabled />
                                </Form.Group>
                            </Stack>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    );
}

export default RecruitProfile;
