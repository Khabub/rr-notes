import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  SwipeableDrawer,
  Switch,
} from "@mui/material";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setLanguageSet,
  setTextHeadingValue,
  showLanguageValue,
} from "../reducers/modalSlice";
import { notesList, saveNote } from "../reducers/notesListSlice";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { openInNewTab } from "../helpers/openInNewTab";

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
  const languageLoad =
    (window.localStorage.getItem("rr-notes-language") as string) || "CZE";
  const [open, setOpen] = useState<boolean>(false);
  const [switchT, setSwitchT] = useState<boolean>(JSON.parse(switchValue));
  const languageValue = useAppSelector(showLanguageValue);
  const [valueLang, setValueLang] = useState<string>(languageLoad);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = event.target.value;
    setValueLang(temp);
    dispatch(setLanguageSet(temp));
    window.localStorage.setItem("rr-notes-language", temp);
  };

  const switchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    setSwitchT(newValue);
    dispatch(setTextHeadingValue(newValue));
    window.localStorage.setItem("switchValue", JSON.stringify(newValue));
  };

  const saveNoteHandler = () => {
    dispatch(saveNote(true));
    const json = JSON.stringify(notesList);
    const blob = new Blob([json], { type: "application/json" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "rr-notes_list.json";
    link.click();
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
            width: "180px",
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
            label={
              languageValue === "ENG"
                ? "Text above notes"
                : "Text nad poznámkami"
            }
            labelPlacement="top"
            sx={{
              display: "flex",
              flexDirection: "colum",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          />
        </div>

        <div className="language-set">
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {languageValue === "ENG" ? "Set language" : "Nastav jazyk"}
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={valueLang}
              onChange={handleChange}
              sx={{
                marginTop: "0.5rem",
              }}
            >
              <FormControlLabel
                sx={{ margin: 0 }}
                value="CZE"
                control={<Radio />}
                label="CZE"
              />
              <FormControlLabel
                sx={{ margin: 0 }}
                value="ENG"
                control={<Radio />}
                label="ENG"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="save-to-file">
          <p>
            {languageValue === "ENG"
              ? "Save notes to a file (.json)"
              : "Uložit poznámky do souboru (.json)"}
          </p>
          <Button onClick={saveNoteHandler} variant="contained" size="small">
            {languageValue === "ENG" ? "Save" : "Uložit"}
          </Button>
        </div>

        <footer className="footer">
          <div className="contact-icons">
            <FacebookIcon
              onClick={() =>
                openInNewTab("https://www.facebook.com/robert.rozehnal.7")
              }
            />
            <GitHubIcon
              onClick={() => openInNewTab("https://github.com/Khabub")}
            />
          </div>
          <p className="created">
            {languageValue === "ENG"
              ? "Created by Robert Rozehnal, 2023"
              : "Vytvořil Robert Rozehnal, 2023"}
          </p>
        </footer>
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
    }

    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: auto;
    }
    .contact-icons {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }

    .text-above-notes,
    .language-set,
    .save-to-file {
      width: 170px;
      border: 1px solid grey;
      border-radius: 10px;
      margin: 0.5rem 0;
      padding: 0.5rem 0;
    }

    .save-to-file {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 0;
      padding-bottom: 1rem;
      text-align: center;
    }
  }
`;

