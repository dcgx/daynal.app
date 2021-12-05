import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import { WriterSidebar, WriterHeader } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { selectEntry } from '../../actions/entry';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '20px',
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
    <div className={classes.root}>
      <Container>
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

          <div>
            <img
              className={classes.image}
              src="https://picsum.photos/200/300"
              alt="Image"
            />
          </div>
        </form>
      </Container>
    </div>
  );
};
