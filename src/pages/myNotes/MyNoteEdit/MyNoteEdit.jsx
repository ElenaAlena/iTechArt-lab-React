import { useState } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from '@material-ui/core/Button';

import useStylesNoteEdit from "./styled";

const MyNoteEdit = ({activeNote, setIsEditMode, onUpdateNote}) => {
  const classes = useStylesNoteEdit();

  const [updatedNote, setUpdatedNote] = useState({...activeNote})

  const onEditField = (field, value) => {
    setUpdatedNote({...updatedNote,[field]:value}) 
  };

  const onSaveNote = ()=>{    
    onUpdateNote(updatedNote);
    //setIsEditMode(false)
  }
  return (    
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.formElementContainer}>
        <TextField
          id="outlined-basic"
          label="Note Title"
          variant="outlined"
          value={updatedNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          fullWidth
        />
      </div>
      <div className={classes.formElementContainer}>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Add description for note"
          value={updatedNote.description}
          className={classes.formElement}
          onChange={(e) => onEditField("description", e.target.value)}
        />
      </div>
      <Button variant="contained" color="primary" onClick={onSaveNote}>
        Save Note
      </Button>
    </form>
  );
};

MyNoteEdit.propTypes = {
  activeNote: PropTypes.object,
  onUpdateNote:PropTypes.func,
  setIsEditMode:PropTypes.func,
};
export default MyNoteEdit;
