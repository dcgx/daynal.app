import React from 'react';

import { Container } from '@material-ui/core';
import { WriterSidebar, WriterHeader } from './components';
import { useSelector } from 'react-redux';

export const Writer = () => {
  const { selectedEntry } = useSelector((state) => state.entry);

  return (
    <div style={{ display: 'flex' }}>
      <WriterSidebar />
      <Container>
        <WriterHeader />
        <form className="write__form">
          <input
            type="text"
            placeholder="Title ..."
            className="write__input"
            value={selectedEntry.title}
          />

          <textarea
            className="write__textarea"
            placeholder="What happened today?"
            value={selectedEntry.content}
          />

          <div className="write__image">
            <img src="https://picsum.photos/200/300" alt="Image" />
          </div>
        </form>
      </Container>
    </div>
  );
};
