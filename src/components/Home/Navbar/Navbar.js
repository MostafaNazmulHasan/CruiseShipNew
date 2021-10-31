import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import { IoMdLogIn } from 'react-icons/io';
import logo from "../../../Images/Cruise Ship.png";
import "./Navbar.css";
import { UserContext } from "../../../App";
const MainNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar className="navbar" expand="lg" >
            <div className="container">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo}
                        width="80"
                        height="60"
                        className="d-inline-block align-top"
                        alt="logo" />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="ms-auto" id='nav-item'>
                        <Nav.Link as={Link} to="/" id='nav-item'>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" id='nav-item'>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/services" id='nav-item'>
                            Services
                        </Nav.Link>
                        <Nav.Link as={Link} to="/team" id='nav-item'>
                            Team
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" id='nav-item'>
                            Contact
                        </Nav.Link>
                        {loggedInUser.email ? (
                            <Nav.Link as={Link} to="/admin" id='nav-item'>
                                DashBoard
                            </Nav.Link>) : (
                            <Nav.Link as={Link} to="/login" id='nav-item'>
                                Admin
                            </Nav.Link>
                        )}
                    </Nav>
                    <Link to="/login">
                        <Button className="btn btn-info me-4" ><span className='me-2'><IoMdLogIn /></span>Log In</Button>
                    </Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default MainNavbar;
