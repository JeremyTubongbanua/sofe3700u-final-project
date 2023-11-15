
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, Button, Form, CardBody, FormLabel, FormControl } from 'react-bootstrap'
import SignUp from './components/homeFiles/signUp';
import Login from './components/homeFiles/login';
import Home from './components/homeFiles/home';
import NavBar from './components/recruit/navBar';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" Component={NavBar} />
                <Route path="/home" Component={Home} />
                <Route path="/signup" Component={SignUp} />
                <Route path="/login" Component={Login} />
            </Routes>
        </Router>
    </React.StrictMode>
)