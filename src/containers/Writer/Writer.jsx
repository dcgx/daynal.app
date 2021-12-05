import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Wrapper } from './components';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 200px)',
  },
  inputTitle: {
    fontSize: '20px',
    background: 'transparent',
    fontWeight: '800',
    paddingBottom: '20px',
  },
  textarea: {
    color: 'gray',
    background: 'transparent',
    fontSize: '16px',
    flex: '1 1 auto',
    resize: 'none',
  },
  image: {
    boxShadow: '2px 2px gray',
    height: '250px',
  },
}));

export const Writer = (props) => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <WriterSidebar />
    //   <Container>
    //     <WriterHeader entryId={entryId} />
    //     <form className={classes.form}>
    //       <input
    //         className={classes.inputTitle}
    //         type="text"
    //         placeholder="Title ..."
    //         name="title"
    //         value={title}
    //         onChange={handleInputChange}
    //       />

    //       <textarea
    //         className={classes.textarea}
    //         placeholder="What happened today?"
    //         name="content"
    //         value={content}
    //         onChange={handleInputChange}
    //       />

    //       <div>
    //         <img
    //           className={classes.image}
    //           src="https://picsum.photos/200/300"
    //           alt="Image"
    //         />
    //       </div>
    //     </form>
    //   </Container>
    // </div>
    <Wrapper>
      <form className={classes.form}>
        <input
          className={classes.inputTitle}
          type="text"
          placeholder="Title ..."
          name="title"
        />

        <textarea
          className={classes.textarea}
          placeholder="What happened today?"
          name="content"
        />

        {/* <div>
          <img
            className={classes.image}
            src="https://picsum.photos/200/300"
            alt="Image"
          />
        </div> */}
      </form>
    </Wrapper>
  );
};
