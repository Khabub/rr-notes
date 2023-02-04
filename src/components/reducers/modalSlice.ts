import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";


export interface NoteModalInterface {
  stateNoteModal: boolean;
  stateAlertDialog: boolean;
  textHeadingState: boolean;
  languageSet: string;
}

const noteModalInterface: NoteModalInterface = {
  stateNoteModal: false,
  stateAlertDialog: false,
  textHeadingState: true,
  languageSet: "CZE",
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
    setLanguageSet: (state, action: PayloadAction<string>) => {
      state.languageSet = action.payload;
    }
  },
});

export const { setNoteModal, setAlertDialog, setTextHeadingValue, setLanguageSet } =
  noteModalSlice.actions;

export const showNoteModal = (state: RootState) =>
  state.noteModal.stateNoteModal;

export const showDialogValue = (state: RootState) =>
  state.noteModal.stateAlertDialog;
export const showTextHeadingValue = (state: RootState) =>
  state.noteModal.textHeadingState;
export const showLanguageValue = (state: RootState) => state.noteModal.languageSet;

export default noteModalSlice.reducer;
