import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";

import { cutDescription, dateFormatter } from "utils/utils.js";
/*import SharedSelect from "components/SharedSelect/SharedSelect";*/

import useStyles from "./styled";

export const Note = ({
  note,
  activeNoteId,
  setActiveNoteId,
  isEditMode,
  setIsEditMode,
  isSharedMode,
  onDeleteNote,
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
  const onDeleteAnyNote = (event, noteId) => {
    event.stopPropagation();
    setActiveNoteId("");
    onDeleteNote(note.id);
  };
  const cardClasses = [
    classes.root,
    note && note.id === activeNoteId ? classes.active : "",
  ].join(" ");
  return (
    note && <Card className={cardClasses} onClick={() => onShowNote(note.id)}>
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
            {!isSharedMode && (
              <IconButton
                aria-label="Delete"
                className={classes.btn}
                onClick={(event) => onDeleteAnyNote(event, note.id)}
              >
                <DeleteIcon />
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
          {note.description && cutDescription(note.description, 20) + "..."}
        </Typography>
        <Typography className={classes.meta} color="textSecondary" gutterBottom>
          Date of creation {dateFormatter(note.dateCreation)}
        </Typography>
        {isSharedMode && (
          <Typography
            className={classes.meta}
            color="textSecondary"
            gutterBottom
          >
            by {note.authorName}
          </Typography>
        )}
        
      </CardContent>
    </Card>
  );
};

Note.propTypes = {
  activeNoteId: PropTypes.string,
  setActiveNoteId: PropTypes.func,
  note: PropTypes.object,
  setIsEditMode: PropTypes.func,
  isEditMode: PropTypes.bool,
  isSharedMode: PropTypes.bool,
};
