import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  let className = 'btn';
  if (props.primary) className += ' btn-primary';
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
};
