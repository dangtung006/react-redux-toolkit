import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/productService";

export const getAllProducts = createAsyncThunk("product/getProducts", async (_, thunkAPI) => {
    try {
        return await getProducts();
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Lỗi fetch');
    }
});


const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                console.log("Products:", action.payload);
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default productSlice.reducer;