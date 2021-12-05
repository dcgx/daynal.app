import { noteReducer } from './noteReducer';

describe('noteReducer', () => {
  tests('returns new state after action with toggle importance', () => {
    const state = [
      {
        id: 1,
        title: 'Awesome redux',
        content: 'content of',
        important: false,
      },
      {
        id: 2,
        title: 'Note 2',
        content: 'note2',
        important: false,
      },
    ];

    const action = {
      type: '@note/toggleImportant',
      payload: {
        id: 2,
      },
    };

    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(2);
    expect(newState).toContentEqual(state[0]);
    expect(newState).toContainEqual({
      id: 2,
      title: 'Note 2',
      content: 'note2',
      important: true,
    });
  });
});
