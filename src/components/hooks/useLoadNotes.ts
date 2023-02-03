import { useEffect, useState } from "react";
import { loadNotes } from "../reducers/notesListSlice";
import { notesList } from "../reducers/notesListSlice";
import { useAppDispatch } from "./redux";

// custom hook for loading the list from localStorage when the website is opened
export const useLoadNotes = () => {
  const [load, setLoad] = useState<boolean>(false);
  //const [switchState, setSwitchState] = useState<boolean>(true);
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

/*     const switchValue = window.localStorage.getItem("switchValue") as string;
    if (switchValue){
      setSwitchState(JSON.parse(switchValue));
    } else {
      window.localStorage.setItem("switchValue", JSON.stringify(switchState));
      
    } */

  }, [dispatch]);

  return { load };
};
