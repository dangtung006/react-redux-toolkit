import {
    createSelector
} from '@reduxjs/toolkit';

export const roleSelector = (state) => {
    return state.roleReducer.roles;
}

export const remainRole = createSelector(
    roleSelector,
    (roles) => {
        return roles;
    }
)
export default remainRole;