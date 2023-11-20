import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';

function RecruitNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex justify-content-around align-items-center w-100 overflow-hidden">
                    <Nav.Link as={Link} to="/recruit" className='logo'>Super Cool Jobs</Nav.Link>
                    <Nav.Link as={Link} to="/recruit/profile">Recruit Profile</Nav.Link>
                    <Nav.Link as={Link} to="/recruit/posting">Recruit Posting</Nav.Link>
                    <Nav.Link>
                        <button type="submit" className="btn btn-outline-dark w-80 p-3 px-5">
                            Log Out
                        </button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default RecruitNav;
