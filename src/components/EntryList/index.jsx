import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
};

const EntryList = (props) => {
  return <div style={style}>{props.children}</div>;
};

export default EntryList;
