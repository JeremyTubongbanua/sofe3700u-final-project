import React, { useEffect } from 'react';
import ButtonFilters from './buttonFilters';
import ProfessionList from './professionList';
import SalaryRange from './salaryRange';
import { Container, Row, Col, Stack } from 'react-bootstrap';

function FilterIndex(props) {

    return (
        <div>
            <Container className=' rounded p-3 bg-dark-subtle d-flex flex-row'>
                <Row>
                    <Col>
                        <ProfessionList setFilter={props.setFilter} className="p-5" />
                    </Col>
                    <Col md="4">
                        <Stack gap={4}>

                            <ButtonFilters setFilter={props.setFilter} className="p-5" />
                            <div>
                                <SalaryRange setFilter={props.setFilter} />
                            </div>
                        </Stack>
                    </Col>
                </Row>

            </Container>
        </div >
    );
}

export default FilterIndex;
