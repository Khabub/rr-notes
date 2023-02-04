import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import {
  showLanguageValue,
  showNoteModal,
  showTextHeadingValue,
} from "../reducers/modalSlice";
import CardNote from "../UI/CardNote";
import NoteDetailModal from "../UI/NoteDetailModal";
import { NoteList } from "../reducers/notesListSlice";
import { notesList } from "../reducers/notesListSlice";

const NotesWindow: React.FC = () => {
  const [data, setData] = useState<NoteList>();
  const textHeadingValue = useAppSelector(showTextHeadingValue) as boolean;
  const languageValue = useAppSelector(showLanguageValue);
  const noteDetail = useAppSelector(showNoteModal);

  // Save the note data to "data"
  const dataHandler = (val: NoteList) => {
    setData(val);
  };

  const noteHeading =
    languageValue === "ENG"
      ? { heading: "Your saved notes", info: "(click on a note to show it)" }
      : {
          heading: "Vaše uložené poznámky",
          info: "(klikni na poznámku pro detail)",
        };

  const emptyNote =
    languageValue === "ENG"
      ? { heading: "Empty list", info: "(add a note)" }
      : { heading: "Prázdný seznam", info: "(přidej poznámku)" };

  return (
    <Container textHeadingValue={textHeadingValue}>
      {noteDetail && <NoteDetailModal data={data!} />}
      {notesList.length ? (
        textHeadingValue && (
          <div>
            <h1 className="note-heading-h1">{noteHeading.heading}</h1>
            <p className="note-info">{noteHeading.info}</p>
          </div>
        )
      ) : (
        <div>
          <h1 className="note-heading-h1">{emptyNote.heading}</h1>
          <p className="note-info">{emptyNote.info}</p>
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

const Container = styled.div<{ textHeadingValue: boolean }>`
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
    margin-top: ${({ textHeadingValue }) => (textHeadingValue ? 0 : "1rem")};
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
