import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

export interface NoteList {
  id: number;
  heading: string;
  note: string;
  importance: string;
  date: string;
  length?: number;
}

const notesListInitial: NoteList = {
  id: 0,
  heading: "",
  note: "",
  importance: "",
  date: new Date().toLocaleString(),
  length: 0,
};

export const notesList: NoteList[] = [];

const notesListSlice = createSlice({
  name: "notesList",
  initialState: notesListInitial,
  reducers: {
    addNote: (
      { id, heading, note, importance, date },
      action: PayloadAction<string[]>
    ) => {
      notesList.length === 0 ? (id = 0) : (id = id + 1);

      heading = action.payload[0];
      note = action.payload[1];
      importance = action.payload[2];
      date = action.payload[3];

      notesList.unshift({ id, heading, note, importance, date });
    },
    
  },
});

export const { addNote } = notesListSlice.actions;



export default notesListSlice.reducer;
