import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import { startNewEntry } from '../../../../actions/entry';

import './WriterHeader.scss';

const style = {
  button: {
    margin: '6px',
    textTransform: 'none',
    borderRadius: '20px',
    fontWeight: '600',
  },
};

const WriterHeader = (props) => {
  const dispatch = useDispatch();

  const handleAddNewEntry = () => {
    dispatch(startNewEntry());
  };

  return (
    <Fragment>
      <div className="writer-header">
        <Button style={style.button} color="primary" variant="contained">
          Discard
        </Button>
        <Button
          style={style.button}
          color="secondary"
          variant="contained"
          onClick={handleAddNewEntry}
        >
          Done
        </Button>
      </div>
      <div className="writer-date">
        <h3>14 March 2021</h3>
        <span>
          Sunday, <span>19:30 PM</span>
        </span>
      </div>
    </Fragment>
  );
};

WriterHeader.propTypes = {};

export default WriterHeader;
