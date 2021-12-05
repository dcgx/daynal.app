import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { FiMoreVertical } from 'react-icons/fi';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
  },
  dot: {
    height: '5px',
    width: '5px',
    background: 'rgb(76, 175, 80)',
    borderRadius: '50%',
    top: '13px',
    left: '-8px',
    position: 'absolute',
  },
  time: {
    flex: 1,
  },
  timeText: {
    color: 'rgb(76, 175, 80)',
    fontSize: '0.85rem',
  },
});

const NoteListItem = ({ children, time }) => {
  const classes = useStyles();
  return (
    <li className={classes.wrapper}>
      <div className={classes.dot}></div>
      <div className={classes.time}>
        <span className={classes.timeText}>{time}</span>
        <h5>{children}</h5>
      </div>
      <IconButton>
        <FiMoreVertical />
      </IconButton>
    </li>
  );
};

export default NoteListItem;
