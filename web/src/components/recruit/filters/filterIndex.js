import React from 'react';
import ButtonFilters from './buttonFilters';
import ProfessionList from './professionList';
import { Container, Row, Col, Stack } from 'react-bootstrap';

function FilterIndex() {

    return (
        <div>
            <Container className=' p-3 bg-danger d-flex flex-row'>
                <Row>
                    <Col>
                        <ProfessionList className="p-5" />
                    </Col>
                    <Col md="4">
                        <Stack gap={4}>

                            <ButtonFilters className="p-5" />
                            <div className='bg-black p-5'>
                                meow
                            </div>
                        </Stack>
                    </Col>
                </Row>

            </Container>
        </div >
    );
}

export default FilterIndex;
