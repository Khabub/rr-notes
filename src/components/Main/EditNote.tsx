import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setCancelInput } from "../reducers/createInputSlice";
import { editNote, getIdNote, notesList } from "../reducers/notesListSlice";
import { useLoadNotes } from "../hooks/useLoadNotes";
import { useInputEdit } from "../hooks/useInputEdit";
import Form from "./Form";
import { showLanguageValue } from "../reducers/modalSlice";

// Edit the note
const EditNote: React.FC = () => {
  const { load } = useLoadNotes();
  const dispatch = useAppDispatch();
  const languageValue = useAppSelector(showLanguageValue);

  const getIdNoteValue = useAppSelector(getIdNote) as number;
  const headingEdit = notesList[getIdNoteValue].heading;
  const noteEdit = notesList[getIdNoteValue].note;
  const importanceEdit = notesList[getIdNoteValue].importance;

  const {
    heading,
    note,
    importance,
    cancelHandle,
    headingHandler,
    noteHandler,
    importanceHandler,
  } = useInputEdit(headingEdit, noteEdit, importanceEdit);

  // Send edited note
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(
        editNote({
          id: getIdNoteValue,
          heading,
          note,
          importance,
        })
      );

      if (load) {
        dispatch(setCancelInput(true));
      }
    },
    [dispatch, getIdNoteValue, heading, importance, note, load]
  );

  const valueTextLanguage =
    languageValue === "ENG"
      ? ["Edit a note", "Edit note"]
      : ["Změnit poznámku", "Změnit"];

  return (
    <>
      <Form
        valueCancel={cancelHandle}
        valueImportance={importanceHandler}
        valueHeading={headingHandler}
        valueNote={noteHandler}
        valueSubmit={handleSubmit}
        valueInputs={[heading, note, importance]}
        valueText={valueTextLanguage}
      />
    </>
  );
};

export default EditNote;
