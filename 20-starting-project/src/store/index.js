import { configureStore } from "@reduxjs/toolkit";

import actionSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: {
        'ui': actionSlice.reducer,
        'cart': cartSlice.reducer
    }
})

export default store;
