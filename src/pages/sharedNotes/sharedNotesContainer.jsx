import { useState } from "react";
import PropTypes from "prop-types";

import {useSharedNotes} from "api/requests";
import SharedNotes from "./sharedNotes";

const SharedNotesContainer = () => {
  const [activeNoteId, setActiveNoteId] = useState(null);
  
  const { isSuccess, isError, data, error } = useSharedNotes();

  const getActiveNote = () => data?.data?.find(({ id }) => id === activeNoteId);
  
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
