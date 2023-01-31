import { createSlice } from "@reduxjs/toolkit";
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
    closeNoteModal: (state) => {
      state.stateNoteModal = false;
    },
    openNoteModal: (state) => {
      state.stateNoteModal = true;
    },
    openAlertDialog: (state) => {
      state.stateAlertDialog = true;
    },
    closeAlertDialog: (state) => {
      state.stateAlertDialog = false;
    },
  },
});

export const {
  closeNoteModal,
  openNoteModal,
  openAlertDialog,
  closeAlertDialog,
} = noteModalSlice.actions;

export const showNoteModal = (state: RootState) =>
  state.noteModal.stateNoteModal;

export const showDialogValue = (state: RootState) => state.noteModal.stateAlertDialog;

export default noteModalSlice.reducer;
