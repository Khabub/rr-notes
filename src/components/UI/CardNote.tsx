import { Button } from "@mui/material";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const CardNote = (props: Props): JSX.Element => {
  return (
    <Container>
      <div className="right-side-date">
        <span>24.01.2023 15:44</span>
      </div>
      <div className="right-side-buttons">
        <Button
          sx={{ scale: "80%", translate: "7px" }}
          size="small"
          color="warning"
          variant="outlined"
        >
          Edit
        </Button>
        <Button
          sx={{            
            borderTopRightRadius: "15px",
            scale: "80%",
          }}
          size="small"
          color="error"
          variant="contained"
        >
          Delete
        </Button>
      </div>
      <div>
        <h2>Nadpis poznamky</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          sapiente quibusdam voluptatem molestias enim et minima quia, numquam
          quasi! Est quisquam reiciendis alias! Eius porro at culpa obcaecati
          dolore impedit.
        </p>
      </div>
    </Container>
  );
};

export default CardNote;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  position: relative;
  width: 400px;
  border: 1px solid #000;
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px grey;

  p {
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    font-size: 1.2rem;
  }

  .right-side-date {
    font-size: 0.8rem;
    position: absolute;
    font-style: italic;
    right: 10px;
    bottom: 8px;
  }

  .right-side-buttons {
    position: absolute;
    right: 0;
    top: 2px;
    
  }
`;
