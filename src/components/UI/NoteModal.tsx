import ReactDOM from "react-dom";
import styled from "styled-components";
import { useCloseModal } from "../hooks/close-modal";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Button, DialogTitle } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { closeAlertDialog, showDialogValue } from "../reducers/modalSlice";
import { useState } from "react";

interface Props {
  children?: React.ReactNode;
}

const Backdrop = (): JSX.Element => {
  const { closeHandler } = useCloseModal();
  return <ContainerBG onClick={closeHandler}></ContainerBG>;
};

const NoteDetail = (props: Props): JSX.Element => {
  const { closeHandler } = useCloseModal();
  const dispatch = useAppDispatch();
  const showAlert = useAppSelector(showDialogValue);

  const handleClose = () => {
    dispatch(closeAlertDialog);
  };

  return (
    <Container onClick={closeHandler}>
      <Dialog
        open={showAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ zIndex: 5000, position: "absolute", top: 0 }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Confirm deleting the note, please
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {props.children}
    </Container>
  );
};

const NoteModal = (props: Props): JSX.Element => {
  const portal = document.getElementById("note") as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(<NoteDetail>{props.children}</NoteDetail>, portal)}
    </>
  );
};

export default NoteModal;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1600;
`;

const ContainerBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 1500;
  animation: modalShow 0.3s ease-in;

  @keyframes modalShow {
    from {
      backdrop-filter: blur(0);
    }
    to {
      backdrop-filter: blur(3px);
    }
  }
`;
