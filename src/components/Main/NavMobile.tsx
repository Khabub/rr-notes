import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { FormControlLabel, SwipeableDrawer, Switch } from "@mui/material";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useAppDispatch } from "../hooks/redux";
import { setTextHeadingValue } from "../reducers/modalSlice";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const MenuIconWrapper = ({ isOpen, onClick }: Props): JSX.Element => (
  <div style={{ marginRight: "1rem" }} onClick={onClick}>
    {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
  </div>
);

const NavMobile: React.FC = () => {
  const switchValue = window.localStorage.getItem("switchValue") as string;
  const [open, setOpen] = useState<boolean>(false);
  const [switchT, setSwitchT] = useState<boolean>(JSON.parse(switchValue));

  const dispatch = useAppDispatch();

  const switchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    setSwitchT(newValue);
    dispatch(setTextHeadingValue(newValue));
    window.localStorage.setItem("switchValue", JSON.stringify(newValue));
  };
  
  return (
    <Container>
      <p className="logo">rr-notes</p>
      <MenuIconWrapper isOpen={open} onClick={() => setOpen(true)} />
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

        <div className="text-above-notes">
          <FormControlLabel
            control={<Switch checked={switchT} onChange={switchHandler} />}
            label="Text above notes?"
            labelPlacement="top"
          />
        </div>

        <p className="created">Created by Robert Rozehnal, 2023</p>
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
  z-index: 900;

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
    .text-above-notes {
      border: 1px solid grey;
      border-radius: 10px;
      margin: 0.5rem 0;
      padding: 0.5rem 0;
    }
  }
`;
