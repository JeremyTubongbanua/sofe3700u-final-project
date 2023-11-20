import React from 'react';
import { Col, Form, Image, Row, Stack } from 'react-bootstrap';

function PostingView(props) {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <Form style={{ width: '100%', maxWidth: '800px' }}>
                <div className='p-4 d-flex flex-column align-items-stretch bg-secondary-subtle'>
                    <Row className="mb-2 flex-grow-1 align-self-stretch">
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>

                                <h1 style={{ fontSize: '18px' }}>
                                    Company: {props.companyName}
                                </h1>

                                <div className='image-container' style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                    <Image className="h-100 w-100" src='https://cdn.discordapp.com/attachments/1038256818083868707/1175085570297438208/rn_image_picker_lib_temp_d58a0aa6-095d-4938-befb-0356998c9ff3.jpg?ex=6569f2b7&is=65577db7&hm=9e98898f5b574d7a4d7cdf66b510e0db7a137a2a763ea96d077d97d619be5ae2&' rounded fluid />
                                </div>


                                <Form.Group controlId="formJobTitle">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={props.jobTitle} disabled />
                                </Form.Group>

                                <Form.Group controlId="formSalary">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={props.salary} disabled />
                                </Form.Group>

                                <Form.Group controlId="formRequestedProfessions">
                                    <Form.Label>Requested Professions/Degrees</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={props.requestedProfessions} disabled />
                                </Form.Group>
                            </Stack>
                        </Col>

                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>
                                <Form.Group controlId="formJobDescription">
                                    <Form.Label>Job Description</Form.Label>
                                    <Form.Control className='rounded-0' style={{ resize: 'none' }} as="textarea" rows={5} placeholder={props.jobDescription} disabled />
                                </Form.Group>

                                <Form.Group controlId="formPostingID">
                                    <Form.Label>Posting ID</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={props.postingID} disabled />
                                </Form.Group>

                                <Form.Group controlId="formPostingStatus">
                                    <Form.Label>Job Posting Status</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={props.postingID} disabled />
                                </Form.Group>

                                <Form.Group controlId="formPostingType">
                                    <Form.Label>Job Posting Type</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={props.postingID} disabled />
                                </Form.Group>

                                <Form.Group controlId="formPostingFreq">
                                    <Form.Label>Job Posting Frequency</Form.Label>
                                    <Form.Control className='rounded-0' type="text" placeholder={props.postingID} disabled />
                                </Form.Group>
                            </Stack>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    );
}

export default PostingView;
