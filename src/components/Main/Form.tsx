import React from "react";
import { Container, RadioGroupSC } from "./InputEdit.styles";
import {
  Button,
  Divider,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { showLanguageValue } from "../reducers/modalSlice";
import { useAppSelector } from "../hooks/redux";

interface Props {
  valueCancel: () => void;
  valueSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  valueHeading: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueNote: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueImportance: (e: React.SyntheticEvent<Element, Event>) => void;
  valueInputs: string[];
  valueText: string[];
}

const Form: React.FC<Props> = ({
  valueCancel,
  valueSubmit,
  valueHeading,
  valueNote,
  valueImportance,
  valueInputs: [heading, note, importance],
  valueText,
}) => {
  const languageValue = useAppSelector(showLanguageValue);

  const formTexts =
    languageValue === "ENG"
      ? {
          placeholder: "Heading (max 20 characters)",
          placeholderNote: "Note...",
          labelHigh: "Very important",
          labelMiddle: "Important",
          labelLow: "Not so important"
        }
      : {
          placeholder: "Nadpis (maximálně 20 písmen)",
          placeholderNote: "Poznámka...",
          labelHigh: "Hodně důležitá",
          labelMiddle: "Důležitá",
          labelLow: "Ne moc důležitá"
      };

  return (
    <Container onSubmit={valueSubmit}>
      <h1 className="input-heading-h1">{valueText[0]}</h1>
      <div className="close-input-window">
        <Button>
          <CloseIcon color="error" onClick={valueCancel} />
        </Button>
      </div>

      <div className="input-textfield">
        <TextField
          inputProps={{ maxLength: 20 }}
          type="text"
          placeholder={formTexts.placeholder}
          value={heading}
          onChange={valueHeading}
        />
        <TextField
          sx={{ marginTop: "1rem" }}
          multiline
          rows={3}
          type="text"
          placeholder={formTexts.placeholderNote}
          value={note}
          onChange={valueNote}
        />
      </div>

      <RadioGroupSC value={importance} onChange={valueImportance}>
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
          label={formTexts.labelHigh}
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
          label={formTexts.labelMiddle}
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
          label={formTexts.labelLow}
          labelPlacement="end"
          value="green"
        />
      </RadioGroupSC>

      <div className="send-form">
        <Button variant="contained" color="secondary" type="submit">
          {valueText[1]}
        </Button>
      </div>
      <Divider sx={{ margin: "1rem 0 0" }} variant="middle" />
    </Container>
  );
};

export default Form;
