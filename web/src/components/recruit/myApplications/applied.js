
import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Applied(props) {
    // Component logic goes here

    const [jobPostings, setJobPostings] = useState([]);

    const [ids, setIds] = useState([]);
    const [salaries, setSalaries] = useState([]);
    const [job_posting_statuses, setJobPostingStatuses] = useState([]);
    const [job_posting_titles, setJobPostingTitles] = useState([]);
    const [job_posting_types, setJobPostingTypes] = useState([]);
    const [job_posting_frequencies, setJobPostingFrequencies] = useState([]);
    const [pictures, setPictures] = useState([]);


    useEffect(() => {
        const u_name = document.cookie.split('; ').find(row => row.startsWith('u_name')).split('=')[1];
        fetch('http://jeremymark.ca:3001/recruit/u_name', {
            method: 'POST',
            body: JSON.stringify({
                u_name: u_name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            fetch('http://jeremymark.ca:3001/job_posting/recruit_id', {
                method: 'POST',
                body: JSON.stringify({
                    id: data.data.id
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setJobPostings(data.data);
                    data.data.map((jobPosting) => {
                        fetch('http://jeremymark.ca:3001/job_posting/id', {
                            method: 'POST',
                            body: JSON.stringify({
                                id: jobPosting.job_posting_id
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                setIds([...ids, data.data.id]);
                                setSalaries([...salaries, data.data.salary]);
                                setJobPostingStatuses([...job_posting_statuses, data.data.job_posting_status]);
                                setJobPostingTitles([...job_posting_titles, data.data.job_posting_title]);
                                setJobPostingTypes([...job_posting_types, data.data.job_posting_type]);
                                setJobPostingFrequencies([...job_posting_frequencies, data.data.job_posting_frequency]);
                                setPictures([...pictures, data.data.picture]);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                        .catch((err) => {
                            console.log(err);
                        });
                }).catch((err) => {
                    console.log(err);
                });
        }, []);
    }, []);

    return (
        <div>
            {jobPostings.map((jobPosting, index) => {
                console.log(ids);

                console.log(jobPostings);
                console.log(ids);
                console.log(salaries);
                console.log(job_posting_statuses);
                console.log(job_posting_titles);
                console.log(job_posting_types);
                console.log(job_posting_frequencies);
                console.log(pictures);
                return (
                    <Row key={index} className="g-0">
                        <Col md="4">
                            <Card.Img src={pictures[index]} alt="..." />
                        </Col>
                        <Col md="8">
                            <Card.Body>
                                <Card.Title>{job_posting_titles[index]}</Card.Title>
                                <Card.Text>
                                    <p>Salary: {salaries[index]}</p>
                                    <p>Frequency: {job_posting_frequencies[index]}</p>
                                    <p>Type: {job_posting_types[index]}</p>
                                    <p>Status: {job_posting_statuses[index]}</p>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                );
            })}
        </div>
    )
}

export default Applied;
