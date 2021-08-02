const addNewNote = ({ newNote, user }) => {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || {};
  const notes = allNotes?.[user.email] || [];
  notes.unshift(newNote);
  allNotes[user.email] = notes;
  localStorage.setItem("notes", JSON.stringify(allNotes));
};

const updateNote = ({ updatedNote, user }) => {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || {};
  let defaultNotes = allNotes?.[user.email];
  if (defaultNotes) {
    const notes = defaultNotes.map((defaultNote) =>
      defaultNote.id === updatedNote.id ? updatedNote : defaultNote
    );
    allNotes[user.email] = notes;
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }
};
const deleteNote = ({ noteId, user }) => {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || {};
  const notes = allNotes?.[user.email].filter(({ id }) => id !== noteId);
  allNotes[user.email] = notes;
  localStorage.setItem("notes", JSON.stringify(allNotes));
  deleteFromShared({ noteId: noteId, user:user });
};
const deleteFromShared = ({ noteId, user }) => {
  const allNotes = JSON.parse(localStorage.getItem("sharednotes")) || [];
  const notes = allNotes?.filter(
    (line) => line.user_id !== user && line.note_id !== noteId
  );  
  localStorage.setItem("sharednotes", JSON.stringify(notes));
};

export { addNewNote, updateNote, deleteNote };
