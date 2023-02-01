import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { showNoteModal } from "../reducers/modalSlice";
import CardNote from "../UI/CardNote";
import NoteDetailModal from "../UI/NoteDetailModal";
import { NoteList, notesList } from "../reducers/notesListSlice";

const NotesWindow: React.FC = () => {
  const [data, setData] = useState<NoteList>();
  const noteDetail = useAppSelector(showNoteModal);

  // Save the note data to "data"
  const dataHandler = (val: NoteList) => {
    setData(val);
  };

  return (
    <Container>
      {noteDetail && <NoteDetailModal data={data!} />}
      {notesList.length ? (
        <div>
          <h1 className="note-heading-h1">Your saved notes</h1>
          <p className="note-info">(click on a note to show it)</p>
        </div>
      ) : (
        <div>
          <h1 className="note-heading-h1">Empty list</h1>
          <p className="note-info">(add note)</p>
        </div>
      )}
      {/* Show a list of notes*/}
      <div className="notes-wrap">
        {notesList.map((val, index) => (
          <CardNote
            key={index}
            onClickNote={dataHandler.bind(null, val)}
            {...val}
          ></CardNote>
        ))}
      </div>
    </Container>
  );
};

export default NotesWindow;

// Styles
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
    text-align: center;
  }

  .note-heading-h1 {
    font-size: 1.7rem;
    margin-top: 1rem;
  }

  .note-info {
    margin-bottom: 1.5rem;
  }
`;
