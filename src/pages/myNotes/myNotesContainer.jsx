import React, { useState, useEffect, useRef, useCallback } from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import { useStore } from "react-redux";
import { useInfiniteQuery, useQueryClient } from "react-query";

import MyNotes from "./MyNotes";
import { userService } from "utils/userService";
import { addNewNote, updateNote, deleteNote } from "api/noteActions";
import {
  setNewNote,
  setUpdatedNote,
  setDeletedNote,
} from "api/noteQueryActions";

const MyNotesContainer = () => {
  const queryClient = useQueryClient();
  const state = useStore().getState();
  const user = state.authenticationReducer.user;
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [filterDate, setFilterDate] = useState("");
  const [filterTitle, setFilterTitle] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(null);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    "notes",
    async ({ pageParam = 0 }) => {
      const res = await userService.notes(pageParam);
      return res;
    },
    {
      getNextPageParam: (lastPage) => (lastPage ? lastPage.nextId : 1 ?? false),
    }
  );

  if (isFetchingNextPage) {
    console.log("isFetchingNextPage");
  }
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetching, hasNextPage, fetchNextPage]
  );

  useEffect(() => {
    if (filterTitle || filterDate) {
      filterNotes();
    } else setFilteredNotes(null);
  }, [data, filterTitle, filterDate]);

  const getActiveNote = () => {
    let activeNote = null;
    if (activeNoteId) {
      const activeNoteArray = data?.pages.reduce((resultItem, page) => {
        const pageItems = page.data.filter(
          (pageData) => pageData?.id === activeNoteId
        );
        if (pageItems && pageItems.length) resultItem = pageItems;
        return resultItem;
      }, []);
      if (!activeNoteArray.length) {
        setActiveNoteId("");
        setIsEditMode(false);
      } else {
        activeNote = activeNoteArray[0];
      }
    }
    return activeNote;
  };
  const onUpdateNote = (updatedNote) => {
    updateNote({ updatedNote: updatedNote, user: user });
    setUpdatedNote({
      updatedNote: updatedNote,
      queryClient: queryClient,
      queryName: "notes",
    });
    if (filterTitle || filterDate) {
      filterNotes();
    }
  };

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      description: "",
      dateCreation: Date.now(),
      authorName: user.firstName,
    };
    addNewNote({ newNote: newNote, user: user });
    setNewNote({
      newNote: newNote,
      queryClient: queryClient,
      queryName: "notes",
    }).then(() => {
      
      setActiveNoteId(newNote.id);
      setIsEditMode(true);
    });
  };

  const onFilterByDate = (date) => {
    setFilterDate(date);
    filterNotes({ date: date });
  };
  const onFilterByTitle = (text) => {
    setFilterTitle(text);
    filterNotes({ text: text });
  };
  const onDeleteNote = (noteId) => {
    deleteNote({ noteId: noteId, user: user });
    setDeletedNote({
      noteId: noteId,
      queryClient: queryClient,
      queryName: "notes",
    });
    if (filterTitle || filterDate) {
      const updatedNotesArr =filteredNotes.pages.map((page) => {
        page.data = page.data?.filter((item) => item?.id !== noteId);        
        return page;
      }) ?? [];
      setFilteredNotes({ pages: updatedNotesArr });
    }
  };

  const filterNotes = (filter = {}) => {
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
  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <React.Fragment>
      <MyNotes
        notes={filteredNotes || data || []}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
        getActiveNote={getActiveNote}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        onUpdateNote={onUpdateNote}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        onFilterByDate={onFilterByDate}
        onFilterByTitle={onFilterByTitle}
      />
      <div ref={lastElementRef}></div>
    </React.Fragment>
  );
};
MyNotesContainer.propTypes = {
  activeNoteId: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
};
export default MyNotesContainer;
