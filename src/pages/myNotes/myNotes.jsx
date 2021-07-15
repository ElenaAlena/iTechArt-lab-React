import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import NotesList from "components/NotesList/NotesList";

import MyNoteDesctiption from "./MyNoteDescription/myNotesDesctiption";
import MyNoteEdit from "./MyNoteEdit/MyNoteEdit";

import useStyles from "./styled.js";

const MyNotes = ({
  notes,
  activeNoteId,
  setActiveNoteId,
  getActiveNote,
  isEditMode,
  setIsEditMode,
  onUpdateNote,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>My list of Notes</h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <NotesList
            notes={notes}
            activeNoteId={activeNoteId}
            setActiveNoteId={setActiveNoteId}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
          />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {isEditMode ? (
              <MyNoteEdit
                activeNote={getActiveNote()}
                setIsEditMode={setIsEditMode}
                onUpdateNote={onUpdateNote}
              />
            ) : (
              <MyNoteDesctiption activeNote={getActiveNote()} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
MyNotes.propTypes = {
  activeNoteId: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
  getActiveNote: PropTypes.func,
  isEditMode: PropTypes.bool,
  setIsEditMode: PropTypes.func,
  onUpdateNote: PropTypes.func,
};
export default MyNotes;
