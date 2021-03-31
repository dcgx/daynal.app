import React from 'react';
import PropTypes from 'prop-types';

import { FiMoreHorizontal } from 'react-icons/fi';
import { Menu, MenuItem, IconButton } from '@material-ui/core';

import './Entry.scss';
import { useDispatch } from 'react-redux';
import { selectEntry } from '../../actions/entry';
import { useHistory } from 'react-router-dom';

const Entry = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickEdit = () => {
    dispatch(selectEntry(props.id, props));
    history.push('/write');
  };
  const handleClickMore = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="entry">
      <div className="entry-header">
        <div>
          <div className="dot" />
          <small className="entry-time">{props.creationTime}</small>
        </div>
        <IconButton size="small" onClick={handleClickMore}>
          <FiMoreHorizontal />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClickEdit}>Edit</MenuItem>
        </Menu>
      </div>
      <div>
        <p className="entry-title">{props.title}</p>
        <p className="entry-content">{props.content}</p>
        <div
          className="entry-image"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${props.image})`,
          }}
        ></div>
      </div>
    </div>
  );
};

Entry.propTypes = {
  // creationTime: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default Entry;
