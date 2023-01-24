import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const InputForm = (props: Props): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h1>Enter a note</h1>
      <div>
        <TextField type="text" placeholder="Heading" />
        <TextField
          sx={{ marginTop: "1rem" }}
          multiline
          rows={5}
          type="text"
          placeholder="Note..."
        />
      </div>

      <RadioGroupSC>
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
          value="veryimportant"
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
          value="important"
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
          value="notsoimportant"
        />
      </RadioGroupSC>

      <div className="send-form">
        <Button variant="contained" color="secondary" type="submit">
          Send
        </Button>
      </div>
    </Container>
  );
};

export default InputForm;

const Container = styled.form`
  width: 500px;
  margin: 2rem auto;
  text-align: center;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const RadioGroupSC = styled(RadioGroup)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
`;
