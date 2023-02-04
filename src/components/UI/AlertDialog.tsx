import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setAlertDialog,
  showDialogValue,
  showLanguageValue,
} from "../reducers/modalSlice";
import { getIdNote, removeNote } from "../reducers/notesListSlice";
import { useCloseModal } from "../hooks/close-modal";

const AlertDialog: React.FC = () => {
  const { closeHandler } = useCloseModal();
  const dispatch = useAppDispatch();
  const showAlert = useAppSelector(showDialogValue);
  const idNote = useAppSelector(getIdNote);
  const languageValue = useAppSelector(showLanguageValue);

  const handleCloseDialogCancel = () => {
    dispatch(setAlertDialog(false));
  };

  const handleCloseDialog = () => {
    dispatch(setAlertDialog(false));
    dispatch(removeNote(idNote as number));
    closeHandler();
  };

  const dialogLanguage =
    languageValue === "ENG"
      ? {
          title: "Deleting the note",
          info: "Confirm deleting the note",
          cancel: "Cancel",
          Confirm: "Confirm",
        }
      : {
          title: "Smazání poznámky",
          info: "Potvrď smazání poznámky",
          cancel: "Zrušit",
          Confirm: "Potvrdit",
        };

  return (
    <>
      <Dialog
        open={showAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ textAlign: "center", height: "97%" }}
      >
        <DialogTitle id="alert-dialog-title">
          {dialogLanguage.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogLanguage.info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogCancel}>
            {dialogLanguage.cancel}
          </Button>
          <Button onClick={handleCloseDialog} autoFocus sx={{ color: "red" }}>
            {dialogLanguage.Confirm}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
