import styled from "styled-components";
import NotesWindow from "./components/Main/NotesWindow";
import MainWindow from "./components/Main/MainWindow";
import { useAppSelector, useAppDispatch } from "./components/hooks/redux";
import { showCancelInputState } from "./components/reducers/createInputSlice";
import { useEffect, useState } from "react";
import {
  isNoteCreated,
  NoteList,
  setAdded,
} from "./components/reducers/notesListSlice";
import { useLoadNotes } from "./components/hooks/useLoadNotes";
import { Button, IconButton, Snackbar } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = (): JSX.Element => {
  const inputClose = useAppSelector(showCancelInputState);
  const showSnack = useAppSelector(isNoteCreated) as boolean;
  const { load } = useLoadNotes();
  const dispatch = useAppDispatch();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setAdded());
  };

  return (
    <Container inputClose={inputClose}>
      <Snackbar open={showSnack} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Note created!
        </Alert>
      </Snackbar>
      <MainWindow />
      {load && <NotesWindow />}
      
    </Container>
  );
};

export default App;

const Container = styled.div<{ inputClose: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${({ inputClose }) =>
    inputClose ? "hideM 0.5s ease-out" : "none"};

  @keyframes hideM {
    to {
      transform: translateY(-389px);
    }
  }
`;
