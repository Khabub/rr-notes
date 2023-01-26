import ReactDOM from "react-dom";
import styled from "styled-components";
import { useCloseModal } from "../hooks/close-modal";

interface Props {
  children?: React.ReactNode;
}

const Backdrop = (): JSX.Element => {
  const { closeHandler } = useCloseModal();
  return <ContainerBG onClick={closeHandler}></ContainerBG>;
};

const NoteDetail = (props: Props): JSX.Element => {
  const { closeHandler } = useCloseModal();  
  return <Container onClick={closeHandler}>{props.children}</Container>;
};

const NoteModal = (props: Props): JSX.Element => {
  const portal = document.getElementById("note") as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(<NoteDetail>{props.children}</NoteDetail>, portal)}
    </>
  );
};

export default NoteModal;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;  
`;

const ContainerBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 5;  
`;
