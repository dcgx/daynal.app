import React from 'react';
import PropTypes from 'prop-types';

import { Grid, IconButton } from '@material-ui/core';
import { RiImageAddLine } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';
import './WriterSidebar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEntry, startDeleteEntry } from '../../../../actions/entry';
import { useHistory } from 'react-router-dom';

const style = {
  iconButton: {
    margin: '10px 0',
    background: 'white',
  },
};

const WriterSidebar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedEntry } = useSelector((state) => state.entry);
  const handleClickDelete = () => {
    if (selectedEntry) {
      dispatch(startDeleteEntry(selectedEntry.id));
      history.goBack();
    }
  };

  return (
    <aside className="writer-sidebar">
      <Grid container alignItems="center" justify="center">
        <IconButton style={style.iconButton}>
          <RiImageAddLine />
        </IconButton>
        <IconButton onClick={handleClickDelete} style={style.iconButton}>
          <FaTrashAlt />
        </IconButton>
      </Grid>
    </aside>
  );
};

WriterSidebar.propTypes = {};

export default WriterSidebar;
