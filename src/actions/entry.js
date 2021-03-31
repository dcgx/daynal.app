import {
  SELECT_ENTRY,
  LOAD_ENTRIES,
  GET_ENTRIES_BY_USER,
} from '../constants/actionTypes';

import { db } from '../services/firebase';

export const startNewEntry = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newEntry = {
      title: '',
      content: '',
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`users/${uid}/entries`).add(newEntry);

    dispatch(selectEntry(docRef.id, newEntry));
  };
};

export const startGetEntriesByUser = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const snapshot = await db.collection(`users/${uid}/entries`).get();
    const entries = [];

    snapshot.forEach((snapshot) =>
      entries.push({ id: snapshot.id, ...snapshot.data() })
    );

    dispatch(loadEntries(entries));
  };
};

export const selectEntry = (id, entry) => ({
  type: SELECT_ENTRY,
  payload: {
    id,
    ...entry,
  },
});

export const loadEntries = (entries) => ({
  type: LOAD_ENTRIES,
  payload: entries,
});
