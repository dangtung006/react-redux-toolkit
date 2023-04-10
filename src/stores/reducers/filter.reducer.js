import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "filters",

    initialState: {
        search: "",
        status: "all",
        properties: []
    },

    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },

        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },

        propertiesFilterChange: (state, action) => {
            state.properties = action.payload;
        }
    }
});