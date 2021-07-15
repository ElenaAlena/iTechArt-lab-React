import { useState } from "react";
import PropTypes from "prop-types";

import NOTES from "config/constants/notes.js";

import SharedNotes from "./sharedNotes";
const SharedNotesContainer = () => {
    
  const [notes, setNotes] = useState(localStorage.sharedNotes ? JSON.parse(localStorage.sharedNotes) : []);
  const [activeNoteId, setActiveNoteId] = useState(-1);

  const getActiveNote = () => notes.find(({ id }) => id === activeNoteId);

  return <SharedNotes />;
};

SharedNotesContainer.propTypes = {
  activeNoteId: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
};

export default SharedNotesContainer;
