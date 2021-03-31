import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import { MdAdd } from 'react-icons/md';

import { Fab } from '@material-ui/core';
import moment from 'moment';

import MainLayout from '../../layout';
import Entry from '../../components/Entry';
import EntryCard from '../../components/EntryCard';
import EntryList from '../../components/EntryList';

export const Home = () => {
  const history = useHistory();
  const { entries } = useSelector((state) => state.entry);

  // entries.reduce(function (res, value) {
  //   const date = moment(value.date);

  //   const month = parseInt(date.format('DD YYYY'));
  //   const day = parseInt(date.format('D'));
  //   const year = parseInt(date.format('Y'));

  //   console.log(month);
  // });

  return (
    <MainLayout>
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
      <Fab
        style={{ position: 'absolute', bottom: '0px', right: '0px' }}
        onClick={() => history.push('/write')}
      >
        <MdAdd />
      </Fab>
    </MainLayout>
  );
};
