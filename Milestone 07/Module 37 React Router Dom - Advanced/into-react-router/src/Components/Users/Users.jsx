import { useLoaderData } from "react-router";
import "./Users.css";
import React from 'react';
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>Users Page</h2>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;