import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
};

export const Entries = (props) => {
  return <div style={style}>{props.children}</div>;
};
