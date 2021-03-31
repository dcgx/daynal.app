import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdAccountCircle, MdNotifications } from 'react-icons/md';

import { Button, IconButton, Menu, MenuItem, Select } from '@material-ui/core';
import { Input } from '../../../components/Input';

import { startSignOut } from '../../../actions/auth';

import './AppBar.scss';

const AppBar = () => {
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
    <header className="appbar">
      <div className="appbar-left">
        <h1 style={{ margin: '0 20px' }}>Daynal</h1>
        <div style={{ margin: '0 20px' }}>
          <Button variant="contained" color="secondary">
            today
          </Button>
        </div>
        <Input placeholder="Search" />
      </div>
      <div className="appbar-right">
        <Select>
          <option value="">Latest</option>
          <option value="">Earlest</option>
        </Select>
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

export default AppBar;
