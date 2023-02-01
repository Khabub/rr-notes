import { Button, DialogTitle } from "@mui/material";
import styled from "styled-components";
import { addIDNote, NoteList, removeNote } from "../reducers/notesListSlice";
import NoteModal from "./NoteModal";
import { useAppDispatch } from "../hooks/redux";
import { setEditNote } from "../reducers/createInputSlice";
import { useState } from "react";
import AlertDialog from "./AlertDialog";

import { closeAlertDialog, openAlertDialog } from "../reducers/modalSlice";
import { useCloseModal } from "../hooks/close-modal";

interface Props {
  children?: React.ReactNode;
  data: NoteList;
}

const NoteDetailModal = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const { closeHandler } = useCloseModal();

  const removeNoteHandler = () => {
    dispatch(openAlertDialog(true));    
    dispatch(addIDNote(props.data.id as number));
  };

  const editNoteHandler = () => {
    dispatch(setShowInput("editWindow"));
    dispatch(addIDNote(props.data.id as number));
    closeHandler();
  };



  return (
    <NoteModal> 
      <Container importance={props.data.importance}>
        <div className="right-side-date">
          <span>{props.data.date}</span>
        </div>
        <div className="buttons-edit-del">
          <Button
            onClick={editNoteHandler}
            sx={{
              scale: "80%",
              translate: "7px",
              "@media (max-width: 320px)": { translate: 0 },
            }}
            size="small"
            color="warning"
            variant="outlined"
          >
            Edit
          </Button>
          <Button
            onClick={removeNoteHandler}
            sx={{
              scale: "80%",
            }}
            size="small"
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </div>
        <div>
          <h2 className="note-heading-h2">{props.data.heading}</h2>
          <p className="note-content">{props.data.note}</p>
        </div>
      </Container>
    </NoteModal>
  );
};

export default NoteDetailModal;

const Container = styled.div<Pick<NoteList, "importance">>`
  padding: 1rem;
  display: flex;
  position: relative;
  width: 80vw;
  max-width: 400px;
  border: 2px solid;
  border-color: ${({ importance }) => importance};
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px grey;
  margin-bottom: 1rem;
  background-color: white;
  animation: modalShow 0.3s ease-in;

  @keyframes modalShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .note-content {
    width: 79vw;
    max-width: 380px;
    overflow: hidden;
    font-size: 0.9rem;
    margin: 0.2rem 0 5rem;
  }

  .note-heading-h2 {
    font-size: 1.2rem;
    margin: 0 0 1.5rem;
    text-align: center;
  }

  .right-side-date {
    font-size: 0.8rem;
    position: absolute;
    font-style: italic;
    right: 10px;
    bottom: 10px;
  }

  .buttons-edit-del {
    position: absolute;
    left: 0;
    bottom: 7px;
  }
`;
