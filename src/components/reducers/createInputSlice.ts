import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

export interface CreateNoteInterface {
  cancelInputState: boolean;
  setCancelInputState: boolean;

  showInputState: boolean;
  setShowInputState: boolean;
  showEditNote: boolean;
  setShowEditNote: boolean;
}

const createNoteInterface: CreateNoteInterface = {
  cancelInputState: false,
  setCancelInputState: false,

  showInputState: false,
  setShowInputState: false,
  showEditNote: false,
  setShowEditNote: false,
};

const createInputSlice = createSlice({
  name: "createInput",
  initialState: createNoteInterface,
  reducers: {
    cancelInput: (state) => {
      state.cancelInputState = false;
    },
    setCancelInput: (state, action: PayloadAction<boolean>) => {
      state.cancelInputState = action.payload;
    },
    showInput: (state) => {
      state.showInputState = false;
    },
    setShowInput: (state, action: PayloadAction<boolean>) => {
      state.showInputState = action.payload;
    },
    showEditNote: (state) => {
      state.showEditNote = false;
    },
    setEditNote: (state, action: PayloadAction<boolean>) => {
      state.showEditNote = action.payload;
    },
  },
});

export const {
  cancelInput,
  setCancelInput,
  showInput,
  setShowInput,
  showEditNote,
  setEditNote,
} = createInputSlice.actions;

export const showCancelInputState = (state: RootState) =>
  state.createInput.cancelInputState;
export const showShowInputState = (state: RootState) =>
  state.createInput.showInputState;
export const showEditNoteState = (state: RootState) =>
  state.createInput.showEditNote;

export default createInputSlice.reducer;
