import React from 'react';
import { useHistory } from 'react-router';
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
  const history = useHistory();
  const classes = useStyles();
  const { entries } = useSelector((state) => state.entry);

  const handleGoToWrite = () => {
    history.push('/write/new');
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
      <Grid container justify="center">
        <span>March 2021</span>
      </Grid>
      <EntryList>
        {entries.map((entry) => (
          <EntryCard creationDate="30 March 2021">
            <Entry {...entry} />
          </EntryCard>
        ))}

        {/* <EntryCard creationDate="30 March 2021">
          <Entry
            creationTime="10:20 AM"
            title="Entry test"
            content="loremlorem"
            image="https://picsum.photos/200/300"
          />
          <Entry
            creationTime="02:20 AM"
            title="React is hard"
            content="loremloremeee"
            image="https://picsum.photos/200/300"
          />
        </EntryCard>
        <EntryCard creationDate="30 March 2021">
          <Entry
            creationTime="21:21 PM"
            title="React is hard"
            content="loremloremeee"
            image="https://picsum.photos/200/300"
          />
        </EntryCard>
        <EntryCard creationDate="30 March 2021">
          <Entry
            creationTime="20:20 PM"
            title="React is hard"
            content="loremloremeee"
            image="https://picsum.photos/200/300"
          />
        </EntryCard> */}
      </EntryList>
      <Fab color="primary" className={classes.fab} onClick={handleGoToWrite}>
        <HiOutlinePlus style={{ width: '35px', height: '35px' }} />
      </Fab>
    </MainLayout>
  );
};
