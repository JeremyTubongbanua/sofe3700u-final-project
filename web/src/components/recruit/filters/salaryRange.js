import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

function SalaryRange(props) {
  const [salary, setSalary] = useState({ min: 0, max: 100000 });

  const handleInputChange = (e) => {
    setSalary({ ...salary, [e.target.name]: parseFloat(e.target.value) });
  };

  useEffect(() => {
    props.setFilter((prev) => {
      return { ...prev, minSalary: salary.min, maxSalary: salary.max };
    });
  }, [salary]);

  return (
    <Container fluid>
      <Row className="justify-content-start align-items-start">
        <Col xs={12} md={12} className="bg-body-secondary rounded p-4 d-flex flex-column align-items-center">
          <p className="mb-4 text-center">Salary Range</p>
          <div className="d-flex justify-content-between w-75">
            <Form.Group controlId="formMinSalary" className="mr-2 w-75">
              <Form.Control
                type="number"
                name="min"
                placeholder="Min Salary"
                value={salary.min}
                onChange={handleInputChange}
                className="w-100"
              />
            </Form.Group>
            <div className="my-2 mx-2 text-center">to</div>
            <Form.Group controlId="formMaxSalary" className="ml-2 w-75">
              <Form.Control
                type="number"
                name="max"
                placeholder="Max Salary"
                value={salary.max}
                onChange={handleInputChange}
                className="w-100"
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SalaryRange;
