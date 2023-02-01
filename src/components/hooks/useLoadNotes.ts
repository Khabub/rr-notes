import { useEffect, useState } from "react";
import { loadNotes } from "../reducers/notesListSlice";
import { notesList } from "../reducers/notesListSlice";
import { useAppDispatch } from "./redux";

// custom hook for loading the list from localStorage when the website is opened
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
