import InputForm from "../Main/InputForm";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setShowInput,
  showCancelInputState,
  showShowInputState,
} from "../reducers/createInputSlice";

const MainWindow = (): JSX.Element => {
  const showInput = useAppSelector(showShowInputState);
  const dispatch = useAppDispatch();
  const inputClose = useAppSelector(showCancelInputState);

  const noteHandler = () => {
    dispatch(setShowInput(true));
  };

  return (
    <Container inputClose={inputClose}>
      <FabSC
        noteiconshow={showInput.toString()}
        onClick={noteHandler}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </FabSC>

      {showInput && <InputForm />}
    </Container>
  );
};

export default MainWindow;

const Container = styled.div<{ inputClose: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${({ inputClose }) => (inputClose ? "hide 0.5s ease-out" : "none")};

  @keyframes hide {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

const FabSC = styled(Fab)<{ noteiconshow: string }>`
  && {
    position: fixed;
    bottom: 32px;
    right: 32px;

    display: ${({ noteiconshow }) =>
      noteiconshow === "true" ? "none" : "inherit"};
  }
`;
