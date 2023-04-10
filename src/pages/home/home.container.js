import React from 'react';
import AddRole from '../../layouts/forms/addRole';
import { useSelector } from 'react-redux';
import { remainRole } from '../../stores/selectors';

function HomeContainer(props) {
    const roles = useSelector(remainRole);
    console.log("roles : ", roles);
    return (
        <div className="container">
            <AddRole />
        </div>
    );
}

export default HomeContainer;