import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import AppBar from '../components/App/AppBar';
import AppDrawer from '../components/App/AppDrawer';

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

const DefaultLayout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar />
      <AppDrawer />
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
