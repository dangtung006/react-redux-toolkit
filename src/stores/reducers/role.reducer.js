import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export default createSlice({
    name: "roles",

    initialState: [
        { id: 1, name: "admin", isActive: true },
        { id: 2, name: "supper admin", isActive: true },
        { id: 3, name: "member", isActive: true },
    ],

    reducers: {
        addRole: (state, action) => {
            state.push(action.payload);
        },

        toogleActiveStatus: (state, action) => {
            const curentRole = state.find(role => role.id === action.payload);
            if (curentRole) {
                curentRole.isActive = !curentRole.isActive;
            }
        }
    }

})