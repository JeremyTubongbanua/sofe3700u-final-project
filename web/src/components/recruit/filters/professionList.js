import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profession from './profession';
import './professionList.css';


function ProfessionList() {
    // State to store the fetched data
    const [data, setData] = useState(null);
    // State to handle loading and error states
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://jeremymark.ca:3001/professions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers needed for your API
                },
                // Add any data needed for the POST request in the body
                body: JSON.stringify({
                    // Include any parameters your API requires
                }),
            });

            const result = await response.json();
            setData(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    // Use useEffect to make the API call when the component mounts
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    // Render components dynamically based on the fetched data
    return (
        <div className=''>
            <Container className='p-2 bg-secondary'>
                <h1 className='pb-2 prof-head mb-3'>Professions:</h1>
                <Row sm="5">
                    {data.map((professionData) => (
                        <Col>
                            <Profession key={professionData.id} name={professionData.profession} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>

    );
}

export default ProfessionList;