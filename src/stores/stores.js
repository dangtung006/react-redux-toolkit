import {
    combineReducers,
    configureStore
} from '@reduxjs/toolkit';
import roleSlice from './reducers/role.reducer';
import filterSlice from './reducers/filter.reducer';
import productReducer from './reducers/product';

const rootReducer = combineReducers({
    roleReducer: roleSlice.reducer,
    filteReducer: filterSlice.reducer,
    productReducer: productReducer
});

const stores = configureStore({
    reducer: rootReducer
})

export default stores;