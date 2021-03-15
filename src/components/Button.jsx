import React from 'react';
import PropTypes from 'prop-types';

const style = (primary = false, block = false) => ({
  backgroundColor: primary ? 'transparent' : '#eee',
  fontFamily: 'Poppins',
  fontWeight: '500',
  fontSize: '',
  lineHeight: '1.2',
  textTransform: 'uppercase',
  width: block ? '100%' : undefined,
  height: '50px',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '15px',
  cursor: 'pointer',
});

export const Button = (props) => {
  return (
    <button {...props} style={style(props.primary)}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  block: PropTypes.bool,
};
