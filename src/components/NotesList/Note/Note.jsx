import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";

import { CutDescription, DateFormatter } from "utils/utils.js";

import useStyles from "./styled";

const Note = ({
  note,
  activeNoteId,
  setActiveNoteId,
  isEditMode,
  setIsEditMode,
  isSharedMode
}) => {
  const classes = useStyles();
  const onCloseNote = (event) => {
    event.stopPropagation();
    setActiveNoteId(-1);
  };
  const onEditNote = (event) => {
    event.stopPropagation();
    setActiveNoteId(note.id);
    setIsEditMode(true);
  };
  const onShowNote = (noteId) => {
    !isSharedMode && setIsEditMode(false);
    setActiveNoteId(noteId);
  };
  return (
    <Card
      className={[
        classes.root,
        note.id === activeNoteId ? classes.active : "",
      ].join(" ")}
      onClick={() => onShowNote(note.id)}
    >
      <CardHeader
        className={classes.text}
        action={
          <div>
            {note.id === activeNoteId && !isEditMode && (
              <IconButton
                aria-label="close"
                className={classes.btn}
                onClick={(event) => onCloseNote(event)}
              >
                <CloseIcon />
              </IconButton>
            )}
            {!isSharedMode && (
              <IconButton
                aria-label="edit"
                className={classes.btn}
                onClick={(event) => onEditNote(event)}
              >
                <EditIcon />
              </IconButton>
            )}
          </div>
        }
        title={note.title}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.text}
        >
          {note.description && CutDescription(note.description, 20) + "..."}
        </Typography>
        <Typography className={classes.meta} color="textSecondary" gutterBottom>
          Date of creation {DateFormatter(note.dateCreation)}
        </Typography>
        {isSharedMode && (
          <Typography className={classes.meta} color="textSecondary" gutterBottom>
          by {note.authorName}
        </Typography>
        )}
      </CardContent>
    </Card>
  );
};

Note.propTypes = {
  activeNoteId: PropTypes.number,
  setActiveNoteId: PropTypes.func,
  note: PropTypes.object,
  setIsEditMode: PropTypes.func,
  isEditMode: PropTypes.bool,
  isSharedMode:PropTypes.bool
};

export default Note;
