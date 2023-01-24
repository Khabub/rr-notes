import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
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
      <div className="input-textfield">
        <TextField
          inputProps={{ maxLength: 15 }}
          type="text"
          placeholder="Heading"          
        />
        <TextField
          sx={{ marginTop: "1rem" }}
          multiline
          rows={3}
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
  width: 90vw;
  max-width: 500px;
  text-align: center;

  .input-textfield, .send-form {
    display: flex;
    flex-direction: column;
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
