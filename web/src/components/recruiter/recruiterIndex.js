import React from "react";
import { Routes, Route } from 'react-router-dom'
import RecruiterNav from "./recruiterNav/recruiterNav";
import RecruiterHome from "./recruiterHome";
import RecruiterProfile from "./recruiterProfile/recruiterProfile";
import RecruiterCompany from "./recruiterCompany/recruiterCompany";

function RecruiterIndex() {
    return (
        <div className='position-relative'>
            <RecruiterNav />
            <Routes>
                <Route path="/" element={<RecruiterHome />} />
                <Route path="/profile" element={<RecruiterProfile />} />
                <Route path="/company" element={<RecruiterCompany />} />
            </Routes>
        </div>
    );
}

export default RecruiterIndex;