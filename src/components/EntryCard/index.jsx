import React from 'react';
import PropTypes from 'prop-types';

import { MdAdd } from 'react-icons/md';
import { Card, IconButton } from '@material-ui/core';

import './EntryCard.scss';

const EntryCard = (props) => {
  return (
    <Card className="entry-card pointer">
      <div className="entry-datebox">
        <span>{props.creationDate}</span>
        <span>Monday</span>
        <IconButton>
          <MdAdd />
        </IconButton>
      </div>
      <div>{props.children}</div>
    </Card>
  );
};

EntryCard.propTypes = {
  creationDate: PropTypes.string.isRequired,
};

export default EntryCard;
