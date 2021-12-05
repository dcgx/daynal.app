import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlertDialog } from '../actions/ui';

const useStyles = makeStyles((theme) => ({
  dialog: {
    borderRadius: '15px',
  },
  button: {
    border: 'none',
    fontWeight: '700',
    textTransform: 'none',
  },
}));

const AlertDialog = ({ onDiscard }) => {
  const classes = useStyles();
  const handleClose = () => {
    dispatch(hideAlertDialog());
  };
  const dispatch = useDispatch();
  const { alertMessage, isOpenAlertDialog } = useSelector((state) => state.ui);

  return (
    <div>
      <Dialog
        className={classes.dialog}
        open={isOpenAlertDialog}
        onClose={handleClose}
      >
        <DialogTitle>Unsaved Changes</DialogTitle>
        <DialogContent>
          <DialogContentText>{alertMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={classes.button} onClick={onDiscard}>
            Discard
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AlertDialog.propTypes = {
  onDiscard: PropTypes.func,
};

export default AlertDialog;
