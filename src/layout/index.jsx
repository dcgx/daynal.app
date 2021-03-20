import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '../components/AppBar';
import Sidebar from '../components/Sidebar';

const MainLayout = (props) => {
  return (
    <div style={{ display: 'flex', height: 'auto' }}>
      <AppBar />
      <Sidebar />
      <main style={{ margin: '100px auto' }}>{props.children}</main>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
