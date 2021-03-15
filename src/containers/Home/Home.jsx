import React from 'react';

import { Sidebar } from '../../components/Sidebar';
import { AppBar } from '../../components/AppBar';

import { Entry } from '../../components/Entry';
import { Fab } from '@material-ui/core';
import { MdAdd } from 'react-icons/md';
import { useHistory } from 'react-router';
import { Entries } from '../../components/Entries';

const style = {
  display: 'flex',
};

export const Home = () => {
  const history = useHistory();

  const handleGoToWrite = () => {
    history.push('/write');
  };

  return (
    <div style={style}>
      <AppBar />
      <Sidebar />
      <main style={{ margin: '100px auto' }}>
        <Entries>
          <div>March 2021</div>

          <Entry />
          <Entry />
          <Entry />
          <Entry />
        </Entries>
      </main>
      <Fab
        style={{ position: 'absolute', bottom: '0px', right: '0px' }}
        onClick={handleGoToWrite}
      >
        <MdAdd />
      </Fab>
    </div>
  );
};
