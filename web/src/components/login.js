import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import './login.css';


function Login() {
    const [userType, setUserType] = useState('recruit');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <div>

            <Header />



        </div>
    );
};

export default Login;
