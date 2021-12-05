import React from 'react';
import PropTypes from 'prop-types';

const style = {
  root: {
    position: 'relative',
    height: '32px',
    borderBottom: '1px solid #d9d9d9',
  },
  input: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: '16px',
    color: '#333',
    display: 'block',
    width: '100%',
    // height: '55px',
    // lineHeight: '1.5',
    background: 'transparent',
    padding: '7px 0px',
    // padding: '0 7px 0 7px',
  },
  // icon: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginLeft: '10px',
  // },
};

export const Input = (props) => {
  return (
    <div style={style.root}>
      <input style={style.input} autoComplete="off" {...props} />
    </div>
  );
};

Input.protoTypes = {
  icon: PropTypes.element,
};
