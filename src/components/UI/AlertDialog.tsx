import styled from 'styled-components';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from '../hooks/redux';
import { closeAlertDialog } from '../reducers/modalSlice';

interface Props {
  children?: React.ReactNode;
  value: boolean;
}

export default function AlertDialog(props: Props) {
  const dispatch = useAppDispatch();
  

  const handleClose = () => {
    dispatch(closeAlertDialog);
  };

  return (
    <>      
      <Dialog
        open={props.value}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{zIndex: 5000, position: "absolute", top: 0}}
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Confirm deleting the note, please
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const Container = styled.div`

`;