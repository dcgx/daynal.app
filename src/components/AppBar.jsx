import { Button, IconButton, Menu, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { MdAccountCircle, MdNotifications } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { startSignOut } from '../actions/auth';

import { Input } from './Input';

const style = {
  background: '#eee',
  position: 'fixed',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  zIndex: '1',
  button: {
    borderRadius: '20px',
  },
};

export const AppBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    dispatch(startSignOut());
  };

  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <header style={style}>
      <div style={{ width: '100%', display: 'flex', margin: '10px 20px' }}>
        {/* LOGO COMPONENT */}
        <h1 style={{ margin: '0 20px' }}>Daynal</h1>
        <div style={{ margin: '0 20px' }}>
          <Button style={style.button} variant="contained" color="primary">
            today
          </Button>
        </div>
        {/* Search Component */}
        <Input placeholder="Search" />
      </div>
      <div
        style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
      >
        {/* SELECT COMPONENT */}
        <Select>
          <option value="">Latest</option>
          <option value="">Earlest</option>
        </Select>
        {/* IcconButton */}
        <IconButton>
          <MdNotifications />
        </IconButton>
        <IconButton onClick={handleMenu}>
          <MdAccountCircle />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};
