import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NoteDetailModal from "./NoteDetailModal";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { openNoteModal, showNoteModal } from "../reducers/modalSlice";
import { NoteList } from "../store/notes-list";

interface Props extends NoteList{
  children?: React.ReactNode;
  onClickNote: () => void;
}

const CardNote = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    props.onClickNote();
    dispatch(openNoteModal());
  };

  return (
    <Container importance={props.importance} onClick={handleClick}>
      <div className="right-side-date">
        <span>{props.date}</span>
      </div>
      <div>
        <h2 className="note-heading-h2">{props.heading}</h2>
        <p className="note-content">{props.note}</p>
      </div>
    </Container>
  );
};

export default CardNote;

const Container = styled.div<Pick<NoteList, "importance">>`
  padding: 1rem;
  display: flex;
  position: relative;
  width: 80vw;
  max-width: 400px;
  border: 2px solid;
  border-color: ${({importance}) => importance};
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px grey;
  margin-bottom: 1rem;

  .note-content {
    width: 79vw;
    max-width: 380px;
    overflow: hidden;
    max-height: 50px;
    font-size: 0.9rem;
    margin: 0.2rem 0 0.8rem;
  }

  .note-heading-h2 {
    font-size: 1.2rem;
    margin: 0;
  }

  .right-side-date {
    font-size: 0.8rem;
    position: absolute;
    font-style: italic;
    right: 10px;
    bottom: 5px;
  }

  .right-side-buttons {
    position: absolute;
    right: 0;
    top: 2px;
  }

  @media (max-width: 320px) {
    .right-side-buttons {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }

    .note-content {
      width: 65vw;
      max-width: 380px;
    }
  }
`;
