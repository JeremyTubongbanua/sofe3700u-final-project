import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import bcrypt from 'bcryptjs'

function Login() {

    const [username, setUsername] = useState('jeremy');
    const [password, setPassword] = useState('123');

    const onLoginPress = () => {
        const url = 'http://jeremymark.ca:3001/login';
        const body = {
            u_name: username,
            pass_hash: password
        };
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.message === 'success') {
                    // set username in cookie
                    document.cookie = `u_name=${data.data.u_name}`;
                    // set account_type in cookie
                    document.cookie = `account_type=${data.data.account_type}`;
                    alert('Logged in successfully. account_type: ' + data.data.account_type + ' u_name: ' + data.data.u_name);
                    // redirect to /${account_type}
                    window.location.href = `/${data.data.account_type}`;
                } else {
                    alert(data.data);
                }
            }).catch((err) => { alert(err) });

    }

    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-xs-4">
                        <div className="card border border-2 border-black rounded-0 text-center ">
                            <div className="card-body">
                                <div className='card-title my-5 title-card'>
                                    Log In
                                </div>
                                <div className='mx-auto w-75'>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label ">
                                            Username
                                        </label>
                                        <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} className="form-control rounded-0 bg-secondary-subtle" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>

                                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control rounded-0 bg-secondary-subtle" id="password" />
                                    </div>

                                    <button onClick={(e) => { onLoginPress() }} className="btn btn-dark mt-3 w-75 p-3">
                                        Log In
                                    </button>

                                    <Link to="/signup">
                                        <button className="btn btn-outline-secondary w-75 mt-3 p-3">
                                            Sign Up
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
