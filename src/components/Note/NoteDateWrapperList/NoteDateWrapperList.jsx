import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
};

const NoteDateWrapperList = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default NoteDateWrapperList;
