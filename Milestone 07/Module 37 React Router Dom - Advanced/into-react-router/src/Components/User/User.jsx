import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: "2px solid yellow",
        padding: "10px"
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <Link to={`/users/${id}`}>Show Detail</Link>
        </div>
    );
};

export default User;