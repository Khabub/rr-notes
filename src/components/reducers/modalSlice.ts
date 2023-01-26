import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

export interface NoteModalInterface {
  stateNoteModal: boolean;  
}

const noteModalInterface: NoteModalInterface = {
  stateNoteModal: false, 
};

const noteModalSlice = createSlice({
  name: "noteModal",
  initialState: noteModalInterface,
  reducers: {
    closeNoteModal: (state) => {
      state.stateNoteModal = false;
    },
    openNoteModal: (state) => {
      state.stateNoteModal = true;    
    },
}});

export const { closeNoteModal, openNoteModal } =
noteModalSlice.actions;

export const showNoteModal = (state: RootState) => state.noteModal.stateNoteModal;


export default noteModalSlice.reducer;
