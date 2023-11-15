import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';


function Login() {
    const [userType, setUserType] = useState('recruit');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <div>

            <Header />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="card border border-2 border-black rounded-0 text-center ">
                            <div className="card-body">
                                <div className='card-title my-5 title-card'>
                                    Log In
                                </div>
                                <form className='mx-auto w-75'>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label ">
                                            Username
                                        </label>
                                        <input type="username" className="form-control rounded-0 bg-secondary-subtle" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input type="password" className="form-control rounded-0 bg-secondary-subtle" id="password" />
                                    </div>

                                    <button type="submit" className="btn btn-dark mt-3 w-75 p-3">
                                        Log In
                                    </button>

                                    <Link to="/signup">
                                        <button className="btn btn-outline-secondary w-75 mt-3 p-3">
                                            Sign Up
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Login;
