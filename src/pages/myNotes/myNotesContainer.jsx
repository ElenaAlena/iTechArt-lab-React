import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import NOTES from "config/constants/notes.js";

import MyNotes from "./MyNotes";

const MyNotesContainer=() =>{
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : NOTES);
  const [activeNoteId, setActiveNoteId] = useState(-1);
  const [isEditMode,setIsEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  const getActiveNote = () => notes.find(({ id }) => id === activeNoteId);
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => note.id === updatedNote.id ? updatedNote : note);
    setNotes(updatedNotesArr);
  };

  return (
    <MyNotes
      notes={notes}
      activeNoteId={activeNoteId}
      setActiveNoteId={setActiveNoteId}
      getActiveNote={getActiveNote}
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
      onUpdateNote={onUpdateNote}
    />
  );
}
MyNotesContainer.propTypes = {
  activeNoteId: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
};
export default MyNotesContainer;
