
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, Button, Form, CardBody, FormLabel, FormControl } from 'react-bootstrap'
import SignUp from './components/signUp'
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" Component={SignUp} />
                <Route path="/header" Component={Header} />
            </Routes>
        </Router>
    </React.StrictMode>
)