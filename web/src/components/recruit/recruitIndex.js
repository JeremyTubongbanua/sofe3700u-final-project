import React, { useEffect, useState } from 'react';
import RecruitNav from './recruitNav/recruitNav';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import RecruitHome from './recruitHome/recruitHome';
import RecruitProfile from './profile/recruitProfile';
import PostingView from './postings/postingView';

function RecruitIndex() {    return (
        <div className='position-relative'>
            <RecruitNav />
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<RecruitHome />} />
                    <Route path="profile" element={<RecruitProfile
                        // u_name={u_name}
                        // setUName={setUName}
                        // pass_hash={passHash}
                        // setPassHash={setPassHash}
                        // full_name={fullName}
                        // setFullName={setFullName}
                        // recruit_location={recruitLocation}
                        // setRecruitLocation={setRecruitLocation}
                        // bio={bio}
                        // setBio={setBio}
                        // picture={picture}
                        // setPicture={setPicture}
                        // recruit_resume={recruitResume}
                        // setRecruitResume={setRecruitResume}
                        // recruit_status={recruitStatus}
                        // setRecruitStatus={setRecruitStatus}
                        // professions={professions}
                        // setProfessions={setProfessions}
                    />} />
                    <Route path="posting" element={<PostingView />} />
                </Route>
            </Routes>
        </div>
    );
}

export default RecruitIndex;
