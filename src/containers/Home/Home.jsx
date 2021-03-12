import React from 'react';

import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';

import { Entry } from '../../components/Entry';

const style = {
  display: 'flex',
  main: {
    paddingTop: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
};

export const Home = () => {
  return (
    <div>
      <Header />
      <div style={style}>
        <Sidebar />
        <main style={style.main}>
          {/* <p>
          Select something <br />
          Create a new entry !
        </p> */}
          <div>March 2021</div>

          <Entry />
          <Entry />
          <Entry />
          <Entry />
        </main>
      </div>
    </div>
  );
};
