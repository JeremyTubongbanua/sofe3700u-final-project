import React from 'react';
import CompanyPostings from './companyPostings/companyPostings';


function RecruiterHome() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h1 className="display-2">Current Company Postings</h1>
                    <CompanyPostings />
                </div>
            </div>
        </div>
    );
}

export default RecruiterHome;
