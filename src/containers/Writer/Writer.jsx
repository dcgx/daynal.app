import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Wrapper } from './components';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 200px)',
  },
  inputTitle: {
    fontSize: '20px',
    background: 'transparent',
    fontWeight: '800',
    paddingBottom: '20px',
  },
  textarea: {
    color: 'gray',
    background: 'transparent',
    fontSize: '16px',
    flex: '1 1 auto',
    resize: 'none',
  },
  image: {
    boxShadow: '2px 2px gray',
    height: '250px',
  },
}));

export const Writer = (props) => {
  const classes = useStyles();

  return (
    <Wrapper>
      <form className={classes.form}>
        <input
          className={classes.inputTitle}
          type="text"
          placeholder="Title ..."
          name="title"
        />

        <textarea
          className={classes.textarea}
          placeholder="What happened today?"
          name="content"
        />
      </form>
    </Wrapper>
  );
};
