import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10px',
  },
};

export const Input = (props) => {
  return (
    <div className="input__wrap">
      <label className="input__label">{props.label}</label>
      <div style={style.icon}>
        <FontAwesomeIcon icon={props.icon} />
        <input className="input" autoComplete="off" {...props} />
      </div>
      <span className="input__focus"></span>
    </div>
  );
};

Input.protoTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
};
