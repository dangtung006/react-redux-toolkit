import {
    combineReducers,
    configureStore
} from '@reduxjs/toolkit';
import roleSlice from './reducers/role.reducer';
import filterSlice from './reducers/filter.reducer';

const rootReducer = combineReducers({
    roleReducer: roleSlice.reducer,
    filteReducer: filterSlice.reducer
});

const stores = configureStore({
    reducer: rootReducer
})

export default stores;