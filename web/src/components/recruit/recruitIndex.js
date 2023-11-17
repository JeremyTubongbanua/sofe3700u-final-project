import React from 'react';
import NavBar from './navBar';
import FilterIndex from './filters/filterIndex';
import SearchBar from './searchBar';
import Posting from './postings/posting';
import { Col, Container, Row, Stack } from 'react-bootstrap';



function RecruitIndex() {

    return (
        <div className='position-relative'>
            <NavBar />

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
        </div>
    );
}


export default RecruitIndex;
