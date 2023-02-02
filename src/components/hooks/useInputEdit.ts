import { useState, useCallback, useEffect } from "react";
import {
  showCancelInputState,
  setCancelInput,
  setShowInput,
  setEditNote,
} from "../reducers/createInputSlice";
import { useAppSelector, useAppDispatch } from "./redux";

export const useInputEdit = (val1: string, val2: string, val3: string) => {
  const [heading, setHeading] = useState<string>(val1);
  const [note, setNote] = useState<string>(val2);
  const [importance, setImportance] = useState<string>(val3);
  const inputClose = useAppSelector(showCancelInputState);
  const dispatch = useAppDispatch();

  // Send created note
  const cancelHandle = useCallback(() => {
    dispatch(setCancelInput(true));
  }, [dispatch]);

  // Set the note
  const headingHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(event.target.value);
  };

  const noteHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const importanceHandler = (event: React.SyntheticEvent<Element, Event>) => {
    setImportance((event.target as HTMLInputElement).value);
  };

  // Close the input window after 450ms
  useEffect(() => {
    if (inputClose) {
      setTimeout(() => {
        dispatch(setShowInput(false));
        dispatch(setEditNote(false));
        dispatch(setCancelInput(false));
      }, 450);
    }
  });

  return {
    heading,
    note,
    importance,
    cancelHandle,
    headingHandler,
    noteHandler,
    importanceHandler,
  };
};
