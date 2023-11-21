import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecruiterNav from './recruiterNav/recruiterNav';
import JobPostings from './companyPostings/companyPostings';

function RecruiterIndex() {
    return (
        <div className="position-relative">
            <RecruiterNav />
            <div className="mt-5">
            <Routes>
                <Route path="/" element={<JobPostings />} />
                {/* Add more routes as needed */}
            </Routes>
        </div>
        </div>
    );
}

export default RecruiterIndex;
