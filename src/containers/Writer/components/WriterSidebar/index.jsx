import React from 'react';
import PropTypes from 'prop-types';

import { IconButton } from '@material-ui/core';
import { RiImageAddLine } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';
import './WriterSidebar.scss';

const style = {
  iconButton: {
    margin: '10px 0',
    background: 'white',
  },
};

const WriterSidebar = (props) => {
  return (
    <aside className="writer-sidebar">
      <IconButton style={style.iconButton}>
        <RiImageAddLine />
      </IconButton>
      <IconButton style={style.iconButton}>
        <FaTrashAlt />
      </IconButton>
    </aside>
  );
};

WriterSidebar.propTypes = {};

export default WriterSidebar;
