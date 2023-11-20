
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Card, Button, Form, CardBody, FormLabel, FormControl } from 'react-bootstrap'
import SignUp from './components/homeFiles/signUp';
import Login from './components/homeFiles/login';
import Home from './components/homeFiles/home';
import RecruitIndex from './components/recruit/recruitIndex';
import Posting from './components/recruit/postings/posting'
import RecruitProfile from './components/recruit/profile/recruitProfile';
import RecruiterIndex from './components/recruiter/recruiterIndex';
import CompanyPostings from './components/recruiter/companyPostings/companyPostings';
import RecruiterCompany from './components/recruiter/recruiterCompany/recruiterCompany';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/home" Component={Home} />
                <Route path="/signup" Component={SignUp} />
                <Route path="/login" Component={Login} />
                <Route path="/recruit" Component={RecruitIndex}>
                    <Route path="posting" Component={Posting} />
                    <Route path="profile" Component={RecruitProfile} />
                </Route>
                <Route path='/recruiter' Component={RecruiterIndex}>
                    <Route path='company' Component={CompanyPostings} />
                    <Route path='myCompany' Component={RecruiterCompany} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
)