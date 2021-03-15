import React from 'react';
import { Button, Container, IconButton } from '@material-ui/core';
import { RiImageAddLine } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';

const style = {
  button: {
    margin: '6px',
    textTransform: 'none',
    borderRadius: '20px',
    fontWeight: '600',
  },
  iconButton: {
    margin: '10px 0',
    background: 'white',
  },
};

export const Write = () => {
  return (
    <div className="write-page">
      <aside className="write__sidebar">
        <IconButton style={style.iconButton}>
          <RiImageAddLine />
        </IconButton>
        <IconButton style={style.iconButton}>
          <FaTrashAlt />
        </IconButton>
      </aside>
      <Container>
        <div className="write__header">
          <Button style={style.button} color="primary" variant="contained">
            Discard
          </Button>
          <Button style={style.button} color="secondary" variant="contained">
            Done
          </Button>
        </div>

        <div className="write__date">
          <h3>14 March 2021</h3>
          <span>
            Sunday, <span>19:30 PM</span>
          </span>
        </div>

        <div className="write__content">
          <input type="text" placeholder="Title ..." className="write__input" />

          <textarea
            className="write__textarea"
            placeholder="What happened today?"
          />

          <div className="write__image">
            <img src="https://picsum.photos/200/300" alt="Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};
