import InputForm from "./components/Main/InputForm";
import styled from "styled-components";
import NotesWindow from "./components/Main/NotesWindow";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const App = (): JSX.Element => {
  const [createNote, setCreateNote] = useState<boolean>(false);

  const noteHandler = () => {
    setCreateNote((prev) => !prev);
  };

  return (
    <Container>
      <FabSC
        noteiconshow={createNote.toString()}
        onClick={noteHandler}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </FabSC>

      {createNote && <InputForm />}
      <NotesWindow />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FabSC = styled(Fab)<{ noteiconshow: string }>`
  && {
    position: fixed;
    bottom: 16px;
    right: 16px;

    display: ${({ noteiconshow }) =>
      noteiconshow === "true" ? "none" : "inherit"};
  }
`;
