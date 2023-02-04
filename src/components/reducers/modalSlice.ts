import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";


export interface NoteModalInterface {
  stateNoteModal: boolean;
  stateAlertDialog: boolean;
  textHeadingState: boolean;
}

const noteModalInterface: NoteModalInterface = {
  stateNoteModal: false,
  stateAlertDialog: false,
  textHeadingState: true,
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
    setTextHeadingValue: (state, action: PayloadAction<boolean>) => {
      state.textHeadingState = action.payload;
    },
  },
});

export const { setNoteModal, setAlertDialog, setTextHeadingValue } =
  noteModalSlice.actions;

export const showNoteModal = (state: RootState) =>
  state.noteModal.stateNoteModal;

export const showDialogValue = (state: RootState) =>
  state.noteModal.stateAlertDialog;
export const showTextHeadingValue = (state: RootState) =>
  state.noteModal.textHeadingState;

export default noteModalSlice.reducer;
