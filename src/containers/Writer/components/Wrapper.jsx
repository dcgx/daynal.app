import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

import Sidebar from './Sidebar';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  );
};

export default Wrapper;
