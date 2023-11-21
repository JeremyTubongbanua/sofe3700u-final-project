import React from 'react';
import { Container, Form } from 'react-bootstrap';

function SearchBar() {
    return (
        <div>
            <Container className='rounded p-3 bg-dark-subtle'>

                <Form className='mb-0'>
                    <Form.Group>
                        <Form.Control className="bg-body-secondary py-3" type="search" placeholder='Search for Job Posting...' />
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}

export default SearchBar;
