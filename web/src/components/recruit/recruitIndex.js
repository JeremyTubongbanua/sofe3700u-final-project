import React, { useEffect, useState } from 'react';
import RecruitNav from './recruitNav/recruitNav';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import RecruitHome from './recruitHome/recruitHome';
import RecruitProfile from './profile/recruitProfile';
import PostingView from './postings/postingView';

function RecruitIndex() {

    const [id, setId] = useState('');
    const [u_name, setUName] = useState('');
    const [passHash, setPassHash] = useState('');
    const [fullName, setFullName] = useState('');
    const [recruitLocation, setRecruitLocation] = useState('');
    const [bio, setBio] = useState('');
    const [picture, setPicture] = useState('');
    const [recruitResume, setRecruitResume] = useState('');
    const [recruitStatus, setRecruitStatus] = useState('');
    const [professions, setProfessions] = useState('');

    useEffect(() => {
        setUName(document.cookie.split('; ').find(row => row.startsWith('u_name')).split('=')[1]);
        const url = 'http://jeremymark.ca:3001/recruit/u_name';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                u_name: u_name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                data = data.data
                setId(data.id);
                setPassHash(data.pass_hash);
                setFullName(data.full_name);
                setRecruitLocation(data.recruit_location);
                setBio(data.bio);
                setPicture(data.picture);
                setRecruitResume(data.recruit_resume);
                setRecruitStatus(data.recruit_status);
                setProfessions(data.professions);
            }).catch(err => console.log(err));
    }, [u_name]);

    return (
        <div className='position-relative'>
            <RecruitNav />
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<RecruitHome />} />
                    <Route path="profile" element={<RecruitProfile
                        u_name={u_name}
                        setUName={setUName}
                        pass_hash={passHash}
                        setPassHash={setPassHash}
                        full_name={fullName}
                        setFullName={setFullName}
                        recruit_location={recruitLocation}
                        setRecruitLocation={setRecruitLocation}
                        bio={bio}
                        setBio={setBio}
                        picture={picture}
                        setPicture={setPicture}
                        recruit_resume={recruitResume}
                        setRecruitResume={setRecruitResume}
                        recruit_status={recruitStatus}
                        setRecruitStatus={setRecruitStatus}
                        professions={professions}
                        setProfessions={setProfessions}
                    />} />
                    <Route path="posting" element={<PostingView />} />
                </Route>
            </Routes>
        </div>
    );
}

export default RecruitIndex;
