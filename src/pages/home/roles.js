import React from 'react';
import { useSelector } from 'react-redux';
import { remainRole } from '../../stores/selectors';


// import PropTypes from 'prop-types';

// roles.propTypes = {

// };

function AdminRoles(props) {
    const roles = useSelector(remainRole);
    return (
        <div>
            <ul>
                {
                    roles.map(role => (
                        <li> name : {role.name}, <span>status : {JSON.stringify(role.isActive)}</span></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default AdminRoles;