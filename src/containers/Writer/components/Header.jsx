import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { HiOutlinePencil } from 'react-icons/hi';

import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: '15px',
  },
  button: {
    margin: '6px',
    textTransform: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    background: 'red',
  },
}));

const Header = () => {
  const classes = useStyles();

  const handleClickShowDiscardDialog = () => {
    console.log('handleClickShowDiscardDialog');
  };

  const handleClickDone = () => {
    console.log('handleClickDone');
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={handleClickShowDiscardDialog}
        >
          Discard
        </Button>

        <Button
          className={classes.button}
          color="secondary"
          variant="contained"
          onClick={handleClickDone}
        >
          Done
        </Button>
      </div>
      <div>
        <IconButton>
          <HiOutlinePencil />
        </IconButton>
      </div>
    </Fragment>
  );
};

export default Header;
