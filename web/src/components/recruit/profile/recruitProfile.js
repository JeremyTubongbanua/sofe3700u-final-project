import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row, Image, Stack } from 'react-bootstrap';

function RecruitProfile(props) {

    const [id, setId] = useState(-1);
    const [u_name, setUName] = useState('');
    const [pass_hash, setPassHash] = useState('');
    const [full_name, setFullName] = useState('');
    const [recruit_location, setRecruitLocation] = useState('');
    const [bio, setBio] = useState('');
    const [picture, setPicture] = useState('');
    const [recruit_resume, setRecruitResume] = useState('');
    const [recruit_status, setRecruitStatus] = useState('');
    const [professions, setProfessions] = useState('');

    useEffect(() => {
        const newUName = document.cookie.split('; ').find(row => row.startsWith('u_name')).split('=')[1]
        const url = 'http://jeremymark.ca:3001/recruit/u_name';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                u_name: newUName
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                let x = data.data;
                if (x == null) {
                    console.log("null");
                    return;
                }
                setId(x.id);
                setUName(x.u_name);
                setPassHash(x.pass_hash);
                setFullName(x.full_name);
                setRecruitLocation(x.recruit_location);
                setBio(x.bio);
                setPicture(x.picture);
                setRecruitResume(x.recruit_resume);
                setRecruitStatus(x.recruit_status);
                setProfessions(x.professions);
            }).catch(err => console.log(err));
    }, []);


    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <Form style={{ width: '100%', maxWidth: '800px' }}>
                <div className='p-4 d-flex flex-column align-items-stretch bg-secondary-subtle'>
                    <Row className="mb-2 flex-grow-1 align-self-stretch  ">
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>

                                <h1 style={{ fontSize: '18px' }}>
                                    Username: {u_name}
                                </h1>

                                <div className='image-container' style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                    <Image className="h-100 w-100" src={picture} rounded fluid />
                                </div>

                                <Form.Group controlId="formStatus">
                                    {/* <Form.Label>Status</Form.Label>
                                    <Form.Control className='rounded-0' value={recruit_status} onChange={(e) => {
                                        setRecruitStatus(e.target.value);
                                    }} /> */}
                                    <select>
                                        <option onChange={(e) => {
                                            setRecruitStatus("Not Looking for Jobs");
                                        }}>Not Looking for Jobs</option>
                                        <option onChange={(e) => {
                                            setRecruitStatus("Looking for Jobs");
                                        }} value={2}>Looking for Jobs</option>
                                    </select>
                                </Form.Group>

                                <Form.Group controlId="formProfession">
                                    <Form.Label>Professions</Form.Label>
                                    <Form.Control className='rounded-0' value={professions} onChange={(e) => {
                                        setProfessions(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" onClick={() => {
                                        console.log('Submitting...\n\n\n\n');
                                        const url = 'http://jeremymark.ca:3001/recruit';
                                        fetch(url, {
                                            method: 'PATCH',
                                            body: JSON.stringify({
                                                id: parseInt(id),
                                                u_name: u_name,
                                                pass_hash: pass_hash,
                                                full_name: full_name,
                                                recruit_location: recruit_location,
                                                bio: bio,
                                                picture: picture,
                                                recruit_resume: recruit_resume,
                                                recruit_status: recruit_status,
                                                // professions: professions
                                            }),
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        })
                                            .then(res => res.json())
                                            .then((data) => {
                                                console.log('DONE PUTTING');
                                                console.log(data);
                                                console.log('\n');
                                            }).catch(err => console.log(err));
                                    }}>
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Stack>
                        </Col>

                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Stack gap={3}>
                                <Form.Group controlId="formGridUsername">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control className='rounded-0' type="fullname" value={full_name} onChange={(e) => {
                                        setFullName(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className='rounded-0' type="password" value={pass_hash} onChange={(e) => {
                                        setPassHash(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control className='rounded-0' value={recruit_location} onChange={(e) => {
                                        setRecruitLocation(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formResume">
                                    <Form.Label>Resume URL</Form.Label>
                                    <Form.Control className='rounded-0' value={recruit_resume} onChange={(e) => {
                                        setRecruitResume(e.target.value);
                                    }} />
                                </Form.Group>

                                <Form.Group controlId="formBio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control className='rounded-0' style={{ resize: 'none' }} as="textarea" rows={6} value={bio}

                                        onChange={(e) => {
                                            setBio(e.target.value);
                                        }}
                                    />
                                </Form.Group>
                            </Stack>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    );
}

export default RecruitProfile;
