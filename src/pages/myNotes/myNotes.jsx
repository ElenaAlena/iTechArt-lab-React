import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import NotesList from "components/NotesList/NotesList";
import FilterByDate from "components/Filter/FilterByDate";
import FilterByTitle from "components/Filter/FilterByTitle";

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
  onAddNote,
  onDeleteNote,
  onFilterByDate,
  onFilterByTitle,
  getAllUsersSuccess,
  allUsersData,
  dragService,
  setCurrentNote,
  reOrder,
}) => {
  const classes = useStyles();
  const currentActiveNote = getActiveNote();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>My list of Notes</h1>
        </Grid>
        <Grid item xs={12} className={classes.alignLeft}>
          <Button
            variant="contained"
            className={classes.headerBtn}
            onClick={onAddNote}
          >
            Add Note
          </Button>
          <FilterByDate onFilterByDate={onFilterByDate} />
          <FilterByTitle onFilterByTitle={onFilterByTitle} />
        </Grid>
        <Grid item xs={4}>
          {notes &&
            notes.pages.map((page, i) => (
              page.data && <NotesList
                notes={page.data}
                activeNoteId={activeNoteId}
                setActiveNoteId={setActiveNoteId}
                isEditMode={isEditMode}
                setIsEditMode={setIsEditMode}
                onDeleteNote={onDeleteNote}
                key={i}
                getAllUsersSuccess={getAllUsersSuccess}
                allUsersData={allUsersData}
                dragService={dragService}
                setCurrentNote={setCurrentNote}
                reOrder={reOrder}
              />
            ))}
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {isEditMode && currentActiveNote ? (
              <MyNoteEdit
                activeNote={currentActiveNote}
                onUpdateNote={onUpdateNote}
              />
            ) : (
              <MyNoteDesctiption activeNote={currentActiveNote} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
MyNotes.propTypes = {
  activeNoteId: PropTypes.string,
  notes: PropTypes.object,
  setActiveNoteId: PropTypes.func,
  getActiveNote: PropTypes.func,
  isEditMode: PropTypes.bool,
  setIsEditMode: PropTypes.func,
  onUpdateNote: PropTypes.func,
};
export default MyNotes;
