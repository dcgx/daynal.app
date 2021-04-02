import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdAccountCircle, MdNotifications } from 'react-icons/md';
import { HiSearch } from 'react-icons/hi';
import {
  AppBar as MuiAppBar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  TextField,
  InputAdornment,
  Grid,
  makeStyles,
} from '@material-ui/core';

import { startSignOut } from '../../../actions/auth';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const AppBar = () => {
  const classes = useStyles();
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
    <MuiAppBar
      className={classes.appBar}
      position="fixed"
      style={{ background: '#fafafa' }}
    >
      <Toolbar>
        <Typography variant="h4" color="textPrimary">
          Daynal
        </Typography>
        <Grid container alignItems="center">
          <Grid
            container
            alignItems="center"
            justify="flex-start"
            xs={8}
            sm={11}
            style={{ border: '1px solid red' }}
          >
            <Grid item style={{ margin: '0 20px' }}>
              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: '20px' }}
              >
                Today
              </Button>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HiSearch />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">
                      <HiSearch />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
