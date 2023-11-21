
import React, {useEffect, useState} from 'react';
import SearchBar from '../searchBar/searchBar';
import FilterIndex from '../filters/filterIndex';
import Posting from '../postings/posting';
import { Container, Row, Col, Stack } from 'react-bootstrap';

function RecruitHome() {

    const [filter, setFilter] = useState({
        minSalary: -1,
        maxSalary: -1,
        statuses: [],
        types: [],
        frequencies: [],
        professions: [],
    });

    useEffect(() => {
        console.log(filter);
    }, [filter]);

    return (
        <Stack gap={5} className='mt-5'>
            <SearchBar />
            <FilterIndex setFilter={setFilter} />
            <Container>
                <Row>
                    <Col>
                        <Posting filter={filter} />
                    </Col>
                </Row>
            </Container>
        </Stack>
    );
}

export default RecruitHome;
