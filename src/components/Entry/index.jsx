import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { FiMoreHorizontal } from 'react-icons/fi';

import './Entry.scss';

const Entry = (props) => {
  return (
    <div className="entry">
      <div className="entry-header">
        <div>
          <div className="dot" />
          <small className="entry-time">{props.creationTime}</small>
        </div>
        <IconButton size="small">
          <FiMoreHorizontal />
        </IconButton>
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
  creationTime: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default Entry;
