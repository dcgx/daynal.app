import React from 'react';
import PropTypes from 'prop-types';

const style = {
  root: {
    padding: '20px 10px',
  },
};

export const FormControl = (props) => {
  return <div style={style.root}>{props.children}</div>;
};
