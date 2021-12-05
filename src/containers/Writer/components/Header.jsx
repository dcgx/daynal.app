import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { HiOutlinePencil } from 'react-icons/hi';
import { Button, IconButton, makeStyles } from '@material-ui/core';

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
    borderRadius: '20px',
    fontWeight: '600',
  },
}));

const Header = () => {
  const classes = useStyles();

  const handleShowAlertDialog = () => {
    console.log('handleShowAlertDialog');
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <Button
          className={classes.button}
          style={{ background: 'transparent' }}
          variant="contained"
          onClick={handleShowAlertDialog}
        >
          Discard
        </Button>
        {/* <AlertDialog onDiscard={handleDiscard} /> */}

        <Button
          className={classes.button}
          color="secondary"
          variant="contained"
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
