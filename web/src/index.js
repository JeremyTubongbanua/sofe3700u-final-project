import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/homeFiles/signUp';
import Login from './components/homeFiles/login';
import Home from './components/homeFiles/home';
import RecruitIndex from './components/recruit/recruitIndex';
import RecruitHome from './components/recruit/recruitHome/recruitHome';
import PostingView from './components/recruit/postings/postingView';
import RecruitProfile from './components/recruit/profile/recruitProfile';
import RecruiterIndex from './components/recruiter/recruiterIndex';
import CompanyPostings from './components/recruiter/companyPostings/companyPostings';
import RecruiterCompany from './components/recruiter/recruiterCompany/recruiterCompany';
import RecruiterProfile from './components/recruiter/recruiterProfile/recruiterProfile';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/recruit" element={<RecruitIndex />}>
                    <Route path="profile" element={<RecruitProfile />} />
                    <Route path="posting" element={<PostingView />} />
                </Route>
                <Route path='/recruiter' element={<RecruiterIndex />}>
                    <Route path='company' element={<RecruiterCompany />} />
                    <Route path='profile' element={<RecruiterProfile />} />

                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
