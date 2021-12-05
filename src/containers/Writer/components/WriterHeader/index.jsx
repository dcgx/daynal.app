import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { HiOutlinePencil } from 'react-icons/hi';
import { Button, IconButton, makeStyles } from '@material-ui/core';
import moment from 'moment';
import { useTheme } from '@material-ui/core/styles';

import {
  resetSelectedEntry,
  startCreateEntry,
  startUpdateEntry,
} from '../../../../actions/entry';

import './WriterHeader.scss';
import { useHistory } from 'react-router-dom';
import { hideAlertDialog, showAlertDialog } from '../../../../actions/ui';
import AlertDialog from '../../../../components/AlertDialog';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '6px',
    textTransform: 'none',
    borderRadius: '20px',
    fontWeight: '600',
  },
}));

const WriterHeader = ({ entryId }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedEntry } = useSelector((state) => state.entry);
  const formattedDayNum = moment(selectedEntry.date).format('DD');
  const formattedDate = moment(selectedEntry.date).format('MMMM YYYY');
  const formattedDay = moment(selectedEntry.date).format('dddd');
  const formattedTime = moment(selectedEntry.date).format('h:mm A');

  const handleCreateDone = () => {
    dispatch(startCreateEntry(selectedEntry));
    history.goBack();
  };

  const handleUpdateDone = () => {
    dispatch(startUpdateEntry(selectedEntry));
    history.goBack();
  };

  const handleShowAlertDialog = () => {
    dispatch(showAlertDialog('discard message!!'));
  };

  const handleDiscard = () => {
    dispatch(resetSelectedEntry());
    dispatch(hideAlertDialog());
    history.goBack();
  };

  return (
    <Fragment>
      <div className="writer-header">
        <Button
          className={classes.button}
          style={{ background: 'transparent' }}
          variant="contained"
          onClick={handleShowAlertDialog}
        >
          Discard
        </Button>
        <AlertDialog onDiscard={handleDiscard} />

        <Button
          className={classes.button}
          color="secondary"
          variant="contained"
          onClick={entryId ? handleUpdateDone : handleCreateDone}
        >
          Done
        </Button>
      </div>
      <div className="writer-date">
        <h3>
          <span style={{ color: `${theme.primary}` }}>{formattedDayNum} </span>
          {formattedDate}
        </h3>
        <span>
          {formattedDay}, <span>{formattedTime}</span>
        </span>
        <IconButton>
          <HiOutlinePencil />
        </IconButton>
      </div>
    </Fragment>
  );
};

WriterHeader.propTypes = {
  entryId: PropTypes.string,
};

export default WriterHeader;
