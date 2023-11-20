
import React from 'react';
import SearchBar from '../searchBar/searchBar';
import FilterIndex from '../filters/filterIndex';
import Posting from '../postings/posting';
import { Container, Row, Col, Stack } from 'react-bootstrap';

function RecruitHome() {
    return (
        <Stack gap={5} className='mt-5'>
            <SearchBar />
            <FilterIndex />
            <Container>
                <Row>
                    <Col>
                        <Posting />
                    </Col>
                </Row>
            </Container>
        </Stack>
    );
}

export default RecruitHome;
