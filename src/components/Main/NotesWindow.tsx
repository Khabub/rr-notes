import styled from "styled-components";
import CardNote from "../UI/CardNote";

interface Props {
  children?: React.ReactNode;
}

const NotesWindow = (props: Props): JSX.Element => {
  return (
    <Container>
      <div>
        <h1 className="note-heading">Your saved notes</h1>
        <p className="note-info">(click on a note to show it)</p>
      </div>
      <div className="notes-wrap">
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
      </div>
    </Container>
  );
};

export default NotesWindow;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .notes-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 90vw;
    column-gap: 1rem;
  }

  .note-heading,
  .note-info {
    margin: 0;
    padding: 0;
  }

  .note-heading {
    font-size: 1.7rem;
  }

  .note-info {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;
