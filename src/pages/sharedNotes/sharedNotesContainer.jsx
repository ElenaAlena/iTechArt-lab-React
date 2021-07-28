import { useState } from "react";
import PropTypes from "prop-types";

import NOTES from "config/constants/notes.js";

import SharedNotes from "./sharedNotes";

const SharedNotesContainer = () => {
  const [notes, setNotes] = useState(
    localStorage.sharedNotes ? JSON.parse(localStorage.sharedNotes) : NOTES
  );
  const [activeNoteId, setActiveNoteId] = useState(null);

  const getActiveNote = () => notes.find(({ id }) => id === activeNoteId);

  return (
    <SharedNotes
      notes={notes}
      activeNoteId={activeNoteId}
      setActiveNoteId={setActiveNoteId}
      getActiveNote={getActiveNote}
    />
  );
};

SharedNotesContainer.propTypes = {
  activeNoteId: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
};

export default SharedNotesContainer;
