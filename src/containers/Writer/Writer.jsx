import React from "react";

import { Container, makeStyles } from "@material-ui/core";
import { WriterSidebar, WriterHeader } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import { selectEntry } from "../../actions/entry";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    padding: "20px",
  },
  inputTitle: {
    fontSize: "20px",
    background: "transparent",

    fontWeight: "800",
    paddingBottom: "20px",
  },
  textarea: {
    color: "gray",
    background: "transparent",
    fontSize: "16px",
    flex: "1 1 auto",
    resize: "none",
  },
  image: {
    boxShadow: "2px 2px gray",
    height: "250px",
  },
}));

export const Writer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { selectedEntry } = useSelector((state) => state.entry);
  const [formValues, handleInputChange, reset] = useForm(selectedEntry);
  const { title, content } = formValues;
  const entryId = props.match.params.entryId; // if to update

  useEffect(() => {
    dispatch(selectEntry(formValues.id, { ...formValues }));
  }, [formValues]);

  return (
    <div className={classes.root}>
      <WriterSidebar />
      <Container>
        <WriterHeader entryId={entryId} />
        <form className={classes.form}>
          <input
            className={classes.inputTitle}
            type="text"
            placeholder="Title ..."
            name="title"
            value={title}
            onChange={handleInputChange}
          />

          <textarea
            className={classes.textarea}
            placeholder="What happened today?"
            name="content"
            value={content}
            onChange={handleInputChange}
          />

          <div>
            <img
              className={classes.image}
              src="https://picsum.photos/200/300"
              alt="Image"
            />
          </div>
        </form>
      </Container>
    </div>
  );
};
