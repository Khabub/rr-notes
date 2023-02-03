import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

export interface CreateNoteInterface {
  cancelInputState: boolean;
  showInputState: boolean;
  showEditNote: boolean;
}

const createNoteInterface: CreateNoteInterface = {
  cancelInputState: false,
  showInputState: false,
  showEditNote: false,
};

const createInputSlice = createSlice({
  name: "createInput",
  initialState: createNoteInterface,
  reducers: {
    setCancelInput: (state, action: PayloadAction<boolean>) => {
      state.cancelInputState = action.payload;
    },
    setShowInput: (state, action: PayloadAction<boolean>) => {
      state.showInputState = action.payload;
    },
    setEditNote: (state, action: PayloadAction<boolean>) => {
      state.showEditNote = action.payload;
    },
  },
});

export const { setCancelInput, setShowInput, setEditNote } =
  createInputSlice.actions;

export const showCancelInputState = (state: RootState) =>
  state.createInput.cancelInputState;
export const showShowInputState = (state: RootState) =>
  state.createInput.showInputState;
export const showEditNoteState = (state: RootState) =>
  state.createInput.showEditNote;

export default createInputSlice.reducer;
