import React from 'react';
import { useSelector } from 'react-redux';
import { remainRole } from '../../stores/selectors';

function AdminRoles() {
    const roles = useSelector(remainRole);
    return (
        <div>
            <ul>
                {
                    roles.map(role => (
                        <li key={role.id}>
                            id : {role.id},
                            name : {role.name},
                            <span> status : {JSON.stringify(role.isActive)}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default AdminRoles;