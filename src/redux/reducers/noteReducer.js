const initialState = {
  notes: [],
  selectedNote: {}
}

export default function reducer(state = initialState, action = {}) {
  if (action.type === '@note/created') {
    return state.notes.concat(action.payload)
  }
  if (action.type === '@note/toggleImportant') {
    const { id } = action.payload
    return state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          important: !note.important
        }
      }
      return note
    })
  }
  return state
}
