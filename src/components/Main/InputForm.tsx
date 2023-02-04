import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setCancelInput } from "../reducers/createInputSlice";
import { addNote } from "../reducers/notesListSlice";
import { useLoadNotes } from "../hooks/useLoadNotes";
import { useInputEdit } from "../hooks/useInputEdit";
import Form from "./Form";
import { showLanguageValue } from "../reducers/modalSlice";

const InputForm: React.FC = () => {
  // Load hooks
  const { load } = useLoadNotes();
  const languageValue = useAppSelector(showLanguageValue);
  
  const {
    heading,
    note,
    importance,
    cancelHandle,
    headingHandler,
    noteHandler,
    importanceHandler,
  } = useInputEdit("", "", "green");

  const dispatch = useAppDispatch();

  // Input the note
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(
        addNote({
          heading,
          note,
          importance,
          date: new Date(Date.now()).toLocaleString(),
        })
      );

      if (load) {
        dispatch(setCancelInput(true));
      }
    },
    [dispatch, heading, importance, note, load]
  );

  const valueTextLanguage =
    languageValue === "ENG"
      ? ["Enter a note", "Enter note"]
      : ["Napiš poznámku", "Vložit"];

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

export default InputForm;
