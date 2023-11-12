import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {

    const [u_name, setU_name] = React.useState('josh123');
    const [pass_hash, setPass_hash] = React.useState('de877b38b46ff2a81533394464d8c7ae');
    const [full_name, setFull_name] = React.useState('Joshua C');
    const [recruit_location, setRecruit_location] = React.useState('Aurora, Ontario');
    const [bio, setBio] = React.useState('Hi, I am Joshua, an aspiring Mechatronics Engineer.');
    const [picture, setPicture] = React.useState('https://upload.wikimedia.org/wikipedia/en/d/db/Yoshi_%28Nintendo_character%29.png');
    const [recruit_resume, setRecruit_resumse] = React.useState('https://www.linkedin.com/in/joshua-cadavos-985825230/');
    const [recruit_status_id, setRecruit_status_id] = React.useState(1);
    const [message, setMessage] = React.useState('');

    const onSubmit = () => {
        fetch('http://127.0.0.1:3001/recruit', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                u_name: u_name,
                pass_hash: pass_hash,
                full_name: full_name,
                recruit_location: recruit_location,
                bio: bio,
                picture: picture,
                recruit_resume: recruit_resume,
                recruit_status_id: recruit_status_id
            }),
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log('Success:', data);
                setMessage(JSON.stringify(data));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const onGet = () => {
        fetch('http://127.0.0.1:3001/recruit/u_name', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                u_name: u_name
            }),
        })
        .then((res) => {
            return res.json();
        }).then((data) => {
            console.log('Success:', data);
            setMessage(JSON.stringify(data));
        }).then((err) => {
            console.error('Error:', err);
        })
        ;
    }

    return (
        <div className="container text-center">
            <div className="row"><h1>Recruit</h1></div>
            <div className="row">
                <div className="col-3">
                    <h2>u_name</h2>
                </div>
                <div className="col-9">
                    <input type="text" value={u_name} onChange={(e) => setU_name(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h3>pass_hash</h3>
                </div>
                <div className="col-9">
                    <input type="text" value={pass_hash} onChange={(e) => setPass_hash(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h2>full_name</h2>
                </div>
                <div className="col-9">
                    <input type="text" value={full_name} onChange={(e) => setFull_name(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h2>recruit_location</h2>
                </div>
                <div className="col-9">
                    <input type="text" value={recruit_location} onChange={(e) => setRecruit_location(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h2>bio</h2>
                </div>
                <div className="col-9">
                    <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h2>picture</h2>
                </div>
                <div className="col-9">
                    <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h2>recruit_resume</h2>
                </div>
                <div className="col-9">
                    <input type="text" value={recruit_resume} onChange={(e) => setRecruit_resumse(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h2>recruit_status_id</h2>
                </div>
                <div className="col-9">
                    <input type="text" value={recruit_status_id} onChange={(e) => setRecruit_status_id(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <button onClick={onSubmit}>Submit</button>
            </div>
            <div className="row">
                <p>{message}</p>
            </div>
            <div className="row">
                <button onClick={onGet}>get u_name {u_name}</button>
            </div>
        </div>
    );
}

const root = document.getElementById('root');
createRoot(root).render(<App />);
