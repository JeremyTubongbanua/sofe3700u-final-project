import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import './signUp.css';
import bcrypt from 'bcryptjs'


function SignUp() {
    const [userType, setUserType] = useState('recruit');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [username, setUsername] = useState('el28');
    const [password, setPassword] = useState('123456');
    const [confirmPassword, setConfirmPassword] = useState('123456');

    const [fullName, setFullName] = useState('Emily Lai');
    const [recruitResume, setRecruitResume] = useState('https://www.linkedin.com/in/-emily-lai/');
    const [picture, setPicture] = useState('https://media.licdn.com/dms/image/D5603AQGXKuUJ-RGsRQ/profile-displayphoto-shrink_200_200/0/1677041538074?e=1705536000&v=beta&t=oJwqQcdXkPSl5tlXQ2nmasNq0KGXOZVyneO4EHy-F48');
    const [bio, setBio] = useState('Hi, I am Emily Lai, the VP of Finance & Administration of OT EngSoc');
    const [location, setLocation] = useState('Aurora, Ontario');

    const [companies, setCompanies] = useState([]); // [{id:0, company_name: 'Ontario Tech university',..}, {id: 1, company_name: 'University of Toronto',..},...]

    const [recruitFields, setRecruitFields] = useState(true);
    const [recruiterFields, setRecruiterFields] = useState(false);

    useEffect(() => {
        updateCompanies();
    }, []);

    const handleCompanyChange = (event) => {
        setSelectedCompany(event.target.value);
    };

    const companyOptions = companies.map((company) => (
        <option key={company.id} value={company.id}>
            {company.company_name}
        </option>
    ));

    const updateCompanies = async () => {
        const response = await fetch('http://jeremymark.ca:3001/companies', {
            method: 'POST',
            headers: {},
            body: JSON.stringify({}),
        });
        const result = await response.json();
        setCompanies(result.data);
    }

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const onSignUpPress = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // hash password
        const hashedPassword = bcrypt.hashSync(password);
        console.log(hashedPassword);

        let body = {
            "u_name": username,
            "pass_hash": hashedPassword,
            "full_name": fullName,
            "picture": picture,
            "bio": bio,
        };

        if (userType == 'recruit') {
            body['recruit_resume'] = recruitResume;
            body['recruit_location'] = location;
            body['recruit_status_id'] = 1;
        } else if (userType == 'recruiter') {
            body['company_id'] = parseInt(selectedCompany);
            body['recruiter_location'] = location;
        } else {
            return;
        }

        let url = 'http://jeremymark.ca:3001/u_names';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        }).then((response) => {
            return response.json();
        }).then((data) => {
            let u_names = [];
            for (let i = 0; i < data.data.length; i++) {
                u_names.push(data.data[i].u_name);
            }
            if(u_names.includes(username)) {
                alert('Username already exists.');
                return;
            }
        }).catch((err) => {
            alert(err);
        });

        url = 'http://jeremymark.ca:3001/' + userType;

        console.log(JSON.stringify(body));
        console.log(url);

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => {
            if (response.status === 200) {
                alert('Sign up successful!');
            } else {
                alert('Sign up failed. Please try again.');
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>

            <Header />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-xs-4">
                        <div className="card border border-2 border-black rounded-0 text-center ">
                            <div className="card-body">
                                <div className='card-title my-5 title-card'>
                                    Sign Up As
                                </div>
                                <div className='mx-auto w-75' onSubmit={() => { }}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label ">
                                            Username
                                        </label>
                                        <input type="username" className="form-control rounded-0 bg-secondary-subtle" id="username" onChange={onChangeUsername} value={username} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input type="password" className="form-control rounded-0 bg-secondary-subtle" id="password" onChange={onChangePassword} value={password} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control rounded-0 bg-secondary-subtle"
                                            id="confirmPassword"
                                            onChange={onChangeConfirmPassword}
                                            value={confirmPassword}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="full_name" className="form-label">
                                            Full Name
                                        </label>
                                        <input type="text" className="form-control rounded-0 bg-secondary-subtle" id="full_name"
                                            onChange={(e) => setFullName(e.target.value)}
                                            value={fullName}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="picture" className="form-label">
                                            Picture
                                        </label>
                                        <input type="text" className="form-control rounded-0 bg-secondary-subtle" id="picture"
                                            value={picture}
                                            onChange={(e) => setPicture(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="bio" className="form-label">
                                            Bio
                                        </label>
                                        <textarea className="form-control rounded-0 bg-secondary-subtle" id="bio" onChange={(e) => setBio(e.target.value)} value={bio} rows="3"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="location" className="form-label">
                                            Location
                                        </label>
                                        <input type="text" className="form-control rounded-0 bg-secondary-subtle" id="location" onChange={(e) => setLocation(e.target.value)} value={location} />
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check mx-2">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    id="recruit"
                                                    value="recruit"
                                                    checked={userType === 'recruit'}
                                                    onChange={(e) => {
                                                        setUserType(e.target.value);
                                                        setRecruitFields(true);
                                                        setRecruiterFields(false);
                                                    }}
                                                />
                                                <label className="form-check-label" htmlFor="recruit">
                                                    Recruit
                                                </label>
                                            </div>
                                            <div className="form-check mx-2">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    id="recruiter"
                                                    value="recruiter"
                                                    checked={userType === 'recruiter'}
                                                    onChange={(e) => {
                                                        setUserType(e.target.value);
                                                        setRecruiterFields(true);
                                                        setRecruitFields(false);
                                                    }}
                                                />
                                                <label className="form-check-label" htmlFor="recruiter">
                                                    Recruiter
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Conditional rendering based on userType */}
                                    {recruitFields && (
                                        <div>
                                            {/* Render fields for Recruit */}
                                            <div className="mb-3">
                                                <label htmlFor="recruit_resume" className="form-label">
                                                    Recruit Resume
                                                </label>
                                                <input type="text" className="form-control rounded-0 bg-secondary-subtle" id="recruit_resume" onChange={(e) => setRecruitResume(e.target.value)} value={recruitResume} />
                                            </div>
                                        </div>
                                    )}

                                    {recruiterFields && (
                                        <div>
                                            {/* Render fields for Recruiter */}
                                            <div className="mb-3">
                                                <label htmlFor="company" className="form-label">
                                                    Select Company
                                                </label>
                                                <select
                                                    className="form-select rounded-0 bg-secondary-subtle"
                                                    id="company"
                                                    value={selectedCompany}
                                                    onChange={handleCompanyChange}
                                                >
                                                    <option value="">Select a company</option>
                                                    {companyOptions}
                                                </select>
                                            </div>
                                            {/* ... (other recruiter specific fields) */}
                                        </div>
                                    )}
                                    <button className="btn btn-dark w-75 p-3" onClick={onSignUpPress}>
                                        Sign Up
                                    </button>

                                    <Link to="/Login">
                                        <button className="btn btn-outline-secondary w-75 mt-3 p-3">
                                            Log In
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
