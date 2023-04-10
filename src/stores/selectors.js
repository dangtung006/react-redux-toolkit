import {
    createSelector
} from '@reduxjs/toolkit';

export const roleSelector = (state) => state.roles;
export const remainRole = createSelector(
    roleSelector,
    (roles) => {
        return roles;
    }
)
export default stores;