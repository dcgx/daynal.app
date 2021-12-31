import noteReducer from '../noteReducer.js'

describe('noteReducer', () => {
  test('returns new state after action with toggle importance', () => {
    const state = {
      notes: [
        {
          id: 1,
          title: 'title1',
          content: 'note1',
          important: false
        },
        {
          id: 2,
          title: 'title2',
          content: 'note2',
          important: false
        }
      ],
      selectedNote: {}
    }

    const action = {
      type: '@note/toggleImportant',
      payload: {
        id: 2
      }
    }

    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual([
      {
        id: 2,
        title: 'title2',
        content: 'note2',
        important: true
      }
    ])
  })
})
