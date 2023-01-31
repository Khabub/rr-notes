import { useState, useEffect } from "react";
import { setAdded, isNoteProps, NoteProps } from "../reducers/notesListSlice";
import { useAppDispatch, useAppSelector } from "./redux";

type Severity = "success" | "warning" | "error" | undefined;

interface SnackInterface {
  open: boolean;
  color: Severity;
  text: string;
}

const snackInit: SnackInterface = {
  open: false,
  color: "error",
  text: "",
};

// custom hook for Snackbar, 3 types of it - created, edited, deleted
export const useSnackbar = () => {
  const showSnack = useAppSelector<NoteProps>(isNoteProps);
  const [snackProps, setSnackProps] = useState<SnackInterface>(snackInit);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showSnack.added) {
      setSnackProps({ open: true, color: "success", text: "Note created!" });
    } else if (showSnack.edited) {
      setSnackProps({ open: true, color: "warning", text: "Note edited!" });
    } else if (showSnack.deleted) {
      setSnackProps({ open: true, color: "error", text: "Note deleted!" });
    }
  }, [showSnack]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setAdded());
    setSnackProps((prev) => ({ ...prev, open: false }));
  };

  return {
    snackProps,
    handleClose,
  };
};
