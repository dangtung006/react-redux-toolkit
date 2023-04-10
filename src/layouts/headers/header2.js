import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

function Header2(props) {
    return (
        <nav className="navbar">
            <div className="logo">My app</div>

            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" className="hamburger">&#9776;</label>

                <div className="menu">

                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/login">Login</Link></li>

                    <li class="services">

                        <a href="/">Services</a>

                        <ul class="dropdown">

                            <li><a href="/">Dropdown 1 </a></li>

                            <li><a href="/">Dropdown 2</a></li>

                            <li><a href="/">Dropdown 2</a></li>

                            <li><a href="/">Dropdown 3</a></li>

                            <li><a href="/">Dropdown 4</a></li>

                        </ul>

                    </li>
                    <li><Link to="/user">Users</Link> </li>
                    <li><Link to="/about">About</Link></li>
                </div>

            </ul>

        </nav>
    );
}

export default Header2;