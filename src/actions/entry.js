import { actionTypes } from "../constants/actionTypes";

import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { firestore } from "../services/firebase";
import { getAuth } from "@firebase/auth";

export const startCreateEntry = (entry) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newEntry = {
      title: entry.title,
      content: entry.content,
      date: new Date().getTime(),
    };

    const docRef = "";

    // const docRef = await addDoc(
    //   collection(db, `users/${uid}/entries`),
    //   newEntry
    // );

    dispatch(addEntry(docRef.id, newEntry));
  };
};

export const startUpdateEntry = (entry) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!entry.url) delete entry.url;

    const entryToUpdate = { ...entry };
    delete entryToUpdate.id;

    // await updateDoc(
    //   collection(db, `users/${uid}/entries/${entry.id}`),
    //   entryToUpdate
    // );

    dispatch(updateEntry(entry.id, entry));
  };
};

export const startDeleteEntry = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    // deleteDoc(doc(db, `users/${uid}/entries/${id}`));

    dispatch(deleteEntry(id));
  };
};

export const startFetchEntries = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    // const snapshot = await getDoc(collection(db, `users/${uid}/entries`));
    const snapshot = [];
    const entries = [];

    snapshot.forEach((snapshot) =>
      entries.push({ id: snapshot.id, ...snapshot.data() })
    );

    dispatch(loadEntries(entries));
  };
};

export const addEntry = (id, entry) => ({
  type: actionTypes.addEntry,
  payload: {
    id,
    ...entry,
  },
});

export const updateEntry = (id, entry) => ({
  type: actionTypes.updateEntry,
  payload: {
    id,
    entry: {
      id,
      ...entry,
    },
  },
});

export const deleteEntry = (id) => ({
  type: actionTypes.deleteEntry,
  payload: id,
});

export const loadEntries = (entries) => ({
  type: actionTypes.loadEntries,
  payload: entries,
});

export const selectEntry = (id, entry) => ({
  type: actionTypes.selectEntry,
  payload: {
    id,
    ...entry,
  },
});

export const resetSelectedEntry = () => ({
  type: actionTypes.resetSelectedEntry,
  payload: "",
});
