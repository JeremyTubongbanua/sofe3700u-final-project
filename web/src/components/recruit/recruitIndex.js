import React, { useEffect, useState } from 'react';
import RecruitNav from './recruitNav/recruitNav';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import RecruitHome from './recruitHome/recruitHome';
import RecruitProfile from './profile/recruitProfile';
import PostingView from './postings/postingView';
import MyApplications from './myApplications/myApplications';

function RecruitIndex() {    return (
        <div className='position-relative'>
            <RecruitNav />
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<RecruitHome />} />
                    <Route path="profile" element={<RecruitProfile />} />
                    <Route path="myapps" element={<MyApplications />} />
                </Route>
            </Routes>
        </div>
    );
}

export default RecruitIndex;
