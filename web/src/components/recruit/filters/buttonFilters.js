import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';



function ButtonFilters(props) {

    <script>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700&display=swap');
    </script>


    return (
        <div className=''>
            <Container className='bg-body-secondary rounded'>
                <Row sm="3" className='p-2'>
                    <Col>
                        <h1 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Roboto' }}> Status</h1>
                        <Form>
                            <div key={'status-closed'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={0}
                                    label={`Closed`}
                                    onChange={(e) => {
                                        const val = 0;
                                        if(e.target.checked) {
                                            props.setFilter((prev) => {
                                                return {
                                                    ...prev,
                                                    statuses: [
                                                        ...prev.statuses,
                                                        val
                                                    ]
                                                };
                                            });
                                        } else {
                                            props.setFilter((prev) => {
                                                // get rid of id from professions array
                                                const newStatus = prev.statuses.filter((status) => {
                                                    return status != val;
                                                });
                                                return {
                                                    ...prev,
                                                    statuses: newStatus
                                                };
                                            });
                                        }
                                    }}
                                />
                            </div>
                            <div key={'status-open'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={1}
                                    label={`Open`}
                                    onChange={(e) => {
                                        const val = 1;
                                        if (e.target.checked) {
                                            props.setFilter((prev) => {
                                                return {
                                                    ...prev,
                                                    statuses: [
                                                        ...prev.statuses,
                                                        val
                                                    ]
                                                };
                                            });
                                        } else {
                                            props.setFilter((prev) => {
                                                // get rid of id from professions array
                                                const newStatus = prev.statuses.filter((status) => {
                                                    return status != val;
                                                });
                                                return {
                                                    ...prev,
                                                    statuses: newStatus
                                                };
                                            });
                                        }
                                    }}
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
                                    id={0}
                                    label={`Remote`}
                                    onChange={(e) => {
                                        const val = 0;
                                        if(e.target.checked) {
                                            props.setFilter((prev) => {
                                                return {
                                                    ...prev,
                                                    types: [
                                                        ...prev.types,
                                                        val
                                                    ]
                                                };
                                            });
                                        } else {
                                            props.setFilter((prev) => {
                                                // get rid of id from professions array
                                                const newType = prev.types.filter((type) => {
                                                    return type != val;
                                                });
                                                return {
                                                    ...prev,
                                                    types: newType
                                                };
                                            });
                                        }
                                    }}
                                />
                            </div>

                            <div key={'Type-Hybrid'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={1}
                                    label={`Hybrid`}
                                    onChange={(e) => {
                                        const val = 1;
                                        if(e.target.checked) {
                                            props.setFilter((prev) => {
                                                return {
                                                    ...prev,
                                                    types: [
                                                        ...prev.types,
                                                        val
                                                    ]
                                                };
                                            });
                                        } else {
                                            props.setFilter((prev) => {
                                                // get rid of id from professions array
                                                const newType = prev.types.filter((type) => {
                                                    return type != val;
                                                });
                                                return {
                                                    ...prev,
                                                    types: newType
                                                };
                                            });
                                        }
                                    }}
                                />
                            </div>

                            <div key={'Type-Inperson'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={2}
                                    label={`In-Person`}
                                    onChange={(e) => {
                                        const val = 2;
                                        if(e.target.checked) {
                                            props.setFilter((prev) => {
                                                return {
                                                    ...prev,
                                                    types: [
                                                        ...prev.types,
                                                        val
                                                    ]
                                                };
                                            });
                                        } else {
                                            props.setFilter((prev) => {
                                                // get rid of id from professions array
                                                const newType = prev.types.filter((type) => {
                                                    return type != val;
                                                });
                                                return {
                                                    ...prev,
                                                    types: newType
                                                };
                                            });
                                        }
                                    }}
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
                                    onChange={(e) => {
                                        const val = 0;
                                        if(e.target.checked) {
                                            props.setFilter((prev) => {
                                                return {
                                                    ...prev,
                                                    frequencies: [
                                                        ...prev.frequencies,
                                                        val
                                                    ]
                                                };
                                            });
                                        } else {
                                            props.setFilter((prev) => {
                                                // get rid of id from professions array
                                                const newFreq = prev.frequencies.filter((freq) => {
                                                    return freq != val;
                                                });
                                                return {
                                                    ...prev,
                                                    frequencies: newFreq
                                                };
                                            });
                                        }
                                    }}
                                />
                            </div>
                            <div key={'Freq-Parttime'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`Freq-Parttime`}
                                    label={`Part-Time`}
                                    onChange={(e) => {
                                        const val = 1;
                                        if(e.target.checked) {
                                            props.setFilter((prev) => {
                                                return {
                                                    ...prev,
                                                    frequencies: [
                                                        ...prev.frequencies,
                                                        val
                                                    ]
                                                };
                                            });
                                        } else {
                                            props.setFilter((prev) => {
                                                // get rid of id from professions array
                                                const newFreq = prev.frequencies.filter((freq) => {
                                                    return freq != val;
                                                });
                                                return {
                                                    ...prev,
                                                    frequencies: newFreq
                                                };
                                            });
                                        }
                                    }}
                                />
                            </div>
                            <div key={'Freq-Fulltime'} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`Freq-Fulltime`}
                                    label={`Full-Time`}
                                    onChange={(e) => {
                                        const val = 2;
                                        if(e.target.checked) {
                                            props.setFilter((prev) => {
                                                return {
                                                    ...prev,
                                                    frequencies: [
                                                        ...prev.frequencies,
                                                        val
                                                    ]
                                                };
                                            });
                                        } else {
                                            props.setFilter((prev) => {
                                                // get rid of id from professions array
                                                const newFreq = prev.frequencies.filter((freq) => {
                                                    return freq != val;
                                                });
                                                return {
                                                    ...prev,
                                                    frequencies: newFreq
                                                };
                                            });
                                        }
                                    }}
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
