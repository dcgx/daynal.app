import React from 'react';

const style = {
  label: {
    fontFamily: 'Poppins',
    fontWeight: '300',
    fontSize: '16px',
    color: '#333333',
    // lineheight: 3,
    padding: '5px 0',
  },
};

export const Label = (props) => {
  return <label style={style.label}>{props.children}</label>;
};
