import ReactDOM from "react-dom";
import styled from "styled-components";
import { useCloseModal } from "../hooks/close-modal";

interface Props {
  children?: React.ReactNode;
}

const Backdrop: React.FC = () => {
  const { closeHandler } = useCloseModal();
  return <ContainerBG onClick={closeHandler}></ContainerBG>;
};

const NoteModal = (props: Props): JSX.Element => {
  const portal = document.getElementById("note") as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(<Container>{props.children}</Container>, portal)}
    </>
  );
};

export default NoteModal;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1600;
`;

const ContainerBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 1500;
  animation: modalShow 0.3s ease-in;

  @keyframes modalShow {
    from {
      backdrop-filter: blur(0);
    }
    to {
      backdrop-filter: blur(3px);
    }
  }
`;
