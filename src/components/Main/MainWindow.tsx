import InputForm from "../Main/InputForm";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setShowInput,
  showCancelInputState,
  showEditNoteState,
  showShowInputState,
} from "../reducers/createInputSlice";
import { setAdded } from "../reducers/notesListSlice";
import EditNote from "./EditNote";

const MainWindow: React.FC = () => {
  const showInput = useAppSelector(showShowInputState);
  const showEditNote = useAppSelector(showEditNoteState);
  const dispatch = useAppDispatch();
  const inputClose = useAppSelector(showCancelInputState);

  const noteHandler = () => {
    dispatch(setShowInput(true));
    dispatch(setAdded());
    window.scrollTo({ top: 0 });
  };

  return (
    <Container inputClose={inputClose}>
      {/* Dial button */}
      <FabSC
        noteiconshow={showInput.toString()}
        noteiconshowedit={showEditNote.toString()}
        onClick={noteHandler}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </FabSC>

      {showInput && <InputForm />}
      {showEditNote && <EditNote />}
    </Container>
  );
};

export default MainWindow;

// Styles
const Container = styled.div<{ inputClose: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;  
  animation: ${({ inputClose }) =>
    inputClose ? "hide 0.5s ease-out" : "none"};

  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const FabSC = styled(Fab)<{ noteiconshow: string; noteiconshowedit: string }>`
  && {
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 10;

    display: ${({ noteiconshow, noteiconshowedit }) =>
      noteiconshow === "true" || noteiconshowedit === "true"
        ? "none"
        : "inherit"};
  }
`;
