import { configureStore } from "@reduxjs/toolkit";
import createInputReducer from "../reducers/createInputSlice";
import noteModalReducer from "../reducers/modalSlice";
import notesListingReducer from "../reducers/notesListSlice";

export const store = configureStore({
  reducer: {    
    createInput: createInputReducer,   
    noteModal: noteModalReducer, 
    notesListing: notesListingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
