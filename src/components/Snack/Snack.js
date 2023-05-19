import * as React from 'react';
import { Alert, Snackbar } from '@mui/material';

export const Snack = ({ isOpen, handleClose, name }) => {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={4000}>
      <Alert severity="error">{name} is already is in contacts</Alert>
    </Snackbar>
  );
};
