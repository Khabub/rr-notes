import { configureStore } from "@reduxjs/toolkit";
import createInputReducer from "../reducers/createInputSlice";


export const store = configureStore({
  reducer: {    
    createInput: createInputReducer,    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
