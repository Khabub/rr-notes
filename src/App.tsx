import { Snackbar } from "@mui/material";
import React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import MainContainer from "./components/Main/MainContainer";
import { useSnackbar } from "./components/hooks/useSnackbar";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = (): JSX.Element => {
  const { chooseSnack, snackColor, snackText, handleClose } = useSnackbar();

  return (
    <>
      <MainContainer />
      <Snackbar
        open={chooseSnack}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackColor}
          sx={{ width: "100%" }}
        >
          {snackText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default App;
