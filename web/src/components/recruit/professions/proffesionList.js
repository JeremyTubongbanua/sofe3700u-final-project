import React, { useState, useEffect } from 'react';
import Profession from './profession';


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
        <div>
            {data.map((professionData) => (
                <Profession key={professionData.id} name={professionData.profession} />
            ))}
        </div>
    );
}

export default ProfessionList;