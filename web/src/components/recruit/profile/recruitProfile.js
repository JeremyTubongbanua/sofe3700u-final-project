import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row, Image, Stack } from 'react-bootstrap';

function RecruitProfile(props) {

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
                                    <Image className="h-100 w-100" src={"https://i.imgur.com/SbwZN0K.png"} rounded fluid />
                                </div>

                                <Form.Group controlId="formStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control className='rounded-0' value={props.recruit_status} onChange={(e) => {
                                        props.setRecruitStatus(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formProfession">
                                    <Form.Label>Professions</Form.Label>
                                    <Form.Control className='rounded-0' value={props.professions} onChange={(e) => {
                                        props.setProfessions(e.target.value);
                                    }} />
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
                                    <Form.Control className='rounded-0' type="fullname" value={props.full_name} onChange={(e) => {
                                        props.setFullName(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className='rounded-0' type="password" value={props.pass_hash} onChange={(e) => {
                                        props.setPassHash(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control className='rounded-0' value={props.recruit_location} onChange={(e) => {
                                        props.setRecruitLocation(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formResume">
                                    <Form.Label>Resume URL</Form.Label>
                                    <Form.Control className='rounded-0' value={props.recruit_resume} onChange={(e) => {
                                        props.setRecruitResume(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formBio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control className='rounded-0' style={{ resize: 'none' }} as="textarea" rows={6} value={props.bio}

                                        onChange={(e) => {
                                            props.setBio(e.target.value);
                                        }}
                                    />
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
