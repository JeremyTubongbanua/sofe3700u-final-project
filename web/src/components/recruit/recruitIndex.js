import React from 'react';
import RecruitNav from './recruitNav/recruitNav';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import RecruitHome from './recruitHome/recruitHome';
import RecruitProfile from './profile/recruitProfile';
import PostingView from './postings/postingView';

function RecruitIndex() {
    return (
        <div className='position-relative'>
            <RecruitNav />
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<RecruitHome />} />
                    <Route path="profile" element={<RecruitProfile />} />
                    <Route path="posting" element={<PostingView />} />
                </Route>
            </Routes>
        </div>
    );
}

export default RecruitIndex;
