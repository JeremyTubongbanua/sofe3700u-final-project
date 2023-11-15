import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';


function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" className='logo'>Super Cool Jobs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <Nav.Link href="#home" className="me-3">Job Postings</Nav.Link>
                            <Nav.Link href="#link" className="me-3">My Profile</Nav.Link>
                            <button type="submit" className="btn btn-dark w-75 p-3">
                                Logout
                            </button>
                        </div>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
