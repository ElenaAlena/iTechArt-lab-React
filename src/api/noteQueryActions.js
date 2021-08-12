const setNewNote = async ({ newNote, queryClient, queryName }) => {  
  queryClient.setQueryData(queryName, (data) => {
    const newPagesArray =
      data?.pages.map((page, index) => {
        if (index === 0) {
          page.data = [newNote, ...page.data];
        }
        return page;
      }) ?? [];
    return {
      pages: newPagesArray,
      pageParams: data.pageParams,
    };
  });
};
const setUpdatedNote = ({ updatedNote, queryClient, queryName }) => {
  queryClient.setQueryData(queryName, (data) => {
    const updatedNotesArr =
      data?.pages.map((page) => {
        page.data = page.data.map((note) =>
          note?.id === updatedNote.id ? updatedNote : note
        );
        return page;
      }) ?? [];
    return {
      pages: updatedNotesArr,
      pageParams: data.pageParams,
    };
  });
};
const setDeletedNote = ({ noteId, queryClient, queryName }) => {
  queryClient.setQueryData(queryName, (data) => {
    //let pageToRemove = 0;
    let delIndex;
    const updatedNotesArr =
      data?.pages.map((page, index) => {
        page.data = page.data.map((item) => {
          item?.id === noteId && (delIndex = item.order);
          if (item && delIndex < item?.order) {
            [delIndex, item.order] = [item.order, delIndex];
          }
          return item;
        });
        page.data = page.data?.filter((item) => item?.id !== noteId);
        //if (!page.data.length) pageToRemove = index;
        return page;
      }) ?? [];
      //updatedNotesArr.splice(pageToRemove,1);
      //data.pageParams.splice(pageToRemove,1);
    return {
      pages: updatedNotesArr,
      pageParams: data.pageParams,
    };
  });
};
const setReorderNote = ({
  updatedNote,
  currentNote,
  queryClient,
  queryName,
}) => {
  [updatedNote.order, currentNote.order] = [
    currentNote.order,
    updatedNote.order,
  ];
  queryClient.setQueryData(queryName, (data) => {
    const updatedNotesArr =
      data?.pages.map((page) => {
        page.data = page.data.map((note) => {
          if (note.id === updatedNote.id) {
            return currentNote;
          }
          if (note.id === currentNote.id) {
            return updatedNote;
          }
          return note;
        });
        return page;
      }) ?? [];
    return {
      pages: updatedNotesArr,
      pageParams: data.pageParams,
    };
  });
};

export { setNewNote, setUpdatedNote, setDeletedNote, setReorderNote };
