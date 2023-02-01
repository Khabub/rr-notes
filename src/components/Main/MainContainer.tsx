import styled from "styled-components";
import NotesWindow from "../Main/NotesWindow";
import MainWindow from "../Main/MainWindow";
import { useAppSelector } from "../hooks/redux";
import { showCancelInputState } from "../reducers/createInputSlice";
import { useLoadNotes } from "../hooks/useLoadNotes";

const MainContainer: React.FC = () => {
  const inputClose = useAppSelector(showCancelInputState);

  // If load is true, show NotesWindow
  const { load } = useLoadNotes();

  return (
    <Container inputClose={inputClose}>
      <MainWindow />
      {load && <NotesWindow />}
    </Container>
  );
};

export default MainContainer;

// Styles
const Container = styled.div<{ inputClose: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${({ inputClose }) =>
    inputClose ? "hideM 0.5s ease-out" : "none"};

  @keyframes hideM {
    to {
      transform: translateY(-389px);
    }
  }
`;
