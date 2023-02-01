import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { closeAlertDialog, showDialogValue } from "../reducers/modalSlice";
import { getIdNote, removeNote } from "../reducers/notesListSlice";
import { useCloseModal } from "../hooks/close-modal";


const AlertDialog: React.FC = () => {
  const { closeHandler } = useCloseModal();
  const dispatch = useAppDispatch();
  const showAlert = useAppSelector(showDialogValue);
  const idNote = useAppSelector(getIdNote);

  const handleCloseDialogCancel = () => {
    dispatch(closeAlertDialog(false));
  };

  const handleCloseDialog = () => {
    dispatch(closeAlertDialog(false));
    dispatch(removeNote(idNote as number));
    closeHandler();
  };

  return (
    <>
      <Dialog
        open={showAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ zIndex: 2000, textAlign: "center", height: "97%" }}
      >
        <DialogTitle id="alert-dialog-title">Deleting the note</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Confirm deleting the note
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogCancel}>Cancel</Button>
          <Button onClick={handleCloseDialog} autoFocus sx={{color: "red"}}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AlertDialog;