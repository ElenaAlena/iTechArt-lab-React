import PropTypes from "prop-types";

import { Note } from "./Note";
import useStyles from "./styled";

const NotesList = ({
  notes,
  activeNoteId,
  setActiveNoteId,
  isEditMode,
  setIsEditMode,
  isSharedMode = false,
  onDeleteNote,
  getAllUsersSuccess,
  allUsersData,
  setCurrentNote,
  dragService,
  reOrder,
}) => {
  return (
    <div style={useStyles.noteList}>
      {notes?.map(
        (note, index) =>
          note && (
            <Note
              note={note}
              activeNoteId={activeNoteId}
              setActiveNoteId={setActiveNoteId}
              isEditMode={isEditMode}
              setIsEditMode={setIsEditMode}
              isSharedMode={isSharedMode}
              key={note.id}
              onDeleteNote={onDeleteNote}
              getAllUsersSuccess={getAllUsersSuccess}
              allUsersData={allUsersData}
              dragService={dragService}
              setCurrentNote={setCurrentNote}
              reOrder={reOrder}
            />
          )
      )}
    </div>
  );
};

NotesList.propTypes = {
  activeNoteId: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
  setIsEditMode: PropTypes.func,
  isEditMode: PropTypes.bool,
};

export default NotesList;
