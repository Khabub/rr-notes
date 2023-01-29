import styled from "styled-components";
import NotesWindow from "./components/Main/NotesWindow";
import MainWindow from "./components/Main/MainWindow";
import { useAppSelector } from "./components/hooks/redux";
import { showCancelInputState } from "./components/reducers/createInputSlice";
import { useEffect, useState } from "react";
import { NoteList } from "./components/reducers/notesListSlice";
import { useLoadNotes } from "./components/hooks/useLoadNotes";

const App = (): JSX.Element => {
  const inputClose = useAppSelector(showCancelInputState);
  const { load } = useLoadNotes();

  return (
    <Container inputClose={inputClose}>
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
