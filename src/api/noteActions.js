import { sordByOrder } from "utils/utils";

const addNewNote = ({ newNote, user }) => {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || {};
  const notes = allNotes?.[user.email] || [];
  notes.unshift(newNote);
  allNotes[user.email] = notes.sort(sordByOrder);
  localStorage.setItem("notes", JSON.stringify(allNotes));
};

const updateNote = ({ updatedNote, user }) => {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || {};
  let defaultNotes = allNotes?.[user.email];
  if (defaultNotes) {
    const notes = defaultNotes.map((defaultNote) =>
      defaultNote.id === updatedNote.id ? updatedNote : defaultNote
    );
    allNotes[user.email] = notes.sort(sordByOrder);
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }
};
const deleteNote = ({ noteId, user }) => {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || {};
  let notes = allNotes?.[user.email].sort(sordByOrder);
  let delOrder;
  notes = notes?.filter(({ id, order }) => {
    delOrder = order;
    return id !== noteId;
  });
  notes = notes.map((note) => {
    if (delOrder < note.order) {
      [delOrder, note.order] = [note.order, delOrder];
    }
    return note;
  });
  allNotes[user.email] = notes.sort(sordByOrder);
  localStorage.setItem("notes", JSON.stringify(allNotes));
  deleteFromShared({ noteId: noteId, user: user });
};
const reorderNote = ({ note, currentNote, user }) => {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || {};
  let notes = allNotes?.[user.email];
  notes = notes.map((item) => {
    if (item.id === note.id) {
      item.order = currentNote.order;
    }
    if (item.id === currentNote.id) {
      item.order = note.order;
    }
    return item;
  });
  allNotes[user.email] = notes.sort(sordByOrder);
  localStorage.setItem("notes", JSON.stringify(allNotes));
};
const deleteFromShared = ({ noteId, user }) => {
  const allNotes = JSON.parse(localStorage.getItem("sharednotes")) || [];
  const notes = allNotes?.filter(
    (line) => line.user_id !== user && line.note_id !== noteId
  );
  localStorage.setItem("sharednotes", JSON.stringify(notes));
};

export { addNewNote, updateNote, deleteNote, reorderNote };
