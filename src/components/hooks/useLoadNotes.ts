import { useEffect, useState } from "react";
import { loadNotes, NoteList } from "../reducers/notesListSlice";
import { notesList } from "../reducers/notesListSlice";
import { useAppDispatch } from "./redux";



export const useLoadNotes = () => {
  const [load, setLoad] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    
    const newList = window.localStorage.getItem("noteList") as string;
    if (newList) {
      const parsedNotes = JSON.parse(newList);
      dispatch(loadNotes(parsedNotes));
      setLoad(true);
    } else {
      window.localStorage.setItem("noteList", JSON.stringify(notesList));
    }
  }, [dispatch]);

  return { load };
};
