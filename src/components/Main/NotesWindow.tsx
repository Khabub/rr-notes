import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { showNoteModal } from "../reducers/modalSlice";
import CardNote from "../UI/CardNote";
import NoteDetailModal from "../UI/NoteDetailModal";
import { NoteList, notesList } from "../store/notes-list";

interface Props {
  children?: React.ReactNode;
}

const NotesWindow = (props: Props): JSX.Element => {
  const [data, setData] = useState<NoteList>();
  
  const noteDetail = useAppSelector(showNoteModal);

  const dataHandler = (val: NoteList) => {
    setData(val);    
  };

  const list = notesList.map((val, index) => (
    <CardNote
      key={index}      
      onClickNote={dataHandler.bind(null, val)}
      {...val}
    ></CardNote>
  ));

  return (
    <Container>
      <div>
        {noteDetail && <NoteDetailModal data={data!} />}
        <h1 className="note-heading-h1">Your saved notes</h1>
        <p className="note-info">(click on a note to show it)</p>
      </div>
      <div className="notes-wrap">{list}</div>
    </Container>
  );
};

export default NotesWindow;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .notes-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 90vw;
    column-gap: 1rem;
  }

  .note-heading-h1,
  .note-info {
    margin: 0;
    padding: 0;
  }

  .note-heading-h1 {
    font-size: 1.7rem;
    margin-top: 1rem;
  }

  .note-info {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;
