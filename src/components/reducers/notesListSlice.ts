import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

export interface NoteList {
  id?: number;
  heading: string;
  note: string;
  importance: string;
  date: string;
  length?: number;
  added?: boolean;
  edited?: boolean;
  deletedNote?: boolean;
  idNote?: number;
}

const notesListInitial: NoteList = {
  id: 0,
  heading: "",
  note: "",
  importance: "",
  date: new Date().toLocaleString(),
};

export let notesList: NoteList[] = [];

const updateId = () => {
  let currentIndex = 0;
  notesList = notesList.map((note) => {
    return { ...note, id: currentIndex++ };
  });
};

const notesListSlice = createSlice({
  name: "notesList",
  initialState: notesListInitial,
  reducers: {
    addNote: (
      { id, heading, note, importance, date, length, added },
      action: PayloadAction<NoteList>
    ) => {
      length === 0 ? (id = 0) : (id = length! - 1 + 1);

      heading = action.payload.heading;
      note = action.payload.note;
      importance = action.payload.importance;
      date = action.payload.date;

      notesList.unshift({ id, heading, note, importance, date });
      updateId();
      window.localStorage.setItem("noteList", JSON.stringify(notesList));
      added = true;
      return { id, heading, note, importance, date, added, notesList };
    },

    editNote: (state, action: PayloadAction<Omit<NoteList, "date">>) => {
      notesList = notesList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            id: action.payload.id,
            heading: action.payload.heading,
            note: action.payload.note,
            importance: action.payload.importance,
            date: item.date,
          };
        }
        return item;
      });

      window.localStorage.setItem("noteList", JSON.stringify(notesList));
      state.edited = true;
    },

    removeNote: (state, action: PayloadAction<number>) => {
      if (state.length === 0) {
        window.localStorage.setItem("noteList", JSON.stringify([]));
      }
      notesList = notesList.filter((note) => note.id !== action.payload);
      updateId();
      window.localStorage.setItem("noteList", JSON.stringify(notesList));

      return { ...state, notesList, deletedNote: true };
    },

    loadNotes: (state, action: PayloadAction<NoteList[]>) => {
      notesList = [...action.payload];
      state.length = notesList.length;
    },

    setAdded: (state) => {
      state.added = false;
      state.edited = false;
      state.deletedNote = false;
    },

    addIDNote: (state, action: PayloadAction<number>) => {
      state.idNote = action.payload;
    },
  },
});

export const { addNote, removeNote, loadNotes, setAdded, addIDNote, editNote } =
  notesListSlice.actions;

export const isNoteCreated = (state: RootState) => state.notesListing.added;
export const isNoteEdited = (state: RootState) => state.notesListing.edited;
export const isNoteDeleted = (state: RootState) =>
  state.notesListing.deletedNote;
export const getIdNote = (state: RootState) => state.notesListing.idNote;

export default notesListSlice.reducer;
