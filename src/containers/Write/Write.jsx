import React from 'react';

import { Container } from '../../components/Container';

export const Write = () => {
  return (
    <div className="write-page">
      <aside className="write__sidebar">
        <button>X</button>
        <button>X</button>
      </aside>
      <Container>
        <div className="write__header">
          <button>Discard</button>
          <button>Done</button>
        </div>

        <div className="write__date">Information date</div>

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
