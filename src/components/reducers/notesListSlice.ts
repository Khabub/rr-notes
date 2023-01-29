import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

export interface NoteList {
  id?: number;
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
};

export let notesList: NoteList[] = [];

const notesListSlice = createSlice({
  name: "notesList",
  initialState: notesListInitial,
  reducers: {
    addNote: (
      { id, heading, note, importance, date, length },
      action: PayloadAction<NoteList>
    ) => {
      length === 0 ? (id = 0) : (id = length! - 1 + 1);

      heading = action.payload.heading;
      note = action.payload.note;
      importance = action.payload.importance;
      date = action.payload.date;

      notesList.unshift({ id, heading, note, importance, date });
      window.localStorage.setItem("noteList", JSON.stringify(notesList));
    },
    removeNote: (state, action: PayloadAction<number>) => {
      if (state.length === 0) {
        window.localStorage.setItem("noteList", JSON.stringify([]));
      }
      notesList = notesList.filter((note) => note.id !== action.payload);
      let currentIndex = 0;
      notesList = notesList.map((note) => {
        return { ...note, id: currentIndex++ };
      });
      window.localStorage.setItem("noteList", JSON.stringify(notesList));
      return { ...state, notesList };
    },
    loadNotes: (state, action: PayloadAction<NoteList[]>) => {
      notesList = [...action.payload];
      state.length = notesList.length;
    },
  },
});

export const { addNote, removeNote, loadNotes } = notesListSlice.actions;

export default notesListSlice.reducer;
