import React from 'react';
import "./home.css";
import AddRole from './addRole';
import AdminRoles from './roles';

function HomeContainer() {
    return (
        <div className="container">
            <AddRole />
            <AdminRoles />
        </div>
    );
}

export default HomeContainer;