import React from "react";
import { Snackbar } from "@mui/material";
import { useSnackbar } from "../hooks/useSnackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarWindow: React.FC = () => {
  const { snackProps, handleClose } = useSnackbar();
  return (
    <Snackbar
      open={snackProps.open}
      autoHideDuration={2000}
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
  );
};

export default SnackbarWindow;
