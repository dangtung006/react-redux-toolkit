import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
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

export default filterSlice;