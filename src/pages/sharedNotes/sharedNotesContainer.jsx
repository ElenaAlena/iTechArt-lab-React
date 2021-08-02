import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";

import { requestOptions } from "api/requestOptions";

import SharedNotes from "./sharedNotes";

const SharedNotesContainer = () => {
  const { isSuccess, isError, data, error } = useQuery(
    "getNotes",
    () => requestOptions.sharedNotes({ pageParam:0 })
  );
  const [activeNoteId, setActiveNoteId] = useState(null);

  const getActiveNote = () => data?.data?.find(({ id }) => id === activeNoteId);

  /*data?.then((res) => {
    setNotes(res);
  });*/
  
  return isSuccess ? (
    <SharedNotes
      notes={data.data}
      activeNoteId={activeNoteId}
      setActiveNoteId={setActiveNoteId}
      getActiveNote={getActiveNote}
      getAllUsersSuccess={false}
    />
  ) : "";
};

SharedNotesContainer.propTypes = {
  activeNoteId: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
};

export default SharedNotesContainer;
