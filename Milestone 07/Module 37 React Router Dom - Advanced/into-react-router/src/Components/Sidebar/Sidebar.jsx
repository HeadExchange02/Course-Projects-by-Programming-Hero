import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <aside>
            <nav className='sidebar'>
                <div>
                    <p><Link to="/dashboard">Dashboard</Link></p>
                    <p><NavLink to="/">Home</NavLink></p>
                    <p><NavLink to="/users">Users</NavLink></p>
                    <NavLink to="/users2">Users2</NavLink>
                    <p><Link to="/Products">Products</Link></p>
                    <p><Link to="/New">New</Link></p>
                </div>
                <p>Sidenav 2</p>
                <p>Sidenav 3</p>
                <p>Sidenav 4</p>
                <p>Sidenav 5</p>
            </nav>
        </aside>
    );
};

export default Sidebar;