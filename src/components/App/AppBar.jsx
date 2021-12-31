import React, { useState } from 'react'

import { HiSearch, MdAccountCircle, MdNotifications } from 'react-icons/all'
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
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  avatar: {
    borderRadius: '50px ',
    width: '20px'
  }
}))

const AppBar = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogout = () => {
    console.log('logout')
  }

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
            justifyContent="flex-start"
            xs={8}
            sm={11}
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
                  )
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
  )
}

export default AppBar
