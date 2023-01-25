import styled from "styled-components";
import NotesWindow from "./components/Main/NotesWindow";
import MainWindow from "./components/Main/MainWindow";
import { useAppSelector } from "./components/hooks/redux";
import { showCancelInputState } from "./components/reducers/createInputSlice";

const App = (): JSX.Element => {
  const inputClose = useAppSelector(showCancelInputState);

  return (
    <Container inputClose={inputClose}>
      <MainWindow />
      <NotesWindow />
    </Container>
  );
};

export default App;

const Container = styled.div<{ inputClose: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${({ inputClose }) => (inputClose ? "hideM 0.5s ease-out" : "none")};

  @keyframes hideM {
    to {
      transform: translateY(-389px);
    }
  }
`;
