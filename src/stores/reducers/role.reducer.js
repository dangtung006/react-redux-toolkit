import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const roleSlice = createSlice({
    name: "roles",

    initialState: {
        "status": "idle",
        "roles": []
    },

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
    },

    extraReducers: builder => {
        builder
            .addCase(fetchRoles.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchRoles.fulfilled, (state, action) => {

                state.status = "idle";
                state.roles = action.payload;
            })
            //add role
            .addCase(addRole.fulfilled, (state, action) => {
                state.roles.push(action.payload);
            })
            //update role
            .addCase(disableRole.fulfilled, (state, action) => {
                let curentRole = state.roles.find(role => role.id === action.payload);
                if (curentRole) {
                    curentRole = action.payload;
                }
            })

    }
})

export default roleSlice;

export const fetchRoles = createAsyncThunk("admin/role/list", async () => {
    const res = await (await fetch("http://localhost:3001/admin/role/list")).json();
    return res.data;
});

export const addRole = createAsyncThunk("admin/role/add", async (newRole) => {
    return newRole;
    const res = await (await fetch("http://localhost:3001/admin/role/add", {
        method: "POST",
        body: JSON.stringify(newRole)
    })).json();
    return res.data;
})

export const disableRole = createAsyncThunk("admin/role/inactive", async (updateRole) => {
    const res = await (await fetch("http://localhost:3001/admin/role/inactive", {
        method: "PUT",
        body: JSON.stringify(updateRole)
    })).json();
    return res.data;
})