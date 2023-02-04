import { useEffect, useState } from "react";
import { setLanguageSet, setTextHeadingValue } from "../reducers/modalSlice";
import { loadNotes } from "../reducers/notesListSlice";
import { notesList } from "../reducers/notesListSlice";
import { useAppDispatch } from "./redux";

// loading the list from localStorage when the website is opened
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

    // set switch state according to localStorage
    const switchValue = window.localStorage.getItem("switchValue") as string;
    if (switchValue) {
      dispatch(setTextHeadingValue(JSON.parse(switchValue)));
    } else {
      window.localStorage.setItem("switchValue", JSON.stringify(true));
    }

    // set language state
    const languageSet = window.localStorage.getItem("rr-notes-language") as string;
    if (languageSet) {      
      dispatch(setLanguageSet(languageSet));
    } else {
      window.localStorage.setItem("rr-notes-language", "CZE");
    }
    
  }, [dispatch]);

  return { load };
};
