import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';


function NavBar() {
    return (

        <Nav className="d-flex justify-content-around align-items-center w-100 p-4 overflow-hidden" activeKey="/home">
            <Navbar.Brand href="/home" className='logo'>Super Cool Jobs</Navbar.Brand>
            <Nav.Item>
                <Nav.Link href="/" className='link-text'>Job Postings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/" className='link-text'>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <button type="submit" className="btn btn-outline-dark w-80 p-3 px-5">
                        Log Out
                    </button>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;
