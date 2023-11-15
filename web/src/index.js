
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card, Button, Form, CardBody, FormLabel, FormControl } from 'react-bootstrap'
import SignUp from './components/signUp'
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div>
            <Header />
            <SignUp />
        </div>
    </React.StrictMode>
)