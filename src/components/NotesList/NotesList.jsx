import PropTypes from "prop-types";

import { Note } from "./Note";

const NotesList = ({ notes, activeNoteId, setActiveNoteId,isEditMode, setIsEditMode,isSharedMode=false }) => (
  <div className="notes-list">
    {notes.map((note) => (
      <Note
        note={note}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        isSharedMode={isSharedMode}
        key={note.id}
      />
    ))}
  </div>
)

NotesList.propTypes = {
  activeNoteId: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
  setIsEditMode:PropTypes.func,
  isEditMode:PropTypes.bool,
};

export default NotesList;