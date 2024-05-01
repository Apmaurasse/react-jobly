import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/">Homepage</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/companies">Companies</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/jobs">Jobs</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/users">Users</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/profileeditpage">Profile Edit Page</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;

