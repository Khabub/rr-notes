import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

export interface NoteModalInterface {
  stateNoteModal: boolean;
  stateAlertDialog: boolean;
}

const noteModalInterface: NoteModalInterface = {
  stateNoteModal: false,
  stateAlertDialog: false,
};

const noteModalSlice = createSlice({
  name: "noteModal",
  initialState: noteModalInterface,
  reducers: {
    setNoteModal: (state, action: PayloadAction<boolean>) => {
      state.stateNoteModal = action.payload;
    },    
    setAlertDialog: (state, action: PayloadAction<boolean>) => {
      state.stateAlertDialog = action.payload;
    },    
  },
});

export const {
  setNoteModal,  
  setAlertDialog,  
} = noteModalSlice.actions;

export const showNoteModal = (state: RootState) =>
  state.noteModal.stateNoteModal;

export const showDialogValue = (state: RootState) => state.noteModal.stateAlertDialog;

export default noteModalSlice.reducer;
