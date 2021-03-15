import { Button, Tooltip, Zoom } from '@material-ui/core';
import React from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { startSignOut } from '../actions/auth';

const style = {
  root: {
    background: '#ccc',
    display: 'flex',
    height: '100vh',
    padding: '100px 10px',
    width: '370px',
    overflow: 'auto',
    position: 'initial',
  },
  sidebarNav: {
    display: 'block',
    width: '100%',
  },
  button: {
    borderRadius: '20px',
    fontWeight: '600',
    fontSize: '18px',
    textShadow: '2px 2px #ddd',
    textTransform: 'none',
  },
};

//   .nav__header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin: 10px;
//   }
// }

// .sidebar__new-entry {
//   display: flex;
//   color: gray;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 20px;
//   cursor: pointer;

//   p {
//     font-size: 22px;
//   }
// }

export const Sidebar = () => {
  const history = useHistory();
  return (
    <aside style={style.root}>
      <nav style={style.sidebarNav}>
        <div className="text-center mb-5">
          <h3>
            Welcome! <span>Username</span>
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
              style={style.button}
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
