import { Card, IconButton } from '@material-ui/core';
import React from 'react';
import { MdAdd } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';

export const Entry = () => {
  return (
    <Card className="entry pointer">
      <div className="entry__date-box">
        <span>23 March 2021</span>
        <span>Monday</span>
        <IconButton>
          <MdAdd />
        </IconButton>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="dot" />
            <small style={{ color: 'green', fontWeight: '600' }}>
              01:32 AM
            </small>
          </div>
          <IconButton size="small">
            <FiMoreHorizontal />
          </IconButton>
        </div>
        <div>
          <p className="entry__title">A new day</p>
          <p className="entry__content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus
          </p>
          <div
            className="entry__picture"
            style={{
              backgroundSize: 'cover',
              backgroundImage: 'url(https://picsum.photos/200/300)',
            }}
          ></div>
        </div>
      </div>
    </Card>
  );
};
