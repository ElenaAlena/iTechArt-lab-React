import PropTypes from 'prop-types';

const MyNoteDesctiption = ({ activeNote }) => {
  if (!activeNote) return <div className="no-active-note"  style={{ flex: "3" }}>No Active Note</div>;
  return <p>{activeNote.description}</p>;
};
MyNoteDesctiption.propTypes = {
    activeNote: PropTypes.object
  }
export default MyNoteDesctiption;
