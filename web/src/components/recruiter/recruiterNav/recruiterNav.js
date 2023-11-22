import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../recruit/recruitNav/navBar.css';

function RecruiterNav() {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex justify-content-around align-items-center w-100 overflow-hidden">
                    <NavLink to="/recruiter" className='logo' activeClassName='active-link'>
                        Super Cool Jobs
                    </NavLink>
                    <NavLink to="/recruiter" className='link-text' activeStyle={{ borderBottom: '2px solid gray' }}>
                        Company Postings
                    </NavLink>
                    <NavLink to="/recruiter/profile" className='link-text' activeStyle={{ borderBottom: '2px solid gray' }}>
                        My Profile
                    </NavLink>
                    <NavLink to="/recruiter/company" className='link-text' activeStyle={{ borderBottom: '2px solid gray' }}>
                        My Company
                    </NavLink>
                    <Nav.Link>
                        <button className="btn btn-outline-dark w-80 p-3 px-5" onClick={
                            (e) => {
                                window.location.href = '/login';
                            }
                        }>
                            Log Out
                        </button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default RecruiterNav;
