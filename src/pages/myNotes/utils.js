import {
    reorderNote,
  } from "api/noteActions";
  import {
    setReorderNote,
  } from "api/noteQueryActions";
const useReOrder = ({currentNote,user,queryClient},note) => {
    //от onServer
    reorderNote({ note: note, currentNote: currentNote, user: user });
    setReorderNote({
      updatedNote: note,
      currentNote: currentNote,
      queryClient: queryClient,
      queryName: "notes",
    });
  };
const useFilterNotes = (
  { setActiveNoteId, filterTitle, filterDate, data, setFilteredNotes },
  filter = {}
) => {
  setActiveNoteId(null);

  const fText = filter.text ? filter.text : filterTitle;
  const fDate = filter.date ? filter.date : filterDate;

  const notes = [];
  data?.pages.forEach((page, index) => {
    notes[index] = {};
    notes[index].data = page.data.filter((pageData) => {
      if (pageData) {
        let res = true;
        if (fText) {
          res = pageData.title.toLowerCase().includes(fText.toLowerCase());
        }
        if (fDate) {
          res =
            res &&
            new Date(pageData.dateCreation).toDateString() ===
              new Date(fDate).toDateString();
        }
        return res;
      }
      return false;
    });
  });
  setFilteredNotes({ pages: notes });
};

export const helpers = {
  useReOrder,
  useFilterNotes,
};
