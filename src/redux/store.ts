import { configureStore } from "@reduxjs/toolkit";
import counterReduser from './reducers/products/productReducer';

export const store = configureStore({
    reducer: {
        counter : counterReduser,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;