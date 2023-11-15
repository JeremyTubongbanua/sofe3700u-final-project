
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, Button, Form, CardBody, FormLabel, FormControl } from 'react-bootstrap'
import SignUp from './components/signUp'
import Login from './components/login';
import Home from './components/home'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/signup" Component={SignUp} />
                <Route path="/login" Component={Login} />
            </Routes>
        </Router>
    </React.StrictMode>
)