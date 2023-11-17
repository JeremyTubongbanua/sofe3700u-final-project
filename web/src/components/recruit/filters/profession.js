import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Profession(props) {

    return (
        <div className='pd'>
            <Form>
                <div className="md-3">
                    <Form.Check
                        type='checkbox'
                        id={props.id}
                        label={props.name}
                    />
                </div>
            </Form>
        </div>
    );
}

export default Profession;
