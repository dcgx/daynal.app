import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { HiOutlinePlus } from 'react-icons/hi';

import { Fab, Grid, makeStyles } from '@material-ui/core';
import moment from 'moment';

import MainLayout from '../../layout';
import Entry from '../../components/Entry';
import EntryCard from '../../components/EntryCard';
import EntryList from '../../components/EntryList';

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

  const navigateToWrite = () => {
    navigate('writer/new');
  };
  // entries.reduce(function (res, value) {
  //   const date = moment(value.date);

  //   const month = parseInt(date.format('DD YYYY'));
  //   const day = parseInt(date.format('D'));
  //   const year = parseInt(date.format('Y'));

  //   console.log(month);
  // });

  return (
    <MainLayout>
      <h2>Home</h2>
      <Fab color="primary" className={classes.fab} onClick={navigateToWrite}>
        <HiOutlinePlus style={{ width: '35px', height: '35px' }} />
      </Fab>
    </MainLayout>
  );
};
