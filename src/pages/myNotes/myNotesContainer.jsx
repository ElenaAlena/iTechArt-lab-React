import { useState } from "react";
import MyNotes from "./myNotes";
import MyNoteDesctiption from "./myNotesDesctiption";
import Notes from "./constants/notes";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function MyNotesContainer() {
  const classes = useStyles();

  const [notes] = useState(Notes);
  const [activeNoteId, setActiveNoteId] = useState(-1);
  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNoteId);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>My list of Notes</h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <MyNotes
            notes={notes}
            activeNoteId={activeNoteId}
            setActiveNoteId={setActiveNoteId}
          />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <MyNoteDesctiption activeNote={getActiveNote()} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
MyNotesContainer.propTypes = {
  activeNoteId: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
}
export default MyNotesContainer;
