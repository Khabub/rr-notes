import { configureStore } from "@reduxjs/toolkit";
import createInputReducer from "../reducers/createInputSlice";
import noteModalReducer from "../reducers/modalSlice";

export const store = configureStore({
  reducer: {    
    createInput: createInputReducer,   
    noteModal: noteModalReducer, 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
