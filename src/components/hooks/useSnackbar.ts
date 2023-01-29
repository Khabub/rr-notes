import { useState, useEffect } from "react";
import {
  isNoteCreated,
  isNoteEdited,
  isNoteDeleted,
  setAdded,
} from "../reducers/notesListSlice";
import { useAppDispatch, useAppSelector } from "./redux";

type Severity = "success" | "warning" | "error" | undefined;

export const useSnackbar = () => {
  const showSnack = useAppSelector(isNoteCreated) as boolean;
  const showEditSnack = useAppSelector(isNoteEdited) as boolean;
  const showDeleteSnack = useAppSelector(isNoteDeleted) as boolean;
  const [snackText, setSnackText] = useState<string>("");
  const [chooseSnack, setChooseSnack] = useState<boolean>(false);
  const [snackColor, setSnackColor] = useState<Severity>("error");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showSnack) {
      setChooseSnack(true);
      setSnackColor("success");
      setSnackText("Note created!");
    } else if (showEditSnack) {
      setChooseSnack(true);
      setSnackColor("warning");
      setSnackText("Note edited!");
    } else if (showDeleteSnack) {
      setChooseSnack(true);
      setSnackColor("error");
      setSnackText("Note deleted!");
    }
  }, [showEditSnack, showSnack, showDeleteSnack]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setAdded());
    setChooseSnack(false);
  };

  return {
    chooseSnack,
    snackColor,
    snackText,
    handleClose,
  };
};
