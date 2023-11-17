import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';



function ButtonFilters() {

    <script>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700&display=swap');
    </script>


    return (
        <div className=''>
            <Container className='bg-secondary'>
                <Row sm="3" className='p-2'>
                    <Col>
                        <h1 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Roboto' }}> Status</h1>
                        <Form>
                            <div key={'status-closed'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`status-closed`}
                                    label={`Closed`}
                                />
                            </div>
                            <div key={'status-open'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`status-open`}
                                    label={`Open`}
                                />
                            </div>
                        </Form>
                    </Col>
                    <Col>
                        <h1 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Roboto' }}>Type</h1>
                        <Form>
                            <div key={'Type-remote'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`Type-Remote`}
                                    label={`Remote`}
                                />
                            </div>

                            <div key={'Type-Hybrid'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`Type-Hybrid`}
                                    label={`Hybrid`}
                                />
                            </div>

                            <div key={'Type-Inperson'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`Type-Inperson`}
                                    label={`In-Person`}
                                />
                            </div>

                        </Form>
                    </Col>
                    <Col>
                        <h1 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Roboto' }}>Frequency</h1>
                        <Form>
                            <div key={'Freq-Contract'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`Freq-Contract`}
                                    label={`Contract`}
                                />
                            </div>
                            <div key={'Freq-Parttime'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`Freq-Parttime`}
                                    label={`Part-Time`}
                                />
                            </div>
                            <div key={'Freq-Fulltime'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`Freq-Fulltime`}
                                    label={`Full-Time`}
                                />
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ButtonFilters;
