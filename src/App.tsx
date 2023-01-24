import InputForm from "./components/Main/InputForm";
import CardNote from "./components/UI/CardNote";
import styled from "styled-components";
import NotesWindow from "./components/Main/NotesWindow";

const App = (): JSX.Element => {
  return (
    <Container>
      <InputForm />
      <br />
      <br />
      <br />      
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
