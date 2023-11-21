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
                        onChange={(e) => {
                            const val = props.name;
                            if(e.target.checked) {
                                props.setFilter((prev) => {
                                    return {
                                        ...prev,
                                        professions: [
                                            ...prev.professions,
                                            val
                                        ]
                                    };
                                });
                            } else {
                                props.setFilter((prev) => {
                                    // get rid of id from professions array
                                    const newProfessions = prev.professions.filter((profession) => {
                                        return profession !== val;
                                    });
                                    return {
                                        ...prev,
                                        professions: newProfessions
                                    };
                                });
                            }
                        }}
                    />
                </div>
            </Form>
        </div>
    );
}

export default Profession;
