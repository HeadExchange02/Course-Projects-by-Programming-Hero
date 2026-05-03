import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2>User Detail here</h2>
            <p>name: {name}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default UserDetail;