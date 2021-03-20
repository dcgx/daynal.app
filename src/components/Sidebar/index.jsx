import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { MdAdd } from 'react-icons/md';
import { Button, Tooltip, Zoom } from '@material-ui/core';

import './Sidebar.scss';

const Sidebar = () => {
  const history = useHistory();
  const { name } = useSelector((state) => state.auth);

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="text-center mb-5">
          <h3>
            Welcome! <span>{name}</span>
          </h3>
        </div>
        <div style={{ background: 'white', margin: '15px' }}>CALENDAR</div>
        <div className="text-center">
          <Tooltip
            title="0 stories found on Mar 14. Write new"
            TransitionComponent={Zoom}
          >
            <Button
              variant="contained"
              endIcon={<MdAdd />}
              onClick={() => history.push('/write')}
            >
              New Entry
            </Button>
          </Tooltip>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
