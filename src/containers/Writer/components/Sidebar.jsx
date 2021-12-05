import React from 'react';
import PropTypes from 'prop-types';

import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { RiImageAddLine, FaTrashAlt } from 'react-icons/all';

const useStyles = makeStyles({
  sidebar: {
    background: '#363636',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '100vh',
  },

  iconButton: {
    margin: '10px 0',
    background: 'white',
  },
});

const Sidebar = (props) => {
  const classes = useStyles();

  const handleClickDelete = () => {
    console.log('onClick Delete');
  };

  return (
    <aside className={classes.sidebar}>
      <Grid container alignItems="center" justifyContent="center">
        <IconButton className={classes.iconButton}>
          <RiImageAddLine />
        </IconButton>
        <IconButton onClick={handleClickDelete} className={classes.iconButton}>
          <FaTrashAlt />
        </IconButton>
      </Grid>
    </aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
