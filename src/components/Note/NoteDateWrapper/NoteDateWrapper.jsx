import React from 'react';
import PropTypes from 'prop-types';

import { MdAdd } from 'react-icons/md';
import { Card, IconButton } from '@material-ui/core';

import NoteList from '../NoteList/NoteList';

import './NoteDateWrapper.scss';

const NoteDateWrapper = ({ children }) => {
  return (
    <Card className="note-card pointer">
      <div className="note-card__header">
        <h4>
          05 December 2021, <span>Monday</span>
        </h4>
        <IconButton>
          <MdAdd />
        </IconButton>
      </div>
      <NoteList>{children}</NoteList>
    </Card>
  );
};

export default NoteDateWrapper;
