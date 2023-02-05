// Styles
import { RadioGroup } from "@mui/material";
import styled from "styled-components";

export const Container = styled.form`
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
    top: 54px;
  }

  // MEDIA QUERY
  @media (min-width: 500px) {
    @keyframes createNoteShow {
      0% {
        height: 0;
        opacity: 0;
      }
      60% {
        opacity: 0;
        height: 347px;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const RadioGroupSC = styled(RadioGroup)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }
`;
