import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import './home.css';



function Home() {

    return (
        <div className='position-relative d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className="text-center">
                {/* <h1 className='title'>Super Cool Jobs</h1> */}
                <Header />
                <div className='d-flex flex-column mt-5'>
                    <Link to='/signup'>
                        <button type="submit" className="btn btn-dark w-50 p-3">
                            Sign Up
                        </button>
                    </Link>
                    <Link to='/login'>
                        <button className="btn btn-outline-secondary w-50 mt-3 p-3">
                            Log In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
