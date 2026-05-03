import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <Link to="/Products">Products</Link>
                <Link to="/New">New</Link>
            </nav>
        </div>
    );
};

export default Header;