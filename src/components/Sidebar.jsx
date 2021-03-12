import { faCalendarPlus, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { startSignOut } from '../actions/auth';

import { Button } from '../components/Button';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startSignOut());
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <div className="nav__header">
          <FontAwesomeIcon icon={faMoon} size="lg" />
          <h3>
            Welcome! <span>Username</span>
          </h3>
        </div>

        <div className="sidebar__new-entry">
          <FontAwesomeIcon icon={faCalendarPlus} size="6x" />
          <p className="mt-5 ">New entry</p>
        </div>
        <Button primary={true} onClick={handleLogout}>
          Logout
        </Button>
      </nav>
    </aside>
  );
};
