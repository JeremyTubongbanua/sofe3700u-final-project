import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Profession(props) {

    return (
        <div>
            <Form>

                {/* When doing this in future: props.id should replace the id and label = props.name type is just the checkbox being mapped over */}

                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                        />
                    </div>
                ))}
            </Form>
            {props.name}
        </div>
    );
}

export default Profession;
