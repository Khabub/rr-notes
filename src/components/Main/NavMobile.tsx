import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { SwipeableDrawer, Switch } from "@mui/material";
import { useState } from "react";
import Divider from "@mui/material/Divider";

const NavMobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container>
      <p className="logo">rr-notes</p>
      <MenuIcon onClick={() => setOpen(true)} sx={{ marginRight: "1rem" }} />
      <SwipeableDrawerSC
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
            width: "60vw",
          },
        }}
      >
        <p className="logo-drawer">rr-notes</p>
        <Divider
          sx={{ width: "100%", marginBottom: "1rem", borderBottomWidth: 5 }}
        />
        <p className="textHelper">on/off text above notes</p>
        <div>
          <span>off</span>
          <Switch defaultChecked />
          <span>on</span>
        </div>
        <p className="created">Created by Robert Rozehnal</p>
      </SwipeableDrawerSC>
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
  z-index: 1200;

  .logo {
    padding-left: 1rem;
  }
`;

const SwipeableDrawerSC = styled(SwipeableDrawer)`
  && {
    .logo-drawer {
      font-weight: 700;
    }

    .textHelper {
      margin: 0;
    }
    .created {
      font-size: 0.7rem;
      position: absolute;
      bottom: 0;
    }
  }
`;
