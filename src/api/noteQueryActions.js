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
    let pageToRemove = 0;
    const updatedNotesArr =
      data?.pages.map((page,index) => {
        page.data = page.data?.filter((item) => item?.id !== noteId);
        if(!page.data.length) pageToRemove = index+1;
        return page;
      }) ?? [];
    return {
      pages: updatedNotesArr.slice(pageToRemove),
      pageParams: data.pageParams.slice(pageToRemove),
    };
  });
};

export { setNewNote, setUpdatedNote, setDeletedNote };
