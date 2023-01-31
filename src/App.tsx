import { Snackbar } from "@mui/material";
import React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import MainContainer from "./components/Main/MainContainer";
import { useSnackbar } from "./components/hooks/useSnackbar";
import AlertDialog from "./components/UI/AlertDialog";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = (): JSX.Element => {
  const { snackProps, handleClose } = useSnackbar();

  return (
    <>
      <MainContainer />
      <Snackbar
        open={snackProps.open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackProps.color}
          sx={{ width: "100%" }}
        >
          {snackProps.text}
        </Alert>
      </Snackbar>
      
    </>
  );
};

export default App;
