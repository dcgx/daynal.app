import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { MdAdd } from "react-icons/md";
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
} from "@material-ui/core";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

const AppDrawer = () => {
  const history = useNavigate();
  const classes = useStyles();
  const { name } = useSelector((state) => state.auth);
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
            <strong>Welcome! {name}</strong>
          </ListItem>
          <ListItem>Calendar</ListItem>
          <Grid>
            <Tooltip
              title="0 stories found on Mar 14. Write new"
              TransitionComponent={Zoom}
            >
              <Button
                variant="contained"
                endIcon={<MdAdd />}
                onClick={() => history.push("/write/new")}
              >
                New Entry
              </Button>
            </Tooltip>
          </Grid>
        </List>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
