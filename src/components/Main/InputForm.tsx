import React from "react";
import {
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setCancelInput,
  setShowInput,
  showCancelInputState,
  showShowInputState,
} from "../reducers/createInputSlice";
import { useEffect, useState } from "react";
import { addNote, NoteList } from "../reducers/notesListSlice";
import { useLoadNotes } from "../hooks/useLoadNotes";

interface Props {
  children?: React.ReactNode;
}

const InputForm = (props: Props): JSX.Element => {
  const [heading, setHeading] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [importance, setImportance] = useState<string>("green");
  const { load } = useLoadNotes();

  const dispatch = useAppDispatch();
  const inputClose = useAppSelector(showCancelInputState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  const cancelHandle = () => {
    dispatch(setCancelInput(true));
  };

  const headingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  const noteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const importanceHandler = (event: React.SyntheticEvent<Element, Event>) => {
    setImportance((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (inputClose) {
      setTimeout(() => {
        dispatch(setShowInput(false));
        dispatch(setCancelInput(false));
      }, 450);
    }
  });

  return (
    <Container onSubmit={handleSubmit}>
      <h1 className="input-heading-h1">Enter a note</h1>
      <div className="close-input-window">
        <Button>
          <CloseIcon color="error" onClick={cancelHandle} />
        </Button>
      </div>

      <div className="input-textfield">
        <TextField
          inputProps={{ maxLength: 20 }}
          type="text"
          placeholder="Heading (max 20 characters)"
          value={heading}
          onChange={headingHandler}
        />
        <TextField
          sx={{ marginTop: "1rem" }}
          multiline
          rows={3}
          type="text"
          placeholder="Note..."
          value={note}
          onChange={noteHandler}
        />
      </div>

      <RadioGroupSC value={importance} onChange={importanceHandler}>
        <FormControlLabel
          control={
            <Radio
              sx={{
                color: "red",
                "&.Mui-checked": {
                  color: "red",
                },
              }}
            />
          }
          label="Very important"
          labelPlacement="end"
          value="red"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="Important"
          labelPlacement="end"
          value="orange"
        />
        <FormControlLabel
          control={
            <Radio
              sx={{
                color: "green",
                "&.Mui-checked": {
                  color: "green",
                },
              }}
            />
          }
          label="Not so important"
          labelPlacement="end"
          value="green"
        />
      </RadioGroupSC>

      <div className="send-form">
        <Button variant="contained" color="secondary" type="submit">
          Create note
        </Button>
      </div>
      <Divider sx={{ margin: "1rem 0 0" }} variant="middle" />
    </Container>
  );
};

export default InputForm;

const Container = styled.form`
  width: 90vw;
  max-width: 500px;
  text-align: center;
  animation: createNoteShow 0.5s ease-in;

  @keyframes createNoteShow {
    0% {
      height: 0;
      opacity: 0;
    }
    60% {
      opacity: 0;
      height: 389px;
    }
    100% {
      opacity: 1;
    }
  }

  .input-heading-h1 {
    font-size: 1.5rem;
  }

  .input-textfield,
  .send-form {
    display: flex;
    flex-direction: column;
  }

  .close-input-window {
    position: absolute;
    right: 0px;
    top: 15px;
  }
`;

const RadioGroupSC = styled(RadioGroup)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }
`;
