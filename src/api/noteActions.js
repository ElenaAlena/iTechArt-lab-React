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
  const notes = allNotes?.[user.email].filter(
    ({ id }) => id !== noteId
  );
  allNotes[user.email] = notes;
  localStorage.setItem("notes", JSON.stringify(allNotes));
};

export { addNewNote, updateNote, deleteNote };
