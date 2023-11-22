import React, { useState, useEffect } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

const cardStyles = {
  width: '100%',
  backgroundColor: 'grey',
};

const imgStyles = {
  border: '5px solid grey',
};

const cardBodyStyles = {
  display: 'flex',
  flexDirection: 'column',
};

function Posting(props) {

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    // convert filter to this format: { "job_posting_titles": ["Soft", "Data"], "company_names": ["Atsign", "Microsoft"], "professions": [], "salary": {   "min": 0,   "max": 1999999 }, "job_posting_statuses": ["Closed", "Open"], "job_posting_types": ["Hybrid", "Remote", "In-Person"], "job_posting_frequencies": ["Part-Time", "Full-Time", "Contract"]}

    // Remote = 0, Hybrid = 1, In-Person = 2
    // Contract = 0, Part-Time = 1, Full-Time = 2
    // Closed = 0, Open = 1


    let filter = {
      job_posting_titles: [],
      company_names: [],
      professions: [],
      salary: {
        min: -1,
        max: 1999999,
      },
      job_posting_statuses: [],
      job_posting_types: [],
      job_posting_frequencies: [],
    };

    filter.salary.min = props.filter.minSalary;

    filter.salary.max = props.filter.maxSalary;

    props.filter.professions.forEach((professionId) => {
      filter.professions.push(professionId);
    })

    props.filter.statuses.forEach((statusId) => {
      if (statusId === 0) {
        filter.job_posting_statuses.push('Closed');
      } else if (statusId === 1) {
        filter.job_posting_statuses.push('Open');
      }
    });

    props.filter.types.forEach((typeId) => {
      if (typeId === 1) {
        filter.job_posting_types.push('Hybrid');
      }
      else if (typeId === 0) {
        filter.job_posting_types.push('Remote');
      }
      else if (typeId === 2) {
        filter.job_posting_types.push('In-Person');
      }
    });

    props.filter.frequencies.forEach((frequencyId) => {
      if (frequencyId === 0) {
        filter.job_posting_frequencies.push('Contract');
      }
      else if (frequencyId === 1) {
        filter.job_posting_frequencies.push('Part-Time');
      }
      else if (frequencyId === 2) {
        filter.job_posting_frequencies.push('Full-Time');
      }
    });



    fetch('http://jeremymark.ca:3001/job_posting/filter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filter),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(filter);
        setJobPostings(data.data);
      }).catch((err) => {
        console.log(err);
      });
  }, [props.filter]);

  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {jobPostings.map((jobPostings, index) => (
        <Col key={index} className="p-3 d-flex">
          <Card className='w-100 bg-body-secondary'>

            <Card.Img variant="top" src={jobPostings.picture} className='overflow-hidden' style={{ height: '15rem', objectFit: 'cover' }} />
            <Card.Body className='d-flex flex-column h-100 '>
              <Card.Title>{jobPostings.job_posting_title}</Card.Title>
              <Card.Text style={{ fontSize: '1rem' }} className='flex-grow-1'>
                Company: {jobPostings.company_name}<br /><br />

                Description: {jobPostings.job_posting_description}
              </Card.Text>
              <Card.Text style={{ fontSize: '1rem' }} className='flex-grow-1'>
                Salary: {jobPostings.salary}<br />
                Status: {jobPostings.job_posting_status}<br />
                Type: {jobPostings.job_posting_type}<br />
                Frequency: {jobPostings.job_posting_frequency}
              </Card.Text>
              <div className="mt-auto flex-shrink-1">
                <Button variant="primary" className="w-50" onClick={
                  (e) => {
                    document.cookie = `jobPostingId=${jobPostings.id}`;
                    window.location.href = '/recruit/posting';
                  }
                }>Check Profile</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Posting;
