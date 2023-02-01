import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";

const NavMobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container>
      <p className="logo">rr-notes</p>
      <MenuIcon onClick={() => setOpen(true)} sx={{ marginRight: "1rem" }} />
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        PaperProps={{
          sx: {
            display: "flex",
            alignItems: "center",
            padding: "0 0.5rem",
            backgroundColor: "#b3b3da",
            width: "100px",
          },
        }}
      >
        <p>rr-notes</p>
      </SwipeableDrawer>
    </Container>
  );
};

export default NavMobile;

const Container = styled.div`
  position: fixed;
  background-color: #9ef4ff;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  .logo {
    padding-left: 1rem;
  }
 
`;
