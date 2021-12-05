import React from 'react';
import { useNavigate } from 'react-router';

import { MdAdd } from 'react-icons/md';
import {
  Button,
  Drawer,
  Tooltip,
  Zoom,
  List,
  ListItem,
  Toolbar,
  Grid,
  makeStyles,
} from '@material-ui/core';

const DRAWER_WIDTH = 320;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  calendar: {
    border: '1px solid red',
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    textAlign: 'center',
    marginTop: '10px',
  },
}));

const AppDrawer = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const navigateToWrite = () => {
    navigate('writer/new');
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem>
            <strong>Welcome! Name!</strong>
          </ListItem>
          <ListItem>
            <div className={classes.calendar}>Calendar</div>
          </ListItem>
          <Grid className={classes.buttonWrapper}>
            <Tooltip
              title="0 stories found on Mar 14. Write new"
              TransitionComponent={Zoom}
            >
              <Button
                variant="contained"
                endIcon={<MdAdd />}
                onClick={navigateToWrite}
              >
                New Note
              </Button>
            </Tooltip>
          </Grid>
        </List>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
