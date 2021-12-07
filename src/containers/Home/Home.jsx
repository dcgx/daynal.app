import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { HiOutlinePlus } from 'react-icons/hi';

import { Fab, Grid, makeStyles } from '@material-ui/core';
import {
  NoteListItem,
  NoteDateWrapperList,
  NoteDateWrapper,
} from '../../components/Note';

import DefaultLayout from '../../layout/default';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export const Home = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const state = useSelector((state) => state);

  console.log(state, 'state');
  const navigateToWrite = () => {
    navigate('writer/new');
  };
  return (
    <DefaultLayout>
      <Grid container justifyContent="center">
        <span>March 2021</span>
      </Grid>
      <NoteDateWrapperList>
        <NoteDateWrapper>
          <NoteListItem time="07:10 AM">Title 1</NoteListItem>
          <NoteListItem time="15:20 PM"> Title 2</NoteListItem>
          <NoteListItem time="22:10 PM">Title 3</NoteListItem>
        </NoteDateWrapper>
        <NoteDateWrapper></NoteDateWrapper>
        <NoteDateWrapper></NoteDateWrapper>
        <NoteDateWrapper></NoteDateWrapper>
        <NoteDateWrapper></NoteDateWrapper>
        <NoteDateWrapper></NoteDateWrapper>
        <NoteDateWrapper></NoteDateWrapper>
        <NoteDateWrapper></NoteDateWrapper>
        <NoteDateWrapper></NoteDateWrapper>
        <NoteDateWrapper></NoteDateWrapper>
      </NoteDateWrapperList>
      <Fab color="primary" className={classes.fab} onClick={navigateToWrite}>
        <HiOutlinePlus style={{ width: '35px', height: '35px' }} />
      </Fab>
    </DefaultLayout>
  );
};
