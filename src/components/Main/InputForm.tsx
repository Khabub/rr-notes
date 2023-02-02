import React, { useCallback } from "react";
import { useAppDispatch } from "../hooks/redux";
import { setCancelInput } from "../reducers/createInputSlice";
import { addNote } from "../reducers/notesListSlice";
import { useLoadNotes } from "../hooks/useLoadNotes";
import { useInputEdit } from "../hooks/useInputEdit";
import Form from "./Form";

const InputForm: React.FC = () => {
  // Load hooks
  const { load } = useLoadNotes();
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

  return (
    <>
      <Form
        valueCancel={cancelHandle}
        valueImportance={importanceHandler}
        valueHeading={headingHandler}
        valueNote={noteHandler}
        valueSubmit={handleSubmit}
        valueInputs={[heading, note, importance]}
        valueText={["Enter a note", "Enter note"]}
      />
    </>
  );
};

export default InputForm;
