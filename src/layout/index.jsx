import React from 'react';
import PropTypes from 'prop-types';

import AppBar from './components/AppBar';
import AppDrawer from './components/AppDrawer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(10),
  },
}));

const MainLayout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar />
      <AppDrawer />
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
