import PropTypes from "prop-types";

import { Note } from "./Note";
import useStyles from "./styled"

const NotesList = ({ notes,activeNoteId, setActiveNoteId,isEditMode, setIsEditMode,isSharedMode=false, onDeleteNote}) => {  

  return (
  <div style={useStyles.noteList}>
    {notes && notes.map((note, index) => (
      <Note
        note={note}     
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        isSharedMode={isSharedMode}
        key={index}
        onDeleteNote={onDeleteNote}
      />
    ))}
  </div>
)}

NotesList.propTypes = {
  activeNoteId: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
  setIsEditMode:PropTypes.func,
  isEditMode:PropTypes.bool,
};

export default NotesList;